import React from "react";
import ReactDOM from "react-dom/client";
import ChargeApp from "./chargeApp";
import GlobalContextProvider from "./contexts/globalContextProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalContextProvider>
    <ChargeApp />
  </GlobalContextProvider>
);
