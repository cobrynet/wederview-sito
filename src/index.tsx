import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../tailwind.css";
import { PcEsportazione } from "./screens/PcEsportazione/PcEsportazione";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <PcEsportazione />
  </StrictMode>,
);
