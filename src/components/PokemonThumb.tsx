import { usePokemonDetailQuery } from "../redux/services/pokemon/pokemonApi";

const PokemonThumb = ({ pokemonName }: { pokemonName: string }) => {
  const { isUninitialized, isLoading, isError, data } = usePokemonDetailQuery({
    name: pokemonName,
  });

  if (isLoading || isUninitialized) {
    return <p>loading, please wait</p>;
  }

  if (isError) {
    return <p>something went wrong</p>;
  }

  return <img src={data.sprites.front_default} alt={data.name} />;
};

export default PokemonThumb;
