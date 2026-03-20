import json, base64, time, os, sys

API_KEY = "AIzaSyBTEs-Vn9iUSGiVfYRr89Um80NgTZ8Piv4"
URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key={API_KEY}"
IMG_DIR = os.path.dirname(os.path.abspath(__file__))

PROMPTS = {
    # 001 임플란트 뼈이식
    "001_01_implant_structure": "Generate a clean professional dental implant cross-section diagram. Label parts with English letters: A (crown/prosthetic tooth at top), B (abutment/connecting piece), C (fixture/titanium screw embedded in bone), D (alveolar bone surrounding the screw). Use teal (#047e74) and white color scheme with light gray (#f6f8f5) background. Simple clean vector illustration style, medical education diagram. Labels A,B,C,D clearly visible with pointing lines. No people, no photographs.",

    "001_02_bone_comparison": "Generate a side-by-side comparison diagram of dental implant placement. LEFT side labeled 'Case 1': implant screw fully surrounded by sufficient bone, stable and secure. RIGHT side labeled 'Case 2': implant screw with exposed threads, insufficient bone around it, gaps visible. Use teal (#047e74) color scheme with light gray background. Clean medical vector illustration. No people.",

    "001_03_bone_graft_cases": "Generate a 2x2 grid medical infographic showing 4 cases where bone grafting is needed before dental implant. Label each quadrant: A (tooth extracted long ago - show empty socket with reduced bone), B (periodontal disease - show damaged gum and bone loss), C (upper molar area - show maxillary sinus cavity above thin bone), D (trauma/accident - show fractured jaw bone). Teal (#047e74) color scheme, clean vector style, light gray background. No people.",

    "001_04_procedure_steps": "Generate a horizontal 4-step timeline infographic for bone graft procedure. Step 1: gum incision and graft material placement. Step 2: membrane cover and suturing. Step 3: healing period (show calendar icon with 3-6 months). Step 4: implant placement into healed bone. Use numbered circles 1,2,3,4 connected by arrows. Teal (#047e74) and white color scheme, clean medical vector style. No people.",

    "001_05_graft_materials": "Generate a comparison infographic of 4 bone graft materials arranged in a row. Label A (autograft - from patient's own bone), B (allograft - processed human donor bone), C (xenograft - bovine/porcine derived), D (synthetic - HA/TCP material). Show each as a simple icon with the letter label. Teal (#047e74) color scheme, clean medical education style, light gray background. No people.",

    "001_06_recovery_care": "Generate a 2x2 grid infographic showing post-surgery care instructions. A (no smoking - cigarette with X mark), B (no alcohol - glass with X mark), C (soft food only - bowl of soup), D (no nose blowing - nose with X mark). Clean simple icons with letter labels. Teal (#047e74) color scheme, light gray background, medical infographic style. No people.",

    "001_07_bone_loss_timeline": "Generate a horizontal bar chart or timeline showing bone loss after tooth extraction over time. Show 3 stages: '1-3 months' (minimal bone loss, green/teal bar), '6-12 months' (moderate bone loss, yellow/amber bar), '1+ years' (significant bone loss, darker bar). Use simple bar chart style with teal (#047e74) accents. Clean infographic, light gray background. No people.",

    "001_08_prevention": "Generate a simple infographic showing dental checkup cycle. Show a circular diagram with: regular checkup every 6 months, scaling/cleaning, early implant consultation after extraction. Use teal (#047e74) color scheme, clean vector style, calendar or clock motif. Light gray background. No people.",

    # 002 잇몸출혈 치주질환
    "002_01_bleeding_warning": "Generate a dental health warning infographic. Show a toothbrush with pink/red traces indicating gum bleeding. Simple clean medical illustration. Add text label 'Warning Sign'. Teal (#047e74) and soft red accent color scheme, light gray background. Clean vector style. No people.",

    "002_02_temporary_vs_persistent": "Generate a side-by-side comparison infographic. LEFT labeled 'Type A' showing temporary causes of gum bleeding (hard toothbrush, first-time flossing, food scratch). RIGHT labeled 'Type B' showing persistent causes (plaque buildup, inflammation, gum disease). Use teal (#047e74) for Type A and navy (#1d2b57) for Type B. Clean medical vector style, light gray background. No people.",

    "002_03_periodontal_stages": "Generate a 4-stage progression diagram of periodontal disease. Stage 1: healthy gum with slight swelling. Stage 2: early periodontitis with shallow pocket. Stage 3: moderate periodontitis with bone loss and deeper pocket. Stage 4: advanced periodontitis with severe bone loss and loose tooth. Show cross-section views side by side, labeled 1,2,3,4. Teal to dark navy gradient. Clean medical education illustration. No people.",

    "002_04_healthy_vs_diseased": "Generate a side-by-side comparison of healthy gums vs diseased gums. LEFT labeled 'A': pink, firm gums tightly hugging teeth. RIGHT labeled 'B': red, swollen gums pulled away from teeth with visible pocket. Clean dental cross-section illustration. Teal (#047e74) color scheme, light gray background. No people.",

    "002_05_bass_method": "Generate a dental hygiene infographic showing the Bass brushing method. Show a toothbrush angled at 45 degrees against the gum line. Label the angle as '45 degrees'. Show short vibrating motion arrows. Clean simple medical education diagram. Teal (#047e74) color scheme, light gray background. No people, no faces.",

    "002_06_floss_technique": "Generate a 4-step flossing technique diagram. Step 1: wrap floss around fingers. Step 2: gently guide between teeth. Step 3: curve into C-shape against tooth. Step 4: slide up and down along tooth surface. Label steps 1,2,3,4. Teal (#047e74) color scheme, clean vector illustration. No people, show only hands/teeth diagrams.",

    "002_07_smoking_risk": "Generate a simple comparison bar chart infographic. Show risk multiplier of periodontal disease: non-smoker (1x, short teal bar) vs smoker (2-6x, long dark navy bar). Clean minimal chart style. Teal (#047e74) and navy (#1d2b57) colors, light gray background. No people.",

    "002_08_checkup_timeline": "Generate a timeline infographic showing when to visit dentist for gum bleeding. Show: 'Day 1-3: change toothbrush, check technique' then arrow to 'Day 7: still bleeding?' then arrow to 'Day 14+: visit dentist'. Use teal (#047e74) numbered circles connected by lines. Clean medical infographic, light gray background. No people.",

    # 003 소아치과
    "003_01_first_visit_timing": "Generate a clean infographic showing the recommended first dental visit timing for children. Show a baby tooth emerging from gum with a calendar icon indicating '12 months' or 'within 6 months after first tooth'. Teal (#047e74) color scheme, warm and friendly but professional medical style. Light gray background. No people, no faces.",

    "003_02_baby_teeth_chart": "Generate a dental chart showing baby teeth (deciduous teeth) arrangement. Show upper and lower jaw with 20 teeth total, labeled with letters A through T or numbered positions. Show eruption sequence with arrows. Teal (#047e74) and white color scheme, clean medical diagram. No people.",

    "003_03_checkup_flow": "Generate a horizontal flow diagram showing pediatric dental checkup process. Step 1: visual examination. Step 2: bite/occlusion check. Step 3: fluoride application. Step 4: oral hygiene counseling. Use numbered circles 1,2,3,4 connected by arrows. Teal (#047e74) color scheme, child-friendly but professional. No people.",

    "003_04_reduce_fear": "Generate a 4-panel infographic about reducing children's dental anxiety. Panel A: read dental story books before visit. Panel B: visit during morning when child is rested. Panel C: parent accompanies in treatment room. Panel D: praise after the visit. Label panels A,B,C,D. Teal (#047e74) color scheme, warm professional style with simple icons. No people, no faces.",

    "003_05_baby_teeth_roles": "Generate an infographic showing 3 important roles of baby teeth. A: space guide for permanent teeth (show baby tooth with permanent tooth below). B: prevent cavity bacteria transfer (show bacteria icon with arrow). C: chewing function for nutrition (show food/nutrition icon). Label A,B,C. Teal (#047e74) color scheme, clean medical education style. No people.",

    "003_06_brushing_by_age": "Generate a horizontal timeline infographic showing toothbrushing guide by age. Stage 1 (6-12 months): gauze/finger brush. Stage 2 (2 years): rice-grain size fluoride toothpaste. Stage 3 (3-6 years): pea-size toothpaste, parent finishes. Stage 4 (6+ years): independent brushing with supervision. Label stages 1,2,3,4. Teal (#047e74) color scheme. No people.",

    "003_07_insurance_benefits": "Generate a 3-card infographic showing dental insurance benefits for children. Card A: fluoride application (2x per year). Card B: sealant (permanent molars). Card C: infant oral screening (3 free visits). Teal (#047e74) and white, clean card layout with simple icons. Light gray background. No people.",

    "003_08_checkup_schedule": "Generate a calendar-style infographic showing recommended pediatric dental checkup intervals. Show two options: 'Every 3 months' for high-risk children and 'Every 6 months' for low-risk children. Use a circular or calendar design. Teal (#047e74) color scheme, clean professional medical style. No people."
}

