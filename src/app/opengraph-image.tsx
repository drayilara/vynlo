import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Vynlo — Create Unlimited UGC Ads Instantly";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const spaceGroteskBold = await readFile(
    join(process.cwd(), "assets/SpaceGrotesk-Bold.ttf")
  );
  const interRegular = await readFile(
    join(process.cwd(), "assets/Inter-Regular.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0A0A0A",
          padding: "60px",
          alignItems: "center",
        }}
      >
        {/* Left content — 60% */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            paddingRight: "40px",
            gap: "24px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              fontFamily: "SpaceGrotesk",
              fontSize: 40,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.04em",
            }}
          >
            V
            <span style={{ color: "#00FF85" }}>y</span>
            nlo
          </div>

          {/* Headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "SpaceGrotesk",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            <span style={{ fontSize: 64, color: "#FFFFFF" }}>
              Create unlimited
            </span>
            <span style={{ fontSize: 64, color: "#00FF85" }}>UGC Ads.</span>
            <span style={{ fontSize: 64, color: "#00FF85" }}>Instantly.</span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              display: "flex",
              fontFamily: "Inter",
              fontSize: 22,
              color: "#b9cbb9",
              lineHeight: 1.5,
              maxWidth: "500px",
            }}
          >
            Turn any product into a scroll-stopping ad in seconds. AI-powered
            creative at scale.
          </div>

          {/* Social proof */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "8px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#00FF85",
              }}
            />
            <span
              style={{
                fontFamily: "Inter",
                fontSize: 16,
                color: "#999999",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
              }}
            >
              500+ brands already scaling with Vynlo
            </span>
          </div>
        </div>

        {/* Right content — 40% phone mockups */}
        <div
          style={{
            display: "flex",
            width: "40%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Left phone */}
          <div
            style={{
              display: "flex",
              width: "140px",
              height: "260px",
              backgroundColor: "#1A1A1A",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.05)",
              position: "absolute",
              left: "30px",
              transform: "rotate(-6deg)",
            }}
          />
          {/* Center phone (active) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "160px",
              height: "290px",
              backgroundColor: "#222222",
              borderRadius: "20px",
              border: "2px solid rgba(0,255,133,0.3)",
              boxShadow: "0 0 60px rgba(0,255,133,0.15)",
              zIndex: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 40,
                color: "#00FF85",
              }}
            >
              ✦
            </div>
          </div>
          {/* Right phone */}
          <div
            style={{
              display: "flex",
              width: "140px",
              height: "260px",
              backgroundColor: "#1A1A1A",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.05)",
              position: "absolute",
              right: "30px",
              transform: "rotate(6deg)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "SpaceGrotesk",
          data: spaceGroteskBold,
          style: "normal" as const,
          weight: 700,
        },
        {
          name: "Inter",
          data: interRegular,
          style: "normal" as const,
          weight: 400,
        },
      ],
    }
  );
}
