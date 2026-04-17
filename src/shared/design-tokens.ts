export const colors = {
  beige: "#F8F5F0",
  white: "#FFFFFF",
  text: "#333333",
  sub: "#666666",
  mute: "#999999",
  gold: "#C9A84C",
  cta: "#06C755",

  shuurushi: {
    bg:    "#F5EAEA",
    light: "#D4A0A0",
    mid:   "#B06060",
    main:  "#8B3A3A",
    dark:  "#5C2626",
  },

  fukamidori: {
    bg:    "#EAF0E8",
    light: "#A8BFA2",
    mid:   "#7A9A72",
    main:  "#4A6741",
    dark:  "#2E4229",
  },

  urushicha: {
    bg:    "#F5EDE6",
    light: "#D4B89A",
    mid:   "#A67B5B",
    main:  "#5C3A21",
    dark:  "#3D2616",
  },

  seiji: {
    bg:    "#E6EEF1",
    light: "#A8C4CE",
    mid:   "#6E98A8",
    main:  "#4A7080",
    dark:  "#304A55",
  },

  tetsukon: {
    bg:    "#E8EAF0",
    light: "#A8AEBB",
    mid:   "#6A7388",
    main:  "#2E3545",
    dark:  "#1A1F2A",
  },
} as const;

export const typography = {
  fontFamily: "'Noto Sans JP', sans-serif",

  body: { size: "14px", weight: 400, lineHeight: 1.8 },

  sectionEn: {
    size: "13px",
    weight: 300,
    letterSpacing: "0.2em",
  },

  sectionJa: {
    size: "12px",
    weight: 400,
    letterSpacing: "0.05em",
  },

  subheading: { size: "16px", weight: 500, lineHeight: 1.6 },

  display: { weight: 300, letterSpacing: "0.25em" },
} as const;

export const spacing = {
  pagePadding: "24px",
  section: { lp: "48px", hp: "80px" },
  contentMax: { lp: "720px", hp: "600px" },
  lineHeight: { lp: 1.8, hp: 2.2 },
} as const;

export const LINE_URL = "https://lin.ee/9TamhEC";
export const LINE_URL_HP = "https://lin.ee/UNm5XqPe";
