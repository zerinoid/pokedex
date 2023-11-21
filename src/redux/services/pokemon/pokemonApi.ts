import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const pokemonApi = createApi({
  // URL https://pokeapi.co/api/v2/pokemon?limit=9 construída a partir de baseQuery e da prop 'pokemonList' 
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (build) => ({
    pokemonList: build.query({
      query() {
        return {
          url: "pokemon",
          params: { limit: 9 },
        };
      },
    }),
    pokemonDetail: build.query({
      query: ({ name }) => `pokemon/${name}/`
    })
  }),
});

export const { usePokemonListQuery, usePokemonDetailQuery } = pokemonApi;
