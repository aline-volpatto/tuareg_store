import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { CarrinhoProvider } from "./contexts/CarrinhoContext.jsx";
import { TemaProvider } from "./contexts/TemaContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TemaProvider>
        <CarrinhoProvider>
          <App />
        </CarrinhoProvider>
      </TemaProvider>
    </BrowserRouter>
  </StrictMode>,
);
