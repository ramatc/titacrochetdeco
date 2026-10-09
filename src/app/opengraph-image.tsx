import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Typographic share card; swap for a real product photo when available. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#faf7f1",
          color: "#26231f",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: "0.38em" }}>TITA</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, maxWidth: 900 }}>
            Pequeñas cosas, tejidas para quedarse.
          </div>
          <div style={{ fontSize: 28, color: "#6f685f" }}>
            Ramos, flores y amigurumis hechos a mano · @titacrochetdeco
          </div>
        </div>
      </div>
    ),
    size,
  );
}
