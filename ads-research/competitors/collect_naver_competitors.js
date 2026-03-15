#!/usr/bin/env node
/**
 * Naver medical competitor scanner (heuristic)
 * Usage:
 *   node collect_naver_competitors.js
 * Output:
 *   ./competitor_scan_YYYY-MM-DD.json
 */

const { chromium } = require('playwright');
const fs = require('fs');

const keywords = [
  '강남 치과', '강남 임플란트', '강남 교정치과', '서초 치과', '잠실 치과',
  '강남 피부과', '강남 성형외과', '강남 안과', '강남 정형외과', '강남 내과',
  '치과 임플란트 가격', '치아교정 잘하는곳', '사랑니 발치 치과', '치과 야간진료',
  '강남 병원'
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const out = [];

  for (const q of keywords) {
    const url = `https://search.naver.com/search.naver?where=nexearch&query=${encodeURIComponent(q)}`;
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1200);

    const data = await page.evaluate((kw) => {
      const lines = (document.body.innerText || '').split('\n').map(s => s.trim()).filter(Boolean);

      const adSignals = lines.filter(l => /광고|파워링크|AD/.test(l)).slice(0, 12);
      const placeSignals = lines.filter(l => /플레이스|지도|병원|의원|치과/.test(l)).slice(0, 30);

      const names = [];
      for (const l of lines) {
        if (/(치과|의원|병원|한의원)$/.test(l) && l.length <= 40) names.push(l);
      }

      return {
        keyword: kw,
        adSignalCount: adSignals.length,
        adSignals,
        placeSignals,
        probableClinics: [...new Set(names)].slice(0, 25)
      };
    }, q);

    out.push(data);
    console.log(`done: ${q}`);
  }

  const date = new Date().toISOString().slice(0, 10);
  const path = `./competitor_scan_${date}.json`;
  fs.writeFileSync(path, JSON.stringify(out, null, 2));
  await browser.close();
  console.log(`saved: ${path}`);
})();
