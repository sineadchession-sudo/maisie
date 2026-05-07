import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Join the maisie Waitlist — be first when maisie goes live";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#A855F7",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* White blobs for texture */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: -80,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "white",
            opacity: 0.08,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "white",
            opacity: 0.06,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 80,
            fontSize: 56,
            color: "white",
            opacity: 0.25,
          }}
        >
          ✦
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            fontSize: 36,
            color: "white",
            opacity: 0.2,
          }}
        >
          ✦
        </div>
        <div
          style={{
            position: "absolute",
            top: 160,
            left: 60,
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "white",
            opacity: 0.2,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 140,
            right: 100,
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "white",
            opacity: 0.2,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
            padding: "0 120px",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 900,
              color: "white",
              letterSpacing: "-1px",
              lineHeight: 1,
            }}
          >
            maisie
          </div>

          <div
            style={{
              fontSize: 44,
              fontWeight: 600,
              color: "white",
              lineHeight: 1.2,
              maxWidth: 680,
            }}
          >
            Join the waitlist. Be first.
          </div>

          <div
            style={{
              fontSize: 26,
              fontWeight: 300,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.5,
              maxWidth: 600,
              marginTop: 4,
            }}
          >
            Early access · Founding member pricing · First Storyboard book
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 36,
            right: 56,
            fontSize: 18,
            fontWeight: 300,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          maisieapp.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
