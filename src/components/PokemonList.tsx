import { MouseEvent, useState } from "react";
import { usePokemonListQuery } from "../redux/services/pokemon/pokemonApi";
import PokemonThumb from "./PokemonThumb";
import { Button } from "./ui/button";

const PokemonList = ({
  onPokemonSelected,
}: {
  onPokemonSelected: (pokemonName: string) => void;
}) => {
  const limit = 20;
  const [offset, setOffset] = useState(0);
  const { isUninitialized, isLoading, isError, data, refetch } =
    usePokemonListQuery({ limit, offset });

  const handleNextPage = () => {
    setOffset((prevOffset) => prevOffset + limit); // Increment offset to fetch next page
    refetch();
  };
  const handlePrevPage = () => {
    setOffset((prevOffset) =>
      prevOffset - limit < 0 ? 0 : prevOffset - limit
    ); // Decrement offset to move to previous page, ensuring it doesn't go below 0
    refetch();
  };

  if (isLoading || isUninitialized) {
    return <p>loading, please wait</p>;
  }

  if (isError) {
    return <p>something went wrong</p>;
  }

  const handleClick = (e: MouseEvent, value: string) => {
    e.stopPropagation();
    alert(value);
  };

  return (
    <article>
      <h2>Overview</h2>
      <ol start={1} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.results.map((pokemon) => (
          <li key={pokemon.name}>
            <button onClick={() => onPokemonSelected(pokemon.name)}>
              <PokemonThumb pokemonName={pokemon.name} />
              {pokemon.name}
              <Button onClick={(e) => handleClick(e, pokemon.name)}>fav</Button>
            </button>
          </li>
        ))}
      </ol>

      {data && data.results && (
        <div>
          <button onClick={handlePrevPage} disabled={offset === 0 || isLoading}>
            Previous
          </button>
          <button onClick={handleNextPage} disabled={isLoading}>
            {isLoading ? "Loading..." : "Next"}
          </button>
        </div>
      )}
    </article>
  );
};

export default PokemonList;
