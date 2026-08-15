import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/site";

export const alt = siteConfig.defaultTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        backgroundColor: "oklch(0.985 0.002 260)",
        color: "oklch(0.13 0.006 260)",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: 36,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "oklch(0.51 0.18 255)",
        }}
      >
        {siteConfig.siteName}.dev
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            maxWidth: 960,
          }}
        >
          {siteConfig.defaultTitle}
        </div>
        <div
          style={{
            fontSize: 28,
            lineHeight: 1.4,
            color: "oklch(0.446 0.006 260)",
            maxWidth: 900,
          }}
        >
          {siteConfig.defaultDescription}
        </div>
      </div>
    </div>,
    { ...size }
  );
}
