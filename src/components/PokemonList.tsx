import { usePokemonListQuery } from "../redux/services/pokemon/pokemonApi";

const PokemonList = ({
  onPokemonSelected,
}: {
  onPokemonSelected: (pokemonName: string) => void;
}) => {
  const { isUninitialized, isLoading, isError, data } = usePokemonListQuery();

  if (isLoading || isUninitialized) {
    return <p>loading, please wait</p>;
  }

  if (isError) {
    return <p>something went wrong</p>;
  }

  return (
    <article>
      <h2>Overview</h2>
      <ol start={1}>
        {data.results.map((pokemon) => (
          <li key={pokemon.name}>
            <button onClick={() => onPokemonSelected(pokemon.name)}>
              {pokemon.name}
            </button>
          </li>
        ))}
      </ol>
    </article>
  );
};

export default PokemonList;
