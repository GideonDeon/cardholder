import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CardProvider } from "./components/CardContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CardProvider>
      <App />
    </CardProvider>
  </StrictMode>
);
