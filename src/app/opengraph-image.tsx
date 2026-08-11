import { ImageResponse } from "next/og";
import { profile } from "@/data/cv";

export const alt = "Dev Pandya — Outbound Marketing, SEO & Growth Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0b0b0c",
          color: "#f3eee4",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#ff4b1f", textTransform: "uppercase" }}>
          {profile.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 128, fontWeight: 700, lineHeight: 0.95 }}>DEV</div>
          <div style={{ display: "flex", fontSize: 128, fontWeight: 700, lineHeight: 0.95 }}>PANDYA</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#f3eee499" }}>
          {profile.positioning}
        </div>
      </div>
    ),
    { ...size }
  );
}
