import { usePokemonDetailQuery } from "../redux/services/pokemon/pokemonApi";
import { listFormatter } from "../lib/listFormater";

const PokemonDetails = ({ pokemonName }: { pokemonName: string }) => {
  const { isUninitialized, isLoading, isError, data } = usePokemonDetailQuery({
    name: pokemonName,
  });

  if (isLoading || isUninitialized) {
    return <p>loading, please wait</p>;
  }

  if (isError) {
    return <p>something went wrong</p>;
  }

  const sprites = Object.values(data.sprites).filter(Boolean);

  return (
    <article>
      <h2>{data.name}</h2>
      <div className="flex max-w-md flex-wrap justify-center">
        {sprites.map((sprite) => {
          if (typeof sprite === "string")
            return <img src={sprite} alt={data.name} />;
        })}
      </div>
      <ul>
        <li>id: {data.id}</li>
        <li>height: {data.height}</li>
        <li>weight: {data.weight}</li>
        <li>
          types:
          {listFormatter.format(data.types.map((item) => item.type.name))}
        </li>
      </ul>
    </article>
  );
};

export default PokemonDetails;
