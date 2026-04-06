import { M, C } from "../tokens";

export default function MFooter() {
  return (
    <footer style={{ backgroundColor: M.dark, padding: "40px 20px 32px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
        {/* Logo mark only */}
        <img
          src="/images/logo-manshitsu-mark-white.webp"
          alt="満室デザインLABO"
          style={{ height: "44px", objectFit: "contain", marginBottom: "12px", opacity: 0.85, display: "block", marginLeft: "auto", marginRight: "auto" }}
        />
        <p style={{ margin: "0 0 10px", fontSize: "14px", color: C.gold, fontWeight: 500, letterSpacing: "0.06em" }}>
          記憶荘｜満室デザインLABO
        </p>
        <p style={{ margin: "0 0 6px", fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
          対応エリア：仙台市・宮城県全域
        </p>
        <p style={{ margin: "0 0 20px", fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
          📞 080-6900-3314　✉ studio@kiokuso.jp
        </p>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "16px",
          }}
        >
          <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.04em" }}>
            © 記憶荘 満室デザインLABO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
