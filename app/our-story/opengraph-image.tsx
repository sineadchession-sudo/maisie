import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Our Story — how maisie was born";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#A855F7",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -60,
            left: -60,
            width: 240,
            height: 240,
            borderRadius: "50%",
            background: "#F3E8FF",
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "#F3E8FF",
            opacity: 0.7,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 100,
            fontSize: 48,
            color: "#FACC15",
            opacity: 0.9,
          }}
        >
          ✦
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 100,
            fontSize: 32,
            color: "#F472B6",
            opacity: 0.8,
          }}
        >
          ✦
        </div>
        <div
          style={{
            position: "absolute",
            top: 140,
            left: 80,
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "#34D399",
            opacity: 0.7,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 130,
            right: 120,
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "#FB923C",
            opacity: 0.7,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            padding: "0 120px",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 900,
              color: "#A855F7",
              letterSpacing: "-1px",
              lineHeight: 1,
            }}
          >
            maisie
          </div>

          <div
            style={{
              fontSize: 42,
              fontWeight: 600,
              color: "#111111",
              lineHeight: 1.2,
              maxWidth: 700,
            }}
          >
            Our Story — how maisie was born.
          </div>

          <div
            style={{
              fontSize: 26,
              fontWeight: 300,
              color: "#6B7280",
              lineHeight: 1.5,
              maxWidth: 640,
              marginTop: 8,
            }}
          >
            A hard week. A camera roll. A revelation.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 36,
            right: 56,
            fontSize: 18,
            fontWeight: 300,
            color: "#6B7280",
          }}
        >
          maisieapp.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
