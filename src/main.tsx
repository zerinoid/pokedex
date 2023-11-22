import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import pokemonApi from "./redux/services/pokemon/pokemonApi.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiProvider api={pokemonApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
