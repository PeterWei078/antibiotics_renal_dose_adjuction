import { useState, useMemo, useEffect } from 'react';

// --- Icons (Shimmed for browser compatibility) ---
const IconBase = ({ children, className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>{children}</svg>
);
const Search = (props) => <IconBase {...props}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></IconBase>;
const Calculator = (props) => <IconBase {...props}><rect width="16" height="20" x="4" y="2" rx="2" /><line x1="8" x2="16" y1="6" y2="6" /><line x1="16" x2="16" y1="14" y2="18" /><path d="M16 10h.01" /><path d="M12 10h.01" /><path d="M8 10h.01" /><path d="M12 14h.01" /><path d="M8 14h.01" /><path d="M12 18h.01" /><path d="M8 18h.01" /></IconBase>;
const User = (props) => <IconBase {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></IconBase>;
const Clipboard = (props) => <IconBase {...props}><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></IconBase>;
const Info = (props) => <IconBase {...props}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></IconBase>;
const AlertCircle = (props) => <IconBase {...props}><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12" y1="16" y2="16.01" /></IconBase>;
const CheckCircle2 = (props) => <IconBase {...props}><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></IconBase>;
const FlaskConical = (props) => <IconBase {...props}><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" /><path d="M8.5 2h7" /><path d="M7 16h10" /></IconBase>;
const ShieldAlert = (props) => <IconBase {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></IconBase>;
const RotateCcw = (props) => <IconBase {...props}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></IconBase>;
const X = (props) => <IconBase {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></IconBase>;
const Activity = (props) => <IconBase {...props}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></IconBase>;
const Waves = (props) => <IconBase {...props}><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /></IconBase>;
const BookOpen = (props) => <IconBase {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></IconBase>;
const Edit2 = (props) => <IconBase {...props}><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></IconBase>;
const Save = (props) => <IconBase {...props}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></IconBase>;
const Trash2 = (props) => <IconBase {...props}><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></IconBase>;
const Plus = (props) => <IconBase {...props}><line x1="12" x2="12" y1="5" y2="19" /><line x1="5" x2="19" y1="12" y2="12" /></IconBase>;
const Download = (props) => <IconBase {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></IconBase>;
const Upload = (props) => <IconBase {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></IconBase>;
const Database = (props) => <IconBase {...props}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></IconBase>;
const Copy = (props) => <IconBase {...props}><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></IconBase>;
const Tag = (props) => <IconBase {...props}><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" /><line x1="7" y1="7" x2="7.01" y2="7" /></IconBase>;

// --- 預設值 ---
const DEFAULT_VALUES = {
  age: '65',
  weight: '70',
  height: '170',
  scr: '1.2',
  gender: 'male',
  isHD: false,
  searchTerm: '',
  inputMode: 'calculate', // 'calculate' 或 'manual'
  manualCrcl: ''
};

// --- 數據定義 (整合 Table 17A & 17B & 新增藥物) ---
const DRUG_DATA = [
  // --- Table 17A: 需要調整劑量的藥物 ---
  {
    id: "cefepime",
    name: "Cefepime",
    tradeNames: ["Maxipime"],
    category: "Cephalosporin (4th Gen)",
    is17B: false,
    normal: "1–2g q8-12h",
    adjustment: { "50": "1–2g q8-12h", "10-50": "1–2g q24h", "10": "1g q24h" },
    hdDose: "1g q24h (透析後給藥)",
    hdNotes: "血液透析會移除大量 Cefepime。務必在透析結束後才給予當日劑量。",
    highlights: ["Neurotoxicity risk", "Pseudomonas coverage"],
    standardPearls: [
      "Cefepime 在腎衰竭患者極易引起神經毒性，務必根據 CrCl 減量。",
      "Cefepime 調整門檻主要以 50 mL/min 為界限。",
      "對於治療綠膿桿菌 (Pseudomonas)，需確保劑量足以維持有效濃度。"
    ],
    hdPearls: ["血液透析清除率高，建議每日一次 1g，並固定於透析結束後給藥。"]
  },
  {
    id: "ceftazidime",
    name: "Ceftazidime",
    tradeNames: ["Fortum"],
    category: "Cephalosporin (3rd Gen)",
    is17B: false,
    normal: "2g q8h",
    adjustment: { "50": "2g q8-12h", "10-50": "2g q12-24h", "10": "2g q24-48h" },
    hdDose: "1g q24-48h (+1g after HD)",
    hdNotes: "透析會顯著移除，建議每次透析後補充 1g 劑量。",
    highlights: ["Pseudomonas coverage"],
    standardPearls: ["抗綠膿桿菌 (Pseudomonas) 的重要藥物。"],
    hdPearls: ["建議於透析後給予補充劑量 (1g)。"]
  },
  {
    id: "cefmetazole",
    name: "Cefmetazole",
    tradeNames: ["Zefazone"],
    category: "Cephamycin (2nd Gen)",
    is17B: false,
    normal: "1-2g q6-12h",
    adjustment: { "50": "1-2g q12h", "10-50": "1-2g q16-24h", "10": "1-2g q48h" },
    hdDose: "1-2g after HD",
    hdNotes: "血液透析清除率高，建議於透析後給藥。",
    highlights: ["Anaerobic coverage"],
    standardPearls: [],
    hdPearls: ["透析後補藥。"]
  },
  {
    id: "ceftaroline",
    name: "Ceftaroline",
    tradeNames: ["Zinforo"],
    category: "Cephalosporin (5th Gen)",
    is17B: false,
    normal: "600mg q12h",
    adjustment: { "50": "600mg q12h", "30-50": "400mg q12h", "15-30": "300mg q12h", "15": "200mg q12h" },
    hdDose: "200mg q12h (After HD)",
    hdNotes: "透析患者建議 200mg q12h，且在透析日需於透析後給藥。",
    highlights: ["MRSA coverage"],
    standardPearls: ["針對 MRSA 有效的頭孢菌素。"],
    hdPearls: ["透析日請於透析結束後給藥。"]
  },
  {
    id: "cefoperazone-sulbactam",
    name: "Cefoperazone-Sulbactam (Brosym)",
    category: "Cephalosporin / BLI",
    is17B: false,
    normal: "1-2g (Cefoperazone) q12h",
    adjustment: { "30": "No change", "15-30": "Max Sulbactam 1g q12h", "15": "Max Sulbactam 0.5g q12h" },
    hdDose: "Supplement Sulbactam after HD",
    hdNotes: "Cefoperazone 為膽道排除，無需調整；Sulbactam 為腎排除，需調整並於 HD 後補給。",
    highlights: ["Biliary excretion (Cefoperazone)", "Acinetobacter (Sulbactam)"],
    standardPearls: [],
    hdPearls: ["透析會移除 Sulbactam，建議透析後補給。"]
  },
  {
    id: "daptomycin",
    name: "Daptomycin (Cubicin)",
    category: "Lipopeptide",
    is17B: false,
    normal: "4-6 mg/kg q24h",
    adjustment: { "30": "4-6 mg/kg q24h", "below30": "4-6 mg/kg q48h" },
    hdDose: "4-6 mg/kg q48h (After HD)",
    hdNotes: "透析患者建議延長給藥間隔至 q48h，並於透析後給藥。",
    highlights: ["VRE/MRSA coverage", "Monitor CPK"],
    standardPearls: ["主要依據 CrCl < 30 調整頻率。", "需監測 CPK。"],
    hdPearls: ["若下一次透析在 72 小時後，可考慮增加劑量 (9 mg/kg)。"]
  },
  {
    id: "fluconazole",
    name: "Fluconazole (Diflucan)",
    category: "Antifungal",
    is17B: false,
    normal: "200-800mg q24h",
    adjustment: { "50": "100% dose", "below50": "50% dose" },
    hdDose: "100% dose after HD",
    hdNotes: "透析會顯著移除，透析後給予全劑量 (100%)。",
    highlights: ["High bioavailability"],
    standardPearls: ["CrCl < 50 時劑量減半。"],
    hdPearls: ["透析後給予完整單日劑量。"]
  },
  {
    id: "aztreonam",
    name: "Aztreonam",
    tradeNames: ["Azactam"],
    category: "Monobactam",
    is17B: false,
    normal: "1–2g q8h",
    adjustment: { "50": "1–2g q8h", "10-50": "0.5–1g q8h", "10": "0.25–0.5g q8h" },
    hdDose: "500mg 透析後給藥",
    hdNotes: "血液透析會顯著清除。建議於每次透析結束後補充劑量。",
    highlights: ["Gram-negative only", "PCN allergy safe"],
    standardPearls: ["Aztreonam 僅對革蘭氏陰性菌具有活性。", "對於 Penicillin 嚴重過敏者是安全選擇。", "調整切點為 10 與 50 mL/min。"],
    hdPearls: ["透析後補給追加劑量以維持療效。"]
  },
  {
    id: "ciprofloxacin-iv",
    name: "Ciprofloxacin (IV)",
    tradeNames: ["Cipro"],
    category: "Fluoroquinolone",
    is17B: false,
    normal: "400 mg q8-12h",
    adjustment: { "50": "400 mg q8-12h", "30-50": "400 mg q12h", "30": "400 mg q24h" },
    hdDose: "400 mg q24h (透析後給藥)",
    hdNotes: "血液透析會移除約 30–50% 的藥物。建議於透析結束後補給。",
    highlights: ["CNS side effects risk"],
    standardPearls: ["腎功能調整切點為 30 與 50 mL/min。", "需注意神經毒性風險 (如混亂、癲癇)。"],
    hdPearls: ["務必安排在透析結束後給藥。"]
  },
  {
    id: "acyclovir-iv",
    name: "Acyclovir (IV)",
    tradeNames: ["Zovirax"],
    category: "Antiviral",
    is17B: false,
    normal: "5–10 mg/kg q8h",
    adjustment: { "50": "5–10 mg/kg q8h", "25-50": "5–10 mg/kg q12h", "10-25": "5–10 mg/kg q24h", "10": "2.5–5 mg/kg q24h" },
    hdDose: "2.5–5 mg/kg q24h (透析後給藥)",
    hdNotes: "血液透析會清除約 60% 的藥物。應於透析結束後補給追加劑量。",
    highlights: ["Crystal nephropathy risk"],
    standardPearls: ["Acyclovir 易在腎小管產生結晶，務必充分補水。", "輸注時間不可少於 1 小時。"],
    hdPearls: ["血液透析清除率高，應於透析結束後給藥。"]
  },
  {
    id: "amoxicillin-clavulanate",
    name: "Amoxicillin-Clavulanate",
    tradeNames: ["Augmentin", "Curam"],
    category: "Penicillin/BLI",
    is17B: false,
    normal: "875/125mg q12h 或 500/125mg q8h",
    adjustment: { "30": "No change", "10-30": "250-500/125mg q12h", "10": "250-500/125mg q24h" },
    hdDose: "250-500/125mg q24h (透析後追加一劑)",
    highlights: ["Avoid 875mg if CrCl < 30"],
    standardPearls: ["當 CrCl < 30 時，建議改用 500mg 劑型以利頻率調整。"],
    hdPearls: ["務必於透析結束後補給追加劑量。"]
  },
  {
    id: "voriconazole",
    name: "Voriconazole",
    tradeNames: ["Vfend"],
    category: "Antifungal",
    is17B: false,
    normal: "Oral: 200mg q12h / IV: 4-6 mg/kg q12h",
    adjustment: { "50": "No change", "below50": "IV: 建議改口服 / Oral: 無需調整" },
    hdDose: "Oral: 200mg q12h",
    hdNotes: "透析患者強烈建議改口服，避開 IV 劑型中的 SBECD 蓄積。",
    highlights: ["Oral preferred if CrCl < 50"],
    standardPearls: ["當 CrCl < 50 mL/min 時，IV 劑型中的 SBECD 會蓄積。", "口服劑型不需要調整劑量。"],
    hdPearls: ["透析不顯著清除此藥，維持口服給藥。"]
  },
  {
    id: "ampicillin-sulbactam",
    name: "Ampicillin-Sulbactam",
    tradeNames: ["Unasyn"],
    category: "Penicillin/BLI",
    is17B: false,
    normal: "1.5g–3g q6h",
    adjustment: { "30": "1.5g–3g q6h", "15-30": "1.5g–3g q12h", "15": "1.5g–3g q24h" },
    hdDose: "1.5g–3g q24h (透析後給藥)",
    highlights: ["Acinetobacter baumannii activity"],
    standardPearls: ["調整切點為 15 與 30 mL/min。"],
    hdPearls: ["血液透析清除率高。"]
  },
  {
    id: "ampicillin-sulbactam-high",
    name: "Ampicillin-Sulbactam (High Dose for CRAB)",
    tradeNames: ["Unasyn"],
    category: "Penicillin/BLI",
    is17B: false,
    normal: "9g (6g Amp/3g Sulb) q8h",
    adjustment: { "30": "9g q8h (Max Sulb 9g/day)", "15-30": "4.5g-9g q12h (Max Sulb 3-6g/day)", "15": "1.5-3g q24h (Avoid High Dose)" },
    hdDose: "1.5-3g q24h (Standard Dose Only)",
    hdNotes: "嚴重腎功能不全或洗腎病人不建議使用 High-dose (蓄積毒性風險)。維持標準劑量並於透析後給藥。",
    highlights: ["Target: CRAB", "High Neurotoxicity Risk"],
    standardPearls: [
      "針對 CRAB 感染，Sulbactam 每日總量目標 6-9g (即 Unasyn 18-27g)。",
      "CrCl < 30 時 Sulbactam 排除減慢，易蓄積導致癲癇，務必減量/減頻。",
      "CrCl 15-29 建議每日 Sulbactam 上限 3-6g (約 Unasyn 9-18g/day) 並分次給予。"
    ],
    hdPearls: [
      "洗腎病人 Sulbactam 半衰期極長，High-dose 風險過高，不建議使用。",
      "透析會移除藥物 (約 40-60%)，務必於透析後補充標準劑量。"
    ]
  },
  {
    id: "meropenem",
    name: "Meropenem",
    tradeNames: ["Meronem"],
    category: "Carbapenem",
    is17B: false,
    normal: "1g q8h",
    adjustment: { "50": "1g q8h", "25-50": "1g q12h", "10-25": "500mg q12h", "10": "500mg q24h" },
    hdDose: "500mg q24h (透析後給藥)",
    highlights: ["Extended infusion support"],
    standardPearls: ["建議延長輸注 (如 1g over 3h)。", "調整切點為 50/25/10。"],
    hdPearls: ["透析後補藥極為重要。"]
  },
  {
    id: "imipenem-cilastatin",
    name: "Imipenem-cilastatin",
    tradeNames: ["Tienam"],
    category: "Carbapenem",
    is17B: false,
    normal: "500mg q6h",
    adjustment: { "50": "500mg q6h", "10-50": "250mg q8-12h", "10": "250mg q12h" },
    hdDose: "250mg q12h (透析後給藥)",
    highlights: ["Seizure risk"],
    standardPearls: ["腎功能調整不當會顯著增加癲癇風險。"],
    hdPearls: ["建議於 HD 後給藥。"]
  },
  {
    id: "ertapenem",
    name: "Ertapenem",
    tradeNames: ["Invanz"],
    category: "Carbapenem",
    is17B: false,
    normal: "1g q24h",
    adjustment: { "30": "1g q24h", "below30": "500mg q24h" },
    hdDose: "500mg q24h",
    highlights: ["Once-daily dosing"],
    standardPearls: ["調整門檻為 CrCl 30 mL/min。"],
    hdPearls: ["透析日追加 150mg 如果給藥間隔小於 6 小時。"]
  },
  {
    id: "gentamicin",
    name: "Gentamicin",
    tradeNames: [],
    category: "Aminoglycoside",
    is17B: false,
    normal: "3–5 mg/kg/day",
    adjustment: { "50": "100% q8-12h", "10-50": "30-70% q12h", "10": "20-30% q24-48h" },
    hdDose: "1–1.5 mg/kg 透析後給藥",
    highlights: ["Concentration-dependent"],
    standardPearls: ["TDM 目標：Peak 5-10, Trough < 2 mg/L。"],
    hdPearls: ["血液透析清除率約 50%。"]
  },
  {
    id: "vancomycin",
    name: "Vancomycin (IV)",
    tradeNames: ["Vancocin"],
    category: "Glycopeptide",
    is17B: false,
    normal: "15-20 mg/kg q8-12h (Loading: 20-35 mg/kg)",
    adjustment: { "10": "依據濃度 (Pulse)" },
    hdDose: "500-1000mg (透析後給藥) + Loading",
    highlights: ["TDM required", "Loading Dose"],
    standardPearls: [
      "Trough 目標：10–15 mg/L (一般) 或 15–20 mg/L (嚴重)。",
      "建議使用 Loading Dose 的情況：重症病人 (Sepsis, Shock, ICU)、嚴重 MRSA 感染 (肺炎, 菌血症, 心內膜炎, 骨髓炎, 腦膜炎)、腎替代療法 (HD/CRRT) 病人、連續輸注療法。",
      "Loading 劑量建議：成人 20-35 mg/kg (Actual BW)，單次給予，Max 3000 mg。",
      "Loading 劑量建議 (肥胖)：20-25 mg/kg (Actual BW)，Max 3000 mg。"
    ],
    hdPearls: ["依 Pre-dialysis 濃度調整。", "透析病人亦建議給予 Loading Dose (詳見一般原則)。"]
  },
  {
    id: "amikacin",
    name: "Amikacin",
    tradeNames: [],
    category: "Aminoglycoside",
    is17B: false,
    normal: "15 mg/kg/day",
    adjustment: { "50": "100% q8-12h", "10-50": "30-70% q12-18h", "10": "20-30% q24-48h" },
    hdDose: "5–7.5 mg/kg 透析後給藥",
    highlights: ["Concentration-dependent"],
    standardPearls: ["強烈建議進行 TDM。"],
    hdPearls: ["透析後補藥是關鍵。"]
  },
  {
    id: "levofloxacin",
    name: "Levofloxacin",
    tradeNames: ["Levaquin"],
    category: "Fluoroquinolone",
    is17B: false,
    normal: "500–750mg q24h",
    adjustment: { "50": "500–750mg q24h", "20-50": "500-750mg initial, then 250-500mg q24-48h", "20": "500-750mg initial, then 250-500mg q48h" },
    hdDose: "500-750mg initial, then 250-500mg q48h",
    standardPearls: ["Levofloxacin 調整門檻為 50/20。"],
    hdPearls: ["血液透析對此藥清除率極低。"]
  },
  {
    id: "flomoxef",
    name: "Flomoxef",
    tradeNames: ["Flumarin"],
    category: "Oxacephem",
    is17B: false,
    normal: "1–2g q12h",
    adjustment: { "50": "1–2g q12h", "10-50": "0.5–1g q12h 或 1-2g q24h", "10": "0.5g q24h" },
    hdDose: "0.5–1g 透析後給藥",
    highlights: ["ESBL activity"],
    standardPearls: ["對部分 ESBL 菌株具有穩定性。"],
    hdPearls: ["透析會顯著降低濃度。"]
  },
  {
    id: "teicoplanin",
    name: "Teicoplanin",
    tradeNames: ["Tardocel"],
    category: "Glycopeptide",
    is17B: false,
    normal: "6–12 mg/kg q24h",
    loadingDose: "6–12 mg/kg q12h (for 3–5 doses)",
    adjustment: { "80": "6–12 mg/kg q24h", "30-80": "6–12 mg/kg q48h", "30": "6–12 mg/kg q72h" },
    hdDose: "6–12 mg/kg q72h (或每週三次)",
    highlights: ["Long half-life"],
    standardPearls: ["半衰期極長，主要延長給藥間隔。"],
    hdPearls: ["透析患者每週給藥三次即可。"]
  },
  {
    id: "pip-tazo-non",
    name: "Piperacillin-Tazobactam (Non-PS)",
    tradeNames: ["Tazocin", "Zosyn"],
    category: "Penicillin/BLI",
    is17B: false,
    normal: "3.375g q6h or 4.5g q8h",
    adjustment: { "40": "3.375g q6h or 4.5g q8h", "20-40": "2.25g q6h", "20": "2.25g q8h" },
    hdDose: "2.25g q12h",
    standardPearls: ["Pip/Tazo 調整門檻為 20/40。"],
    hdPearls: ["Pip/Tazo 會被透析清除。"]
  },
  {
    id: "pip-tazo-ps",
    name: "Piperacillin-Tazobactam (PS dose)",
    tradeNames: ["Tazocin", "Zosyn"],
    category: "Penicillin/BLI",
    is17B: false,
    normal: "3.375g q4h or 4.5g q6h",
    adjustment: { "40": "3.375g q4h or 4.5g q6h", "20-40": "3.375g q6h", "20": "2.25g q6h" },
    hdDose: "2.25g q8h",
    hdPearls: ["建議於 HD 後補藥。"]
  },
  {
    id: "colistin",
    name: "Colistin (CMS)",
    tradeNames: [],
    category: "Polymyxin",
    is17B: false,
    normal: "2.5–5 mg/kg/day CBA",
    loadingDose: "4-5 mg/kg CBA",
    adjustment: { "80": "2.5-5 mg/kg/day", "50-80": "2.5-3.8 mg/kg/day", "30-50": "2.5 mg/kg/day", "10-30": "1.5 mg/kg/day", "10": "1.0 mg/kg q36h" },
    hdDose: "2 mg/kg CBA q48h",
    standardPearls: ["CBA 換算：1 mg CBA ≈ 2.4 mg CMS。"],
    hdPearls: ["Colistin 的透析清除率極高。"]
  },

  // --- Table 17B: 無需調整劑量的藥物 ---
  { id: "azithromycin", name: "Azithromycin", tradeNames: ["Zithromax"], category: "Macrolide", is17B: true, notes: "No adjustment needed. Standard: 500mg D1 then 250mg q24h." },
  { id: "ceftriaxone", name: "Ceftriaxone", tradeNames: ["Rocephin"], category: "Cephalosporin (3rd)", is17B: true, notes: "No adjustment needed. Standard: 1-2g q24h." },
  { id: "clindamycin", name: "Clindamycin", tradeNames: ["Dalacin"], category: "Lincosamide", is17B: true, notes: "No adjustment needed. Standard: 300-450mg PO q6-8h / 600-900mg IV q8h." },
  { id: "doxycycline", name: "Doxycycline", tradeNames: [], category: "Tetracycline", is17B: true, notes: "No adjustment needed. Standard: 100mg q12h." },
  { id: "tigecycline", name: "Tigecycline", tradeNames: ["Tygacil"], category: "Glycylcycline", is17B: true, notes: "No adjustment needed (Hepatic). Standard: Load 100mg, then 50mg q12h." },
  { id: "linezolid", name: "Linezolid", tradeNames: ["Zyvox"], category: "Oxazolidinone", is17B: true, notes: "No adjustment needed. Standard: 600mg q12h." },
  { id: "metronidazole", name: "Metronidazole", tradeNames: ["Flagyl"], category: "Nitroimidazole", is17B: true, notes: "No adjustment needed. Standard: 500mg q8h." },
  { id: "moxifloxacin", name: "Moxifloxacin", tradeNames: ["Avelox"], category: "Fluoroquinolone", is17B: true, notes: "No adjustment needed. Standard: 400mg q24h." },
  {
    id: "micafungin",
    name: "Micafungin",
    tradeNames: [],
    category: "Echinocandin",
    is17B: true,
    notes: "No adjustment needed. Standard: 50-150mg IV q24h.",
    standardPearls: [
      "無需依腎功能或肝功能調整劑量。嚴重感染可考慮增至 200–300 mg/天。",
      "體重 ≤50 kg 者，建議每日不高於 6 mg/kg。",
      "靜脈輸注：≤75mg 輸注 ≥30分鐘；>75mg 輸注 ≥1小時。配製需避光且避免用力搖晃。",
      "常見不良反應為肝功能異常。需留意過敏性休克、溶血性貧血等少見嚴重反應。",
      "無法良好穿透 CSF、眼睛或尿路，若此部位感染應考慮其他藥物。"
    ],
    hdPearls: [
      "蛋白結合率極高 (>99%)，幾乎不被透析清除。",
      "血液透析、腹膜透析皆無需調整劑量，且透析後無需補充。"
    ]
  }
];

const App = () => {
  const [age, setAge] = useState(DEFAULT_VALUES.age);
  const [weight, setWeight] = useState(DEFAULT_VALUES.weight);
  const [height, setHeight] = useState(DEFAULT_VALUES.height);
  const [scr, setScr] = useState(DEFAULT_VALUES.scr);
  const [gender, setGender] = useState(DEFAULT_VALUES.gender);
  const [isHD, setIsHD] = useState(DEFAULT_VALUES.isHD);
  const [inputMode, setInputMode] = useState(DEFAULT_VALUES.inputMode);
  const [manualCrcl, setManualCrcl] = useState(DEFAULT_VALUES.manualCrcl);
  const [searchTerm, setSearchTerm] = useState(DEFAULT_VALUES.searchTerm);
  const [selectedDrug, setSelectedDrug] = useState(null);

  // --- 永續儲存與編輯狀態 ---
  const [drugs, setDrugs] = useState(() => {
    const saved = localStorage.getItem('renal_guide_drugs');
    if (!saved) return DRUG_DATA;
    try {
      const parsed = JSON.parse(saved);
      // Data Migration: Ensure tradeNames field exists
      const migrated = parsed.map(d => ({
        ...d,
        tradeNames: d.tradeNames || []
      }));
      // Merge new drugs that are in DRUG_DATA but not in localStorage
      const existingIds = new Set(migrated.map(d => d.id));
      const newDrugs = DRUG_DATA.filter(d => !existingIds.has(d.id));
      return [...migrated, ...newDrugs];
    } catch (e) {
      return DRUG_DATA;
    }
  });

  useEffect(() => {
    localStorage.setItem('renal_guide_drugs', JSON.stringify(drugs));
  }, [drugs]);

  const [isEditingPearls, setIsEditingPearls] = useState(false);
  const [editedPearls, setEditedPearls] = useState([]);

  // --- 商品名編輯狀態 ---
  const [isEditingTradeNames, setIsEditingTradeNames] = useState(false);
  const [editedTradeNames, setEditedTradeNames] = useState([]);

  // --- 永續資料匯出/匯入 ---
  const [isDataModalOpen, setIsDataModalOpen] = useState(false);
  const [dataModalTab, setDataModalTab] = useState('export'); // 'export' | 'import'

  const handleExportJSON = () => {
    try {
      const dataStr = JSON.stringify(drugs, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `苗醫_antibiotics_renal_guide_backup_${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      alert('匯出失敗：' + error.message);
    }
  };

  const handleCopyJSON = () => {
    try {
      const dataStr = JSON.stringify(drugs, null, 2);
      navigator.clipboard.writeText(dataStr).then(() => {
        alert('已複製到剪貼簿！');
      });
    } catch (error) {
      alert('複製失敗：' + error.message);
    }
  };

  const handleImportJSON = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        if (Array.isArray(importedData)) {
          if (confirm('匯入將會「完全覆蓋」您目前在瀏覽器上的客製化備註。確定要繼續嗎？')) {
            setDrugs(importedData);
            // 立即生效
            localStorage.setItem('renal_guide_drugs', JSON.stringify(importedData));
            alert('匯入成功！資料已更新。');
            setIsDataModalOpen(false);
            window.location.reload(); // 重新整理以確保所有狀態同步
          }
        } else {
          alert('格式錯誤：必須是藥物資料陣列 (.json)。');
        }
      } catch (err) {
        alert('解析失敗：請確保檔案是正確的 JSON 格式。');
      }
    };
    reader.readAsText(file);
  };

  // 更新已選取藥物的參考（若資料庫更新了）
  const currentDrug = useMemo(() => {
    if (!selectedDrug) return null;
    return drugs.find(d => d.id === selectedDrug.id);
  }, [drugs, selectedDrug]);

  const handleStartEdit = () => {
    if (!currentDrug) return;
    const pearls = isHD ? [...(currentDrug.hdPearls || [])] : [...(currentDrug.standardPearls || [])];
    setEditedPearls(pearls);
    setIsEditingPearls(true);
  };

  const handleSavePearls = () => {
    if (!currentDrug) return;
    const cleanPearls = editedPearls.filter(p => p.trim() !== '');
    const updatedDrugs = drugs.map(d => {
      if (d.id === currentDrug.id) {
        const updated = isHD
          ? { ...d, hdPearls: cleanPearls }
          : { ...d, standardPearls: cleanPearls };
        return updated;
      }
      return d;
    });

    // 立即存入 localStorage 確保持久化，不只依賴 useEffect
    localStorage.setItem('renal_guide_drugs', JSON.stringify(updatedDrugs));
    setDrugs(updatedDrugs);

    // 如果目前有選取該藥物，同步更新 selectedDrug 參考
    const updatedDrugMatch = updatedDrugs.find(d => d.id === currentDrug.id);
    if (updatedDrugMatch) setSelectedDrug(updatedDrugMatch);

    setIsEditingPearls(false);
  };

  const handleStartEditTradeNames = () => {
    if (!currentDrug) return;
    setEditedTradeNames([...(currentDrug.tradeNames || [])]);
    setIsEditingTradeNames(true);
  };

  const handleSaveTradeNames = () => {
    if (!currentDrug) return;
    const cleanNames = editedTradeNames.filter(tn => tn.trim() !== '');
    const updatedDrugs = drugs.map(d => {
      if (d.id === currentDrug.id) {
        return { ...d, tradeNames: cleanNames };
      }
      return d;
    });

    localStorage.setItem('renal_guide_drugs', JSON.stringify(updatedDrugs));
    setDrugs(updatedDrugs);

    const updatedDrugMatch = updatedDrugs.find(d => d.id === currentDrug.id);
    if (updatedDrugMatch) setSelectedDrug(updatedDrugMatch);

    setIsEditingTradeNames(false);
  };

  const handleRestoreOriginal = () => {
    if (!currentDrug) return;
    const originalVersion = DRUG_DATA.find(d => d.id === currentDrug.id);
    if (originalVersion) {
      setEditedPearls(isHD ? [...(originalVersion.hdPearls || [])] : [...(originalVersion.standardPearls || [])]);
    }
  };

  const handleAddPearl = () => {
    setEditedPearls([...editedPearls, '']);
  };

  const handleUpdatePearl = (index, value) => {
    const newPearls = [...editedPearls];
    newPearls[index] = value;
    setEditedPearls(newPearls);
  };

  const handleRemovePearl = (index) => {
    setEditedPearls(editedPearls.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    setAge(DEFAULT_VALUES.age);
    setWeight(DEFAULT_VALUES.weight);
    setHeight(DEFAULT_VALUES.height);
    setScr(DEFAULT_VALUES.scr);
    setGender(DEFAULT_VALUES.gender);
    setIsHD(false);
    setInputMode(DEFAULT_VALUES.inputMode);
    setManualCrcl(DEFAULT_VALUES.manualCrcl);
    setSearchTerm('');
    setSelectedDrug(null);
  };

  const calculation = useMemo(() => {
    if (inputMode === 'manual') {
      const mc = parseFloat(manualCrcl) || 0;
      return {
        crcl: Math.round(mc * 10) / 10,
        ibw: 0,
        isOverweight: false,
        calcWeight: 0
      };
    }

    const a = parseFloat(age) || 0;
    const w = parseFloat(weight) || 0;
    const h = parseFloat(height) || 0;
    const s = parseFloat(scr) || 1.0;

    const heightInInches = h / 2.54;
    const ibw = gender === 'male' ? 50 + 2.3 * (heightInInches - 60) : 45.5 + 2.3 * (heightInInches - 60);
    let calcWeight = w;
    const isOverweight = w > ibw * 1.2;
    if (isOverweight) calcWeight = ibw + 0.4 * (w - ibw);

    let crcl = ((140 - a) * calcWeight) / (72 * s);
    if (gender === 'female') crcl *= 0.85;

    return {
      crcl: Math.round(crcl * 10) / 10,
      ibw: Math.round(ibw * 10) / 10,
      isOverweight,
      calcWeight: Math.round(calcWeight * 10) / 10
    };
  }, [age, weight, height, scr, gender, inputMode, manualCrcl]);

  const filteredDrugs = useMemo(() => {
    return drugs.filter(drug =>
      drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      drug.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (drug.tradeNames && drug.tradeNames.some(tn => tn.toLowerCase().includes(searchTerm.toLowerCase())))
    ).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm, drugs]);

  const activePearls = useMemo(() => {
    const pearls = [];
    const sourceDrugs = currentDrug ? [currentDrug] : (filteredDrugs.length === 1 ? filteredDrugs : []);

    sourceDrugs.forEach(d => {
      if (isHD) {
        if (d.hdPearls) pearls.push(...d.hdPearls);
      } else {
        if (d.standardPearls) pearls.push(...d.standardPearls);
      }
    });
    return [...new Set(pearls)];
  }, [currentDrug, filteredDrugs, isHD]);

  const getDoseAdvice = (drug) => {
    if (isHD) {
      if (drug.is17B) return { text: drug.notes || "無需調整", type: "success" };
      return { text: drug.hdDose || "建議諮詢藥師", type: "danger" };
    }
    if (drug.is17B) return { text: "無需調整 (17B)", type: "success" };
    const val = calculation.crcl;
    const adj = drug.adjustment;

    // --- 各藥物專屬邏輯 ---
    if (drug.id === "cefepime") {
      if (val >= 50) return { text: adj["50"], type: "normal" };
      if (val >= 10) return { text: adj["10-50"], type: "warning" };
      return { text: adj["10"], type: "danger" };
    }
    if (drug.id === "ceftazidime") {
      if (val >= 50) return { text: adj["50"], type: "normal" };
      if (val >= 10) return { text: adj["10-50"], type: "warning" };
      return { text: adj["10"], type: "danger" };
    }
    if (drug.id === "cefmetazole") {
      if (val >= 50) return { text: adj["50"], type: "normal" };
      if (val >= 10) return { text: adj["10-50"], type: "warning" };
      return { text: adj["10"], type: "danger" };
    }
    if (drug.id === "ceftaroline") {
      if (val >= 50) return { text: adj["50"], type: "normal" };
      if (val >= 30) return { text: adj["30-50"], type: "warning" };
      if (val >= 15) return { text: adj["15-30"], type: "warning" };
      return { text: adj["15"], type: "danger" };
    }
    if (drug.id === "cefoperazone-sulbactam") {
      if (val >= 30) return { text: adj["30"], type: "normal" };
      if (val >= 15) return { text: adj["15-30"], type: "warning" };
      return { text: adj["15"], type: "danger" };
    }
    if (drug.id === "daptomycin") {
      if (val >= 30) return { text: adj["30"], type: "normal" };
      return { text: adj["below30"], type: "danger" };
    }
    if (drug.id === "fluconazole") {
      if (val >= 50) return { text: adj["50"], type: "normal" };
      return { text: adj["below50"], type: "warning" };
    }
    if (drug.id === "aztreonam") {
      if (val >= 50) return { text: adj["50"], type: "normal" };
      if (val >= 10) return { text: adj["10-50"], type: "warning" };
      return { text: adj["10"], type: "danger" };
    }
    if (drug.id === "ciprofloxacin-iv") {
      if (val >= 50) return { text: adj["50"], type: "normal" };
      if (val >= 30) return { text: adj["30-50"], type: "warning" };
      return { text: adj["30"], type: "danger" };
    }
    if (drug.id === "acyclovir-iv") {
      if (val >= 50) return { text: adj["50"], type: "normal" };
      if (val >= 25) return { text: adj["25-50"], type: "warning" };
      if (val >= 10) return { text: adj["10-25"], type: "warning" };
      return { text: adj["10"], type: "danger" };
    }
    if (drug.id === "amoxicillin-clavulanate") {
      if (val >= 30) return { text: adj["30"], type: "normal" };
      if (val >= 10) return { text: adj["10-30"], type: "warning" };
      return { text: adj["10"], type: "danger" };
    }
    if (drug.id === "voriconazole") {
      if (val >= 50) return { text: "No change (IV/Oral)", type: "normal" };
      return { text: "IV: 建議換口服 / Oral: 200mg q12h", type: "warning" };
    }
    if (drug.id === "ampicillin-sulbactam") {
      if (val >= 30) return { text: adj["30"], type: "normal" };
      if (val >= 15) return { text: adj["15-30"], type: "warning" };
      return { text: adj["15"], type: "danger" };
    }
    if (drug.id === "ampicillin-sulbactam-high") {
      if (val >= 30) return { text: adj["30"], type: "normal" };
      if (val >= 15) return { text: adj["15-30"], type: "warning" };
      return { text: adj["15"], type: "danger" };
    }
    if (drug.id === "meropenem") {
      if (val >= 50) return { text: adj["50"], type: "normal" };
      if (val >= 25) return { text: adj["25-50"], type: "warning" };
      if (val >= 10) return { text: adj["10-25"], type: "warning" };
      return { text: adj["10"], type: "danger" };
    }
    if (drug.id === "imipenem-cilastatin") {
      if (val >= 50) return { text: adj["50"], type: "normal" };
      if (val >= 10) return { text: adj["10-50"], type: "warning" };
      return { text: adj["10"], type: "danger" };
    }
    if (drug.id === "ertapenem") {
      if (val >= 30) return { text: "1g q24h", type: "normal" };
      return { text: "500mg q24h", type: "danger" };
    }
    if (drug.id === "vancomycin") {
      if (val >= 50) return { text: "No change (q8-12h)\nLoading: 20-35 mg/kg", type: "normal" };
      if (val >= 10) return { text: "Based on levels (q24-96h)", type: "warning" };
      return { text: adj["10"], type: "danger" };
    }
    if (drug.id === "levofloxacin") {
      if (val >= 50) return { text: adj["50"], type: "normal" };
      if (val >= 20) return { text: adj["20-50"], type: "warning" };
      return { text: adj["20"], type: "danger" };
    }
    if (drug.id === "teicoplanin") {
      if (val > 80) return { text: adj["80"], type: "normal" };
      if (val >= 30) return { text: adj["30-80"], type: "warning" };
      return { text: adj["30"], type: "danger" };
    }
    if (drug.id.includes("pip-tazo")) {
      if (val > 40) return { text: adj["40"], type: "normal" };
      if (val >= 20) return { text: adj["20-40"], type: "warning" };
      return { text: adj["20"], type: "danger" };
    }
    if (drug.id === "colistin") {
      if (val >= 80) return { text: adj["80"], type: "normal" };
      if (val >= 50) return { text: adj["50-80"], type: "warning" };
      if (val >= 30) return { text: adj["30-50"], type: "warning" };
      if (val >= 10) return { text: adj["10-30"], type: "danger" };
      return { text: adj["10"], type: "danger" };
    }
    if (val > 50) return { text: adj["50"] || adj["50-90"] || drug.normal, type: "normal" };
    if (val >= 10) return { text: adj["10-50"] || "調整劑量", type: "warning" };
    return { text: adj["10"] || "需顯著減量", type: "danger" };
  };

  const displayDrugs = selectedDrug ? [selectedDrug] : filteredDrugs;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans pb-12">
      {/* 導覽列 Header */}
      <header className={`transition-colors duration-500 p-6 flex items-center justify-between sticky top-0 z-50 shadow-md ${isHD ? 'bg-[#1e293b] border-b-8 border-red-600' : 'bg-[#3b3b85]'}`}>
        <div className="max-w-5xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-2xl flex items-center justify-center ${isHD ? 'bg-red-500/20 text-red-400' : 'bg-white/10 text-indigo-200'}`}>
              <ShieldAlert className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-white uppercase" style={{ fontFamily: "Arial Black, impact, sans-serif" }}>苗醫 Antibiotics Renal Guide</h1>
              <p className="text-[11px] font-bold tracking-widest text-slate-300 uppercase mt-0.5">
                {isHD ? '血液透析模式 (HEMODIALYSIS) 已開啟' : '標準 eGFR (CrCl) 計算模式'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDataModalOpen(true)}
              className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-xl transition-all border border-white/5 shadow-sm"
              title="資料備份與還原 (.json)"
            >
              <Database className="w-4 h-4" /> 備份
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-xl transition-all border border-white/5 shadow-sm"
              title="重置計算與搜尋"
            >
              <RotateCcw className="w-4 h-4" /> 重置
            </button>
            <button
              onClick={() => {
                if (confirm('確定要清除所有自定義備註並恢復為原廠設定嗎？')) {
                  localStorage.removeItem('renal_guide_drugs');
                  window.location.reload();
                }
              }}
              className="flex items-center gap-2 text-xs font-bold text-white bg-red-600/20 hover:bg-red-600/40 px-3 py-2.5 rounded-xl transition-all border border-red-500/30 shadow-sm opacity-80 hover:opacity-100"
              title="恢復出廠設定"
            >
              <Trash2 className="w-4 h-4 text-red-200" />
            </button>
            <div className={`${isHD ? 'bg-red-600 text-white shadow-red-900/50' : 'bg-[#5c5cdd] text-white shadow-indigo-900/50'} px-5 py-2.5 rounded-2xl shadow-lg transition-all duration-300 min-w-[140px] flex flex-col items-center justify-center`}>
              <div className="text-[9px] font-black uppercase tracking-wider opacity-80 mb-0.5">{isHD ? 'Dialysis Patient' : 'CrCl Result'}</div>
              <div className="text-2xl font-black tabular-nums leading-none">
                {isHD ? '透析中' : calculation.crcl}
                {!isHD && <span className="text-sm font-bold ml-1 opacity-90">mL/min</span>}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        {/* 輸入與控制面版 Input & Control Panel */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-[2rem] shadow-sm border border-slate-200/60 overflow-hidden flex flex-col">
            {/* 模式切換 Tabs */}
            <div className="flex border-b border-slate-100 bg-slate-50/50">
              <button
                onClick={() => setInputMode('calculate')}
                className={`flex-1 py-4 text-sm font-black transition-all ${inputMode === 'calculate' ? 'text-indigo-700 bg-white border-b-2 border-indigo-600 shadow-sm' : 'text-slate-400 hover:bg-slate-50'}`}
              >
                📝 計算模式 (Age/Ht/Wt)
              </button>
              <button
                onClick={() => setInputMode('manual')}
                className={`flex-1 py-4 text-sm font-black transition-all ${inputMode === 'manual' ? 'text-indigo-700 bg-white border-b-2 border-indigo-600 shadow-sm' : 'text-slate-400 hover:bg-slate-50'}`}
              >
                ⚡️ 手動輸入 CrCl
              </button>
            </div>

            <div className="p-8 pb-10">
              {inputMode === 'manual' ? (
                /* 手動輸入模式 */
                <div className="flex flex-col items-center justify-center py-6">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4">直接輸入 CrCl (mL/min) 或 eGFR</label>
                  <input
                    type="number"
                    disabled={isHD}
                    value={manualCrcl}
                    onChange={e => setManualCrcl(e.target.value)}
                    placeholder="輸入數值"
                    className="w-1/2 bg-indigo-50/50 text-indigo-700 border-none rounded-2xl px-6 py-4 text-3xl font-black text-center disabled:opacity-50 disabled:bg-slate-50 outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all placeholder:text-indigo-300"
                  />
                  <p className="text-sm text-slate-500 font-bold mt-6">輸入數值將直接做為劑量調整依據</p>
                </div>
              ) : (
                /* 傳統計算模式 */
                <div className="grid grid-cols-2 gap-x-10 gap-y-6 relative">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Gender 性別</label>
                      <div className="flex bg-slate-50 p-1.5 rounded-2xl">
                        <button onClick={() => setGender('male')} className={`flex-1 py-2.5 rounded-xl text-sm font-black transition-all ${gender === 'male' ? 'bg-white text-indigo-700 shadow-sm ring-1 ring-slate-200' : 'text-slate-400 hover:bg-slate-100'}`}>男</button>
                        <button onClick={() => setGender('female')} className={`flex-1 py-2.5 rounded-xl text-sm font-black transition-all ${gender === 'female' ? 'bg-white text-indigo-700 shadow-sm ring-1 ring-slate-200' : 'text-slate-400 hover:bg-slate-100'}`}>女</button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Age 年齡</label>
                      <input type="number" disabled={isHD} value={age} onChange={e => setAge(e.target.value)} placeholder="65" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-3 font-bold text-base text-slate-700 disabled:opacity-50 disabled:bg-slate-100 focus:ring-2 focus:ring-indigo-500 transition-shadow outline-none" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Ht (cm)</label>
                        <input type="number" disabled={isHD} value={height} onChange={e => setHeight(e.target.value)} placeholder="170" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-3 font-bold text-base text-slate-700 disabled:opacity-50 disabled:bg-slate-100 focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Wt (kg)</label>
                        <input type="number" disabled={isHD} value={weight} onChange={e => setWeight(e.target.value)} placeholder="70" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-3 font-bold text-base text-slate-700 disabled:opacity-50 disabled:bg-slate-100 focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Scr 肌酸酐 (mg/dL)</label>
                      <input type="number" disabled={isHD} value={scr} onChange={e => setScr(e.target.value)} placeholder="1.2" className="w-full bg-indigo-50/50 text-indigo-700 border-none rounded-2xl px-5 py-3 text-xl font-black disabled:opacity-50 disabled:bg-slate-50 outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => setIsHD(!isHD)}
              className={`flex-1 rounded-[2rem] p-8 flex flex-col items-center justify-center transition-all duration-300 border-4 shadow-sm group ${isHD ? 'bg-[#df2c29] border-[#df2c29] text-white shadow-red-500/30 shadow-xl scale-[1.02]' : 'bg-white border-slate-100 text-slate-400 hover:border-red-100 hover:bg-red-50/30'
                }`}
            >
              <Waves className={`w-12 h-12 mb-3 transition-transform duration-500 ${isHD ? 'scale-110 drop-shadow-md' : 'opacity-30 group-hover:scale-110 group-hover:opacity-50'}`} strokeWidth={2.5} />
              <span className="font-extrabold text-lg uppercase tracking-widest">Hemodialysis</span>
              <span className="text-xs font-bold opacity-75 mt-1">{isHD ? '透析模式：開啟' : '透析模式：關閉'}</span>
            </button>

            {!isHD && (
              <div className="bg-indigo-50/50 p-5 rounded-[2rem] border border-indigo-100/50 flex flex-col justify-center gap-1 shadow-sm">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-indigo-600 font-black uppercase tracking-wider">IBW:</span>
                  <span className="font-bold text-slate-800">{calculation.ibw} kg</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 搜尋欄 Search Bar */}
        <section className="relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 w-6 h-6 transition-colors group-focus-within:text-indigo-500" strokeWidth={2.5} />
          <input
            type="text"
            placeholder={`搜尋藥物（學名或商品名），點擊後可「編輯」備註或增減商品名稱...`}
            className="w-full pl-16 pr-16 py-6 bg-white rounded-full shadow-sm border border-slate-200/60 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 text-lg font-bold text-slate-700 outline-none transition-all placeholder:text-slate-300 placeholder:font-medium"
            value={searchTerm}
            onChange={e => {
              setSearchTerm(e.target.value);
              setSelectedDrug(null);
            }}
          />
          {searchTerm && <button onClick={() => { setSearchTerm(''); setSelectedDrug(null); }} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 bg-slate-100 p-1 rounded-full transition-colors"><X className="w-5 h-5" /></button>}
        </section>

        {selectedDrug && (
          <button
            onClick={() => setSelectedDrug(null)}
            className="flex items-center gap-2 text-sm font-bold text-indigo-600 bg-indigo-50 px-5 py-2.5 rounded-full hover:bg-indigo-100 transition-colors w-max"
          >
            <RotateCcw className="w-4 h-4" /> 返回全部藥物 (Show All)
          </button>
        )}

        {/* 藥物列表 Drug List */}
        <section className="space-y-5">
          {displayDrugs.map((drug) => {
            const advice = getDoseAdvice(drug);

            // 決定右側警告卡片的樣式顏色
            let cardStyle = "bg-slate-50 border-slate-200 text-slate-800";
            let pillStyle = "bg-slate-200 text-slate-600";
            let sideColor = "bg-indigo-500";

            if (advice.type === 'normal' || advice.type === 'success') {
              cardStyle = "bg-[#f8fafb] border-slate-100";
              pillStyle = "bg-slate-200 text-slate-600";
              sideColor = "bg-[#5c5cdd]";
            } else if (advice.type === 'warning') {
              cardStyle = "bg-orange-50/50 border-orange-100";
              pillStyle = "bg-orange-100 text-orange-700";
              sideColor = "bg-orange-400";
            } else if (advice.type === 'danger') {
              cardStyle = "bg-red-50 border-red-100";
              pillStyle = "bg-red-100 text-red-700";
              sideColor = "bg-[#df2c29]";
            }

            return (
              <div
                key={drug.id}
                onClick={() => !selectedDrug && setSelectedDrug(drug)}
                className={`bg-white rounded-[2rem] shadow-sm border border-slate-200/60 transition-all overflow-hidden ${!selectedDrug ? 'cursor-pointer hover:shadow-md hover:border-slate-300' : ''}`}
              >
                <div className="flex flex-col md:flex-row min-h-[140px]">

                  {/* 左側資訊區塊 */}
                  <div className="flex-1 p-8 flex flex-col justify-center space-y-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-black text-slate-900 text-2xl tracking-tight" style={{ fontFamily: "Arial Black, impact, sans-serif" }}>{drug.name}</h3>
                      <span className="text-[10px] font-black px-3 py-1 rounded-full bg-slate-100 text-slate-500 uppercase tracking-wider">{drug.category}</span>
                      {isHD && !drug.is17B && <span className="bg-red-400/20 text-red-600 border border-red-400/30 text-[10px] font-black px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">Hemodialysis</span>}
                      {drug.is17B && <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-3 py-1 rounded-full border border-emerald-200 tracking-wider">TABLE 17B</span>}
                    </div>

                    {/* 商品名區塊 Trade Names */}
                    <div className="flex flex-wrap gap-2">
                      {drug.tradeNames && drug.tradeNames.length > 0 ? (
                        drug.tradeNames.map((tn, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50/80 text-indigo-600 rounded-lg text-[11px] font-bold border border-indigo-100/50 shadow-sm">
                            <Tag className="w-3 h-3" /> {tn}
                          </span>
                        ))
                      ) : (
                        !selectedDrug ? null : <span className="text-[11px] text-slate-400 italic">尚未設定商品名</span>
                      )}
                      {selectedDrug && (
                        <button
                          onClick={(e) => { e.stopPropagation(); handleStartEditTradeNames(); }}
                          className="p-1 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all border border-slate-200 flex items-center gap-1"
                          title="增修商品名稱"
                        >
                          <Edit2 className="w-3 h-3" /> 增修商品名
                        </button>
                      )}
                    </div>

                    {drug.loadingDose && (
                      <div className="bg-indigo-50/50 text-indigo-700 text-[11px] px-4 py-1.5 rounded-full font-bold inline-flex items-center gap-2 border border-indigo-100/50 w-max">
                        <FlaskConical className="w-3.5 h-3.5" /> Loading: {drug.loadingDose}
                      </div>
                    )}

                    {/* 紅色透析提示 / 特殊提示 */}
                    {(isHD || (drug.id === "voriconazole" && calculation.crcl < 50) || drug.hdNotes) && (isHD || drug.id === "voriconazole" || (drug.id === "cefepime" && isHD)) && (
                      <div className={`text-xs font-bold px-4 py-3 rounded-xl flex items-center gap-2.5 w-max max-w-full ${isHD ? 'text-red-600 bg-red-50/50 border border-red-100' : 'text-orange-700 bg-orange-50/50 border border-orange-100'}`}>
                        <Info className="w-4 h-4 shrink-0" strokeWidth={2.5} />
                        {drug.hdNotes}
                      </div>
                    )}
                  </div>

                  {/* 右側建議劑量卡片 */}
                  <div className="relative p-6 md:min-w-[400px] flex items-center">
                    {/* 左側彩色圓角飾條 */}
                    <div className={`absolute left-0 top-6 bottom-6 w-2.5 rounded-r-xl ${sideColor} shadow-sm z-10`}></div>

                    {/* 內部背景卡片 */}
                    <div className={`w-full h-full rounded-2xl ${cardStyle} p-6 pl-10 flex flex-col justify-center`}>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                        {isHD ? '透析建議劑量' : `建議劑量 @ CrCl ${calculation.crcl}`}
                      </div>
                      <div className="text-slate-900 font-black text-[22px] leading-tight mb-1" style={{ fontFamily: "Arial Black, impact, sans-serif" }}>
                        {drug.is17B ? drug.notes : advice.text}
                      </div>
                      {!drug.is17B && (
                        <div className="text-xs text-slate-400 font-medium italic mt-1">
                          標準劑量: {drug.normal}
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </section>

        {/* 底部說明 Footer */}
        <section className={`rounded-[2.5rem] p-10 text-white shadow-xl transition-all duration-700 mt-8 ${isHD ? 'bg-[#192231] shadow-red-900/10' : 'bg-[#2b2b68] shadow-indigo-900/10'}`}>
          <div className="flex items-center gap-3 mb-8">
            <div className={`p-2.5 rounded-[1rem] ${isHD ? 'bg-red-500' : 'bg-white/10'}`}>
              {isHD ? <Waves className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
            </div>
            <h2 className="text-xl font-black tracking-tight uppercase" style={{ fontFamily: "Arial Black, impact, sans-serif" }}>
              {isHD ? '血液透析 (HD) 給藥指引與備註' : '腎功能劑量調整 (eGFR) 臨床指引'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-5">
              <h4 className={`text-xs font-black uppercase tracking-widest flex items-center gap-2 ${isHD ? 'text-red-400' : 'text-indigo-300'}`}>
                📌 {isHD ? '透析患者重要原則' : '一般調整核心原則'}
              </h4>
              <ul className="space-y-4 text-sm text-slate-300">
                {isHD ? (
                  <>
                    <li className="flex gap-3 leading-relaxed"><span className="text-red-500 font-bold">1.</span> Cefepime 透析清除率高，應於透析後給予 1g 劑量。</li>
                    <li className="flex gap-3 leading-relaxed"><span className="text-red-500 font-bold">2.</span> 若藥物會被透析清除，透析日之劑量應安排在透析結束後。</li>
                    <li className="flex gap-3 leading-relaxed"><span className="text-red-500 font-bold">3.</span> 透析日之劑量安排應優先安排在血液透析結束後給予。</li>
                  </>
                ) : (
                  <>
                    <li className="flex gap-3 leading-relaxed"><span className="text-indigo-400 font-bold">1.</span> 當 CrCl 降低時，部分抗生素（如 Cefepime, Meropenem）需顯著調整劑量以避免毒性。</li>
                    <li className="flex gap-3 leading-relaxed"><span className="text-indigo-400 font-bold">2.</span> Table 17B 代表藥物在任何階段通常無需調整。</li>
                  </>
                )}
              </ul>
            </div>

            <div className={`space-y-5 border-l-2 pl-8 ${isHD ? 'border-white/5' : 'border-white/10'}`}>
              <div className="flex items-center justify-between">
                <h4 className={`text-xs font-black uppercase tracking-widest ${isHD ? 'text-red-400' : 'text-indigo-300'}`}>
                  🔍 當前藥物專屬珠璣 (Pearl)
                </h4>
                {currentDrug && (
                  !isEditingPearls ? (
                    <button
                      onClick={handleStartEdit}
                      className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white"
                      title="編輯備註"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleRestoreOriginal}
                        className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-slate-400"
                        title="恢復此藥物預設"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={handleSavePearls}
                        className="p-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors text-white flex items-center gap-1.5"
                        title="儲存"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-bold">儲存</span>
                      </button>
                      <button
                        onClick={() => setIsEditingPearls(false)}
                        className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-slate-300"
                        title="取消"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )
                )}
              </div>

              <div className="space-y-3">
                {isEditingPearls ? (
                  <div className="space-y-3">
                    {editedPearls.map((p, i) => (
                      <div key={i} className="group relative flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/5 focus-within:border-indigo-500/50 transition-all">
                        <textarea
                          className="flex-1 bg-transparent text-sm text-slate-200 outline-none resize-none placeholder:text-slate-600 min-h-[40px]"
                          value={p}
                          onChange={(e) => handleUpdatePearl(i, e.target.value)}
                          placeholder="輸入新的臨床備註..."
                          rows={2}
                        />
                        <button
                          onClick={() => handleRemovePearl(i)}
                          className="text-slate-500 hover:text-red-400 p-1 rounded opacity-0 group-hover:opacity-100 transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={handleAddPearl}
                      className="w-full py-3 border-2 border-dashed border-white/10 rounded-xl text-xs font-bold text-slate-500 hover:border-indigo-500/50 hover:text-indigo-400 transition-all flex items-center justify-center gap-2"
                    >
                      <Plus className="w-4 h-4" /> 新增備註項目
                    </button>
                  </div>
                ) : (
                  activePearls.length > 0 ? (
                    activePearls.map((p, i) => (
                      <div key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed border-b border-white/5 pb-3 last:border-0">
                        <span className={`mt-0.5 ${isHD ? 'text-red-500' : 'text-indigo-400'}`}>▶</span>
                        {p}
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-slate-400 italic">請搜尋特定藥物以顯示詳細臨床備註。</p>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 資料管理互動視窗 (Export/Import Modal) */}
      {isDataModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsDataModalOpen(false)}></div>
          <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Tabs Header */}
            <div className="flex border-b border-slate-100">
              <button
                onClick={() => setDataModalTab('export')}
                className={`flex-1 py-5 text-sm font-black tracking-widest uppercase transition-all ${dataModalTab === 'export' ? 'text-indigo-600 border-b-4 border-indigo-600 bg-indigo-50/30' : 'text-slate-400 hover:bg-slate-50'}`}
              >
                匯出資料 (EXPORT)
              </button>
              <button
                onClick={() => setDataModalTab('import')}
                className={`flex-1 py-5 text-sm font-black tracking-widest uppercase transition-all ${dataModalTab === 'import' ? 'text-indigo-600 border-b-4 border-indigo-600 bg-indigo-50/30' : 'text-slate-400 hover:bg-slate-50'}`}
              >
                匯入資料 (IMPORT)
              </button>
            </div>

            {/* Content Area */}
            <div className="p-10 space-y-8">
              {dataModalTab === 'export' ? (
                <div className="space-y-6">
                  <div className="bg-indigo-50/50 p-6 rounded-[1.5rem] border border-indigo-100/50 space-y-3">
                    <h5 className="text-sm font-black text-indigo-700 flex items-center gap-2">
                      💡 傳送方式選擇
                    </h5>
                    <ol className="text-sm text-indigo-900/70 space-y-2 list-decimal list-inside font-medium leading-relaxed">
                      <li><strong className="text-indigo-600">推薦：</strong> 下載備份檔 (.json)</li>
                      <li>複製文字並傳送至其他裝置</li>
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <button
                      onClick={handleExportJSON}
                      className="w-full bg-[#10b981] hover:bg-[#059669] text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20 transition-all active:scale-[0.98]"
                    >
                      <Download className="w-6 h-6" /> 下載備份檔案 (.json)
                    </button>
                    <button
                      onClick={handleCopyJSON}
                      className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
                    >
                      <Copy className="w-4 h-4" /> 複製資料代碼
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-orange-50 p-6 rounded-[1.5rem] border border-orange-100 space-y-3">
                    <h5 className="text-sm font-black text-orange-700 flex items-center gap-2">
                      ⚠️ 注意事項
                    </h5>
                    <p className="text-sm text-orange-900/70 font-medium leading-relaxed">
                      匯入將會 <strong className="text-orange-700 border-b-2 border-orange-300">完全覆蓋</strong> 您目前裝置上的現有資料。請確認您已備份重要內容。
                    </p>
                  </div>

                  <div className="relative group">
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImportJSON}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="w-full border-2 border-dashed border-emerald-500/30 group-hover:border-emerald-500/60 transition-all rounded-[1.5rem] py-8 flex flex-col items-center justify-center gap-3 bg-emerald-50/30 group-hover:bg-emerald-50/50">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <Upload className="w-6 h-6" />
                      </div>
                      <span className="text-emerald-700 font-bold">選擇備份檔案 (.json)</span>
                      <span className="text-[10px] text-emerald-600/60 uppercase tracking-widest font-black">點擊或拖放檔案至此</span>
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={() => setIsDataModalOpen(false)}
                className="w-full py-2 text-slate-400 hover:text-slate-600 text-xs font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
              >
                關閉視窗 <X className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 商品名編輯互動視窗 (Trade Names Modal) */}
      {isEditingTradeNames && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsEditingTradeNames(false)}></div>
          <div className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-100 text-indigo-600 rounded-xl">
                  <Tag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 leading-tight">編輯商品名稱</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{currentDrug?.name}</p>
                </div>
              </div>

              <div className="space-y-3 max-h-[40vh] overflow-y-auto px-1">
                {editedTradeNames.map((tn, idx) => (
                  <div key={idx} className="flex gap-2">
                    <input
                      type="text"
                      value={tn}
                      onChange={(e) => {
                        const newNames = [...editedTradeNames];
                        newNames[idx] = e.target.value;
                        setEditedTradeNames(newNames);
                      }}
                      className="flex-1 bg-slate-50 border-none rounded-xl px-4 py-2.5 font-bold text-sm text-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow"
                      placeholder="例如: Augmentin"
                    />
                    <button
                      onClick={() => setEditedTradeNames(editedTradeNames.filter((_, i) => i !== idx))}
                      className="p-2.5 bg-red-50 text-red-500 hover:bg-red-100 rounded-xl transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => setEditedTradeNames([...editedTradeNames, ''])}
                  className="w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-xs font-bold text-slate-400 hover:border-indigo-500/50 hover:text-indigo-500 transition-all flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" /> 新增商品名稱
                </button>
              </div>

              <div className="flex gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setIsEditingTradeNames(false)}
                  className="flex-1 py-3 text-sm font-black text-slate-400 hover:bg-slate-50 rounded-2xl transition-all"
                >
                  取消
                </button>
                <button
                  onClick={handleSaveTradeNames}
                  className="flex-[2] py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-sm shadow-lg shadow-indigo-200 transition-all active:scale-[0.98]"
                >
                  儲存修改
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
