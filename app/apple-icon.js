import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 38,
          background: "#244a38",
        }}
      >
        <div
          style={{
            width: 82,
            height: 82,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            transform: "rotate(-8deg)",
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 37, height: 37, borderRadius: 12, background: "#d7ef78" }} />
            <div style={{ width: 37, height: 37, borderRadius: 12, background: "#e6b452" }} />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 37, height: 37, borderRadius: 12, background: "#e6b452" }} />
            <div style={{ width: 37, height: 37, borderRadius: 12, background: "#d7ef78" }} />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