def generate_image(name, prompt):
    import subprocess
    payload = json.dumps({
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"responseModalities": ["TEXT", "IMAGE"]}
    })

    result = subprocess.run(
        ["curl", "-s", URL, "-H", "Content-Type: application/json", "-d", payload],
        capture_output=True, text=True, timeout=120
    )

    data = json.loads(result.stdout)

    if "candidates" not in data:
        print(f"FAIL: {name} - {json.dumps(data)[:200]}")
        return False

    parts = data["candidates"][0]["content"]["parts"]
    for part in parts:
        if "inlineData" in part:
            img_data = base64.b64decode(part["inlineData"]["data"])
            ext = "png" if "png" in part["inlineData"]["mimeType"] else "jpg"
            path = os.path.join(IMG_DIR, f"{name}.{ext}")
            with open(path, "wb") as f:
                f.write(img_data)
            print(f"OK: {name}.{ext} ({len(img_data):,} bytes)")
            return True

    print(f"FAIL: {name} - no image in response")
    return False

if __name__ == "__main__":
    total = len(PROMPTS)
    success = 0
    fail = 0

    for i, (name, prompt) in enumerate(PROMPTS.items(), 1):
        print(f"[{i}/{total}] Generating {name}...")
        try:
            if generate_image(name, prompt):
                success += 1
            else:
                fail += 1
        except Exception as e:
            print(f"ERROR: {name} - {e}")
            fail += 1

        if i < total:
            time.sleep(3)  # rate limit

    print(f"\nDone: {success} success, {fail} fail out of {total}")
