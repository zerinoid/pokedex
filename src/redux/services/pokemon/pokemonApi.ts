import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPokemonDetailData } from "../../../interfaces/PokemonDetailData";
import PokemonListing from "../../../interfaces/PokemonListing";

const pokemonApi = createApi({
  // URL https://pokeapi.co/api/v2/pokemon?limit=9 construída a partir de baseQuery e da prop 'pokemonList'
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (build) => ({
    pokemonList: build.query<
      PokemonListing,
      { offset?: number; limit: number }
    >({
      query({ offset = 0, limit }) {
        return {
          url: "pokemon",
          params: { offset, limit },
        };
      },
    }),
    pokemonDetail: build.query<IPokemonDetailData, { name: string }>({
      query: ({ name }) => `pokemon/${name}/`,
    }),
  }),
});

export const { usePokemonListQuery, usePokemonDetailQuery } = pokemonApi;

export default pokemonApi;
