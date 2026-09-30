import { ImageResponse } from "next/og";
import { site } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
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
          backgroundColor: "#0A0A0B",
          color: "#FAFAFA",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, color: "#818CF8", marginBottom: 24 }}>
            {site.role}
          </div>
          <div style={{ fontSize: 72, fontWeight: 600, lineHeight: 1.05 }}>
            {site.name}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 28, color: "#A1A1AA", maxWidth: 900 }}>
            {site.tagline}
          </div>
          <div style={{ fontSize: 20, color: "#52525B", marginTop: 24 }}>
            {site.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}