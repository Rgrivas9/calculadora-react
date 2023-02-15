import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./pages/calculator/calculator";
import Conversion from "./pages/conversion/conversion";
import Exchange from "./pages/exchange/exchange";
import "./index.css";
import { PageContextProvider } from "./context/pageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <PageContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Calculator />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/conversion" element={<Conversion />} />
          </Route>
        </Routes>
      </PageContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
