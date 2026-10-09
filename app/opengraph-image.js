import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = "Goodkind — your gift card field guide";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "76px",
          background: "#fbf8ef",
          color: "#244a38",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ width: 660, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#728348",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            <span style={{ color: "#bd8c3e", fontSize: 28, fontWeight: 400 }}>+</span>
            THE GIFT CARD FIELD GUIDE
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 36,
              fontSize: 90,
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: -6,
            }}
          >
            <span>A little card.</span>
            <span style={{ color: "#9aa957" }}>A lot of happy.</span>
          </div>
          <div style={{ marginTop: 30, color: "#647268", fontSize: 24 }}>
            Thoughtful tips for keeping gift cards safe.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 44,
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            <span style={{ color: "#86a848", fontSize: 28, fontWeight: 400 }}>+</span>
            goodkind
          </div>
        </div>
        <div
          style={{
            width: 320,
            height: 320,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "48% 52% 43% 57%",
            background: "#eff0da",
            transform: "rotate(-5deg)",
          }}
        >
          <div
            style={{
              width: 245,
              height: 155,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 23,
              border: "1px solid #e4e2d5",
              borderRadius: 18,
              background: "#fffdf5",
              boxShadow: "0 20px 45px rgba(47, 66, 42, 0.14)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", color: "#466246", fontSize: 15, fontWeight: 700 }}>
              a little joy
              <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#d48d47" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", color: "#28503c", fontFamily: "Georgia, serif", fontSize: 42, lineHeight: 0.95 }}>
              GOOD THINGS
              <span>are coming.</span>
            </div>
            <div style={{ color: "#73836c", fontSize: 11, fontWeight: 700, letterSpacing: 2 }}>
              A GIFT FOR YOU
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
