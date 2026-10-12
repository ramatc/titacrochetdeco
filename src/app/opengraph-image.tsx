import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Read once at module scope so the route can be prerendered.
const logo = await readFile(join(process.cwd(), "public/brand/logo-tita.png"));
const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

/** Share card with the full Tita logo (rabbit + wordmark) beside the tagline. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 64,
          padding: "72px 96px",
          background: "#faf7f1",
          color: "#26231f",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 680 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05 }}>
            Pequeñas cosas, tejidas para quedarse.
          </div>
          <div style={{ fontSize: 28, color: "#6f685f" }}>
            Ramos, flores y amigurumis hechos a mano · @titacrochetdeco
          </div>
        </div>
        {/* Source is 479x718; keep the aspect ratio. next/image does not work inside ImageResponse. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={320} height={480} />
      </div>
    ),
    size,
  );
}
