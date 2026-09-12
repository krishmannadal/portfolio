import { ImageResponse } from "next/og";

export const alt = "Krishna Kumar Mandal · AI/ML Engineer & Systems Builder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#08090d",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(8, 9, 13, 0) 70%)",
          }}
        />

        {/* Top Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              padding: "6px 16px",
              borderRadius: "999px",
              backgroundColor: "#141822",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#38bdf8",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            RESEARCH-ORIENTED AI/ML ENGINEER
          </div>
          <div style={{ color: "#64748b", fontSize: "16px" }}>•</div>
          <div style={{ color: "#94a3b8", fontSize: "16px" }}>SFIT MUMBAI (2024–2028)</div>
        </div>

        {/* Center Title & Pitch */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 900,
              color: "#f0f4f8",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Krishna Kumar Mandal
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#94a3b8",
              lineHeight: 1.4,
              maxWidth: "850px",
            }}
          >
            Pretraining small language models from scratch, building claim-level evaluation harnesses, and auditing experimental results under compute constraints.
          </div>
        </div>

        {/* Bottom Metrics / Capabilities Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 700 }}>FLAGSHIP INSTRUMENT</span>
              <span style={{ fontSize: "18px", color: "#38bdf8", fontWeight: 700 }}>Mini-R1 (42.1M)</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 700 }}>EVAL RIGOR</span>
              <span style={{ fontSize: "18px", color: "#10b981", fontWeight: 700 }}>35.5% Audit Diff</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 700 }}>SYSTEMS</span>
              <span style={{ fontSize: "18px", color: "#f59e0b", fontWeight: 700 }}>Nullius DAG</span>
            </div>
          </div>

          <div
            style={{
              color: "#64748b",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            krishnakumarmandal.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
