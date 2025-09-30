// Centralized Unsplash photo IDs for the site to avoid duplicates
const UNIQUE_IDS = [
  "photo-1544005313-94ddf0286df2",
  "photo-1520975912539-1fbd8a4e3a8e",
  "photo-1524503033411-c9566986fc8f",
  "photo-1503602642458-232111445657",
  "photo-1498050108023-c5249f4df085",
  "photo-1485217988980-11786ced9454",
  "photo-1503676260728-1c00da094a0b",
  "photo-1504198453319-5ce911bafcde",
  "photo-1497366216548-37526070297c",
  "photo-1557800636-894a64c1696f",
  "photo-1496307042754-b4aa456c4a2d",
  "photo-1500530855697-b586d89ba3ee",
  "photo-1508830524289-0adcbe822b40",
  "photo-1503424886302-3f2f4e86b1b7",
  "photo-1494790108377-be9c29b29330",
  "photo-1522075469751-3a6694fb2f61",
  "photo-1520975689974-6a7f4a3b6b49",
  "photo-1542744173-2b1b5f5a8a2b",
  "photo-1551836022-d5d88e9218df",
  "photo-1532619675605-3c3b0d6fe17a",
  "photo-1523261510453-7f70b9f0c8b8",
  "photo-1516251193007-45ef944ab0c6",
  "photo-1490645935967-10de6ba17061",
  "photo-1472099645785-5658abf4ff4e",
  "photo-1564869736416-51c0a8f0b4c4",
  "photo-1517245386807-bb43f82c33c4",
  "photo-1544005314-1b8d3e6f4c8e",
  "photo-1526318472351-c75fcf0703d2",
  "photo-1532375810709-3b6f6d1d6f9b",
  "photo-1526318480008-5f3d9a4c4a2f",
  "photo-1504198453319-a2a86b6ffd2b",
  "photo-1508195598689-0f2d2f7a7a2b",
  "photo-1472214103451-9374bd1c798e",
  "photo-1519389950473-47ba0277781c",
  "photo-1507168057991-4c0b6fb1f9a8",
  "photo-1519744792095-2f3f05f7d6bc",
  "photo-1499951360447-b19be8fe80f5",
  "photo-1500648767791-00dcc994a43e",
  "photo-1526045612212-70caf35c14df",
  "photo-1506619216599-9d16c3c02a39",
  "photo-1507120366498-465ef3a4fa5f",
  "photo-1502136969935-8b6f6b06b7c6",
  "photo-1518081461903-7f13b4a23f4b",
  "photo-1508780709619-79562169bc64",
  "photo-1515377905703-c4788e51af15",
  "photo-1515879218367-8466d910aaa4",
  "photo-1504712598893-24159a89200e",
  "photo-1512428559087-560fa5ceab42",
  "photo-1492684223066-81342ee5ff30",
  "photo-1509463531992-3a7f3b6c2d9d",
  "photo-1492562080023-ab3db95bfbce",
  "photo-1502767089025-6572583495b0",
  "photo-1508235056262-98b56e4c5d61",
  "photo-1487412947147-5cebf100ffc2",
  "photo-1506794778202-cad84cf45f1d",
  "photo-1524504388940-b1c1722653e1",
  "photo-1506377247377-2a5b3b417ebb",
  "photo-1518806118473-6e14cfe0f5f3",
  "photo-1503341455253-b2e723bb3dbb",
  "photo-1507120366498-987654321abc",
  "photo-1499951360447-b19be8fe80f5",
  "photo-1506619216599-9d16c3c02a39",
];

// Remove duplicates, preserve order
const ORDERED = Array.from(new Set(UNIQUE_IDS));

// Ensure FORCE_ONCE IDs are present only once and at front
const FORCE_ONCE = [
  "photo-1544005313-94ddf0286df2",
  "photo-1551836022-d5d88e9218df",
  "photo-1492562080023-ab3db95bfbce",
];
const withoutForced = ORDERED.filter((id) => !FORCE_ONCE.includes(id));
const FINAL = [
  ...FORCE_ONCE.filter((id) => ORDERED.includes(id)),
  ...withoutForced,
];

// Export slices for page sections
export const INFLUENCERS = FINAL.slice(0, 8);
export const CREATIVES = FINAL.slice(8, 16);
export const FEATURES = FINAL.slice(16, 36); // 20 items
export const SECTORS = [
  "FMCG",
  "E-Ticaret",
  "Kozmetik ve Güzellik",
  "Tekstil ve Moda",
  "Gıda",
  "Otomotiv",
  "Finans",
  "Perakende",
];
export const SECTOR_IMAGES = FINAL.slice(36, 44);
export const CASE_STUDIES = FINAL.slice(44, 50);
export const BLOG_IMAGES = FINAL.slice(50, 53);

export const ABOUT_IMAGES = {
  hero: FINAL[53] || FINAL[0],
  team: [FINAL[54] || FINAL[1], FINAL[55] || FINAL[2], FINAL[56] || FINAL[3]],
};

export const CAREER_IMAGES = [FINAL[57] || FINAL[4], FINAL[58] || FINAL[5]];
