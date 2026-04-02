const rows = [
  ["物件情報", "掲載後の残り", "出回る前も含む"],
  ["設備", "写真と間取りだけ", "厨房・ダクト・電気まで把握"],
  ["前テナント", "業態すら不明", "業態・年数・撤退理由まで"],
  ["初期費用", "内装は別途", "物件＋内装の総額で判断"],
  ["交渉", "表示条件のまま", "交渉の余地と方法を助言"],
  ["リスク", "自分で判断", "危ない物件は正直に伝える"],
  ["立場", "契約させたい側", "儲かってほしい側"],
  ["費用", "仲介手数料あり", "無料"],
];

export default function TenantComparison() {
  return (
    <section style={{ padding: "64px 24px", background: "#1a1f14" }}>
      <div style={{ maxWidth: "560px", margin: "0 auto" }}>
        <span style={{ display: "block", textAlign: "center", fontSize: "11px", fontWeight: 500, letterSpacing: ".15em", color: "#C9A84C", marginBottom: "10px" }}>
          COMPARISON
        </span>
        <h2 style={{ fontSize: "clamp(18px, 3.5vw, 24px)", fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: "40px", lineHeight: 1.7 }}>
          不動産サイトとの違い
        </h2>

        {/* Visual comparison */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginBottom: "36px", flexWrap: "wrap" }}>
          {/* Portal box */}
          <div style={{ flex: 1, minWidth: "140px", maxWidth: "200px", borderRadius: "12px", padding: "20px 16px", textAlign: "center", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)" }}>
            <svg viewBox="0 0 48 48" fill="none" style={{ width: "48px", height: "48px", marginBottom: "10px" }}>
              <rect x="6" y="8" width="36" height="32" rx="4" stroke="rgba(255,255,255,.2)" strokeWidth="1.5" fill="none"/>
              <rect x="12" y="16" width="10" height="8" rx="1" fill="rgba(255,255,255,.1)"/>
              <rect x="26" y="16" width="10" height="8" rx="1" fill="rgba(255,255,255,.1)"/>
              <rect x="12" y="28" width="10" height="8" rx="1" fill="rgba(255,255,255,.1)"/>
              <rect x="26" y="28" width="10" height="8" rx="1" fill="rgba(255,255,255,.08)"/>
            </svg>
            <p style={{ fontSize: "13px", fontWeight: 700, marginBottom: "6px", color: "rgba(255,255,255,.4)" }}>不動産サイト</p>
            <p style={{ fontSize: "11px", lineHeight: 1.6, color: "rgba(255,255,255,.25)" }}>掲載後の残り物件<br />写真と間取りだけ<br />自分で判断</p>
          </div>

          <span style={{ fontSize: "20px", color: "rgba(255,255,255,.15)", flexShrink: 0 }}>→</span>

          {/* Us box */}
          <div style={{ flex: 1, minWidth: "140px", maxWidth: "200px", borderRadius: "12px", padding: "20px 16px", textAlign: "center", background: "rgba(201,168,76,.08)", border: "1px solid rgba(201,168,76,.2)" }}>
            <svg viewBox="0 0 48 48" fill="none" style={{ width: "48px", height: "48px", marginBottom: "10px" }}>
              <circle cx="18" cy="18" r="8" fill="rgba(201,168,76,.2)"/>
              <circle cx="18" cy="15" r="3.5" fill="rgba(201,168,76,.3)"/>
              <path d="M12 24 Q18 20 24 24" fill="rgba(201,168,76,.25)"/>
              <circle cx="32" cy="18" r="8" fill="rgba(74,103,65,.2)"/>
              <circle cx="32" cy="15" r="3.5" fill="rgba(74,103,65,.3)"/>
              <path d="M26 24 Q32 20 38 24" fill="rgba(74,103,65,.25)"/>
              <rect x="8" y="30" width="32" height="12" rx="4" fill="rgba(201,168,76,.12)"/>
              <text x="24" y="39" textAnchor="middle" fill="rgba(201,168,76,.8)" fontSize="7" fontWeight="700" fontFamily="Noto Sans JP">お得な情報</text>
            </svg>
            <p style={{ fontSize: "13px", fontWeight: 700, marginBottom: "6px", color: "#C9A84C" }}>KAI &amp; KEN</p>
            <p style={{ fontSize: "11px", lineHeight: 1.6, color: "rgba(255,255,255,.6)" }}>出回る前の物件も<br />裏事情・リスクまで<br />プロが正直に助言</p>
          </div>
        </div>

        {/* Table */}
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "clamp(12px, 2vw, 14px)" }}>
          <thead>
            <tr>
              <th style={{ padding: "14px 10px", textAlign: "left", borderBottom: "1px solid rgba(255,255,255,.07)", fontWeight: 500, color: "rgba(255,255,255,.3)", fontSize: "clamp(11px, 1.8vw, 12px)", letterSpacing: ".05em" }} />
              <th style={{ padding: "14px 10px", textAlign: "left", borderBottom: "1px solid rgba(255,255,255,.07)", fontWeight: 500, color: "rgba(255,255,255,.3)", fontSize: "clamp(11px, 1.8vw, 12px)", letterSpacing: ".05em" }}>不動産サイト</th>
              <th style={{ padding: "14px 10px", textAlign: "left", borderBottom: "1px solid rgba(255,255,255,.07)", fontWeight: 500, color: "#C9A84C", fontSize: "clamp(11px, 1.8vw, 12px)", letterSpacing: ".05em" }}>KAI &amp; KEN</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, portal, us], i) => (
              <tr key={i}>
                <td style={{ padding: "14px 10px", borderBottom: "1px solid rgba(255,255,255,.07)", fontWeight: 500, color: "rgba(255,255,255,.45)", whiteSpace: "nowrap" }}>{label}</td>
                <td style={{ padding: "14px 10px", borderBottom: "1px solid rgba(255,255,255,.07)", color: "rgba(255,255,255,.25)" }}>{portal}</td>
                <td style={{ padding: "14px 10px", borderBottom: "1px solid rgba(255,255,255,.07)", color: "rgba(255,255,255,.85)", fontWeight: 500 }}>{us}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
