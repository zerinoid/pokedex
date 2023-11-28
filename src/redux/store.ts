import { configureStore } from "@reduxjs/toolkit";
import pokemonApi from "./services/pokemon/pokemonApi";

export default configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});
