import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Calculator from "./pages/calculator/Calculator";
import Exchange from "./pages/exchange/exchange";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageContextProvider } from "./context/pageContext";

import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <PageContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Calculator />} />
            <Route path="/exchange" element={<Exchange />} />
          </Route>
        </Routes>
      </PageContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
