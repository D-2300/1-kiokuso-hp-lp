export default function TohokuMap() {
  return (
    <svg
      viewBox="0 0 300 460"
      style={{ width: "100%", maxWidth: "320px", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* レーダー風同心円（中心＝仙台付近 cx=168, cy=330） */}
      <circle cx="168" cy="330" r="55"  fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
      <circle cx="168" cy="330" r="110" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
      <circle cx="168" cy="330" r="165" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
      <circle cx="168" cy="330" r="220" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />

      {/* 青森県（北端） */}
      <path
        d="
          M 110,18
          L 95,22 L 80,30 L 68,42 L 60,55 L 58,70 L 65,80
          L 75,85 L 90,82 L 100,75 L 112,68 L 125,72
          L 138,78 L 148,72 L 158,62 L 165,50 L 168,38
          L 160,25 L 148,18 L 135,15 L 120,14 Z
        "
        fill="#A8CBF0"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* 秋田県（西側） */}
      <path
        d="
          M 65,80 L 58,70 L 52,88 L 48,108 L 46,128
          L 44,148 L 46,168 L 50,185 L 58,198 L 68,208
          L 80,212 L 92,210 L 102,202 L 108,190 L 110,175
          L 108,160 L 105,145 L 108,130 L 112,115
          L 112,100 L 108,88 L 100,82 L 90,82
          L 75,85 Z
        "
        fill="#A8CBF0"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* 岩手県（東側・大きい） */}
      <path
        d="
          M 138,78 L 125,72 L 112,68 L 112,82 L 112,100
          L 112,115 L 108,130 L 108,145 L 110,160
          L 112,175 L 118,188 L 128,198 L 140,205
          L 152,210 L 165,210 L 178,205 L 190,195
          L 200,182 L 205,168 L 205,152 L 200,138
          L 192,125 L 185,112 L 182,98 L 182,84
          L 175,76 L 165,70 L 155,65 L 148,72 Z
        "
        fill="#6BA3E8"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* 山形県（西側中段） */}
      <path
        d="
          M 68,208 L 58,198 L 50,210 L 46,228 L 46,248
          L 50,265 L 58,278 L 68,288 L 80,294 L 95,296
          L 108,292 L 118,282 L 122,268 L 120,252
          L 115,238 L 110,225 L 108,212 L 102,202
          L 92,210 L 80,212 Z
        "
        fill="#A8CBF0"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* 宮城県（中央・メイン） */}
      <path
        d="
          M 118,188 L 112,198 L 110,212 L 115,225
          L 120,240 L 122,255 L 120,268 L 125,278
          L 135,285 L 148,288 L 162,286 L 175,278
          L 185,265 L 190,250 L 188,235 L 182,222
          L 178,208 L 178,205 L 165,210 L 152,210
          L 140,205 L 128,198 Z
        "
        fill="#3B7DD8"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* 仙台市マーカー */}
      <circle cx="160" cy="258" r="5" fill="#ffffff" stroke="#1B5DB8" strokeWidth="2" />
      <circle cx="160" cy="258" r="2.5" fill="#1B5DB8" />

      {/* 福島県（南端・大きい） */}
      <path
        d="
          M 95,296 L 80,294 L 68,300 L 58,312 L 52,328
          L 50,345 L 52,362 L 60,376 L 72,386 L 88,392
          L 105,394 L 122,392 L 138,386 L 152,376
          L 162,364 L 168,350 L 170,335 L 168,320
          L 162,308 L 152,300 L 140,295 L 128,292
          L 115,292 L 108,292 Z
        "
        fill="#6BA3E8"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* 凡例 */}
      <rect x="10" y="410" width="10" height="10" fill="#3B7DD8" rx="2" />
      <text x="24" y="420" fontSize="10" fill="#555" fontFamily="'Noto Sans JP', sans-serif">宮城県（メイン）</text>

      <rect x="10" y="426" width="10" height="10" fill="#6BA3E8" rx="2" />
      <text x="24" y="436" fontSize="10" fill="#555" fontFamily="'Noto Sans JP', sans-serif">岩手・福島</text>

      <rect x="130" y="410" width="10" height="10" fill="#A8CBF0" rx="2" />
      <text x="144" y="420" fontSize="10" fill="#555" fontFamily="'Noto Sans JP', sans-serif">青森・秋田・山形</text>
    </svg>
  );
}
