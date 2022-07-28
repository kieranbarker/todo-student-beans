import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";

const container = document.querySelector("#app");
const root = createRoot(container);

const DATA = [
  {
    id: "e3a803e7-8925-4fd0-9257-bce37b07739f",
    name: "Walk the dogs",
  },
  {
    id: "cc0d1616-6121-4e3d-8253-92d563fe4bbe",
    name: "Work out",
  },
  {
    id: "de037c1e-d48d-4069-ab7b-06b209c7220e",
    name: "Buy groceries",
  },
];

root.render(
  <StrictMode>
    <App todos={DATA} />
  </StrictMode>
);
