#!/usr/bin/env node
const { chromium } = require('playwright');
const fs = require('fs');

const keywordFile = '/Users/jidong/uddental/ads-research/keywords/naver_medical_keywords_60.txt';
const keywords = fs.readFileSync(keywordFile,'utf8').split(/\n/).map(s=>s.trim()).filter(Boolean);

(async()=>{
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const out = [];

  for (const q of keywords){
    const url = 'https://search.naver.com/search.naver?where=nexearch&query=' + encodeURIComponent(q);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 40000 });
    await page.waitForTimeout(900);
    const data = await page.evaluate((kw)=>{
      const lines = (document.body.innerText||'').split('\n').map(s=>s.trim()).filter(Boolean);
      const adSignals = lines.filter(l=>/광고|파워링크|AD/.test(l)).slice(0,20);
      const placeSignals = lines.filter(l=>/플레이스|지도|병원|의원|치과/.test(l)).slice(0,60);
      const names=[];
      for (const l of lines){
        if (/(치과|의원|병원|한의원)$/.test(l) && l.length<=42) names.push(l);
      }
      return {
        keyword: kw,
        adSignalCount: adSignals.length,
        adSignalDetected: adSignals.length>0,
        adSignals,
        placeSignals,
        probableClinics: [...new Set(names)].slice(0,35)
      };
    }, q);
    out.push(data);
    process.stdout.write('.');
  }

  const d = new Date().toISOString().slice(0,10);
  const jsonPath = `/Users/jidong/uddental/ads-research/competitors/competitor_scan_${d}_60.json`;
  fs.writeFileSync(jsonPath, JSON.stringify(out,null,2));
  console.log(`\nsaved ${jsonPath}`);

  // aggregate score seed
  const freq = new Map();
  for (const row of out){
    const uniq = new Set(row.probableClinics||[]);
    for (const n of uniq){
      if (/(광고|카페|공식|블로그|뉴스|플레이스|지도)/.test(n)) continue;
      if (!/(치과|의원|병원|한의원)$/.test(n)) continue;
      freq.set(n, (freq.get(n)||0)+1);
    }
  }
  const sorted = [...freq.entries()].sort((a,b)=>b[1]-a[1]);
  const top = sorted.slice(0,40);
  const md = [];
  md.push('# Competitor Scan 60 Keywords Summary');
  md.push('');
  md.push(`- keywords: ${out.length}`);
  md.push(`- ad-signal keywords: ${out.filter(x=>x.adSignalDetected).length}/${out.length}`);
  md.push('');
  md.push('## Top repeated clinics');
  for (const [name,c] of top){ if (c>=2) md.push(`- ${name} (${c})`); }
  const mdPath = `/Users/jidong/uddental/ads-research/competitors/competitor_scan_${d}_60_summary.md`;
  fs.writeFileSync(mdPath, md.join('\n')+'\n');
  console.log(`saved ${mdPath}`);

  const csvRows = ['clinic_name,repeat_count,priority_tier,notes'];
  for (const [name,c] of top){
    const tier = c>=4?'A':c>=2?'B':'C';
    csvRows.push(`"${name}",${c},${tier},`);
  }
  const csvPath = `/Users/jidong/uddental/ads-research/competitors/competitor_candidates_${d}_60.csv`;
  fs.writeFileSync(csvPath, csvRows.join('\n'));
  console.log(`saved ${csvPath}`);

  await browser.close();
})();
