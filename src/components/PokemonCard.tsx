import { usePokemonDetailQuery } from "../redux/services/pokemon/pokemonApi";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Bookmark } from "lucide-react";
import { MouseEvent } from "react";

type PokemonCardProps = {
  pokemonName: string;
  onPokemonSelected: (pokemonName: string) => void;
};

const PokemonCard = ({ pokemonName, onPokemonSelected }: PokemonCardProps) => {
  const { isUninitialized, isLoading, isError, data } = usePokemonDetailQuery({
    name: pokemonName,
  });

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
    <Card onClick={() => onPokemonSelected(pokemonName)}>
      <img src={data.sprites.front_default} alt={pokemonName} />
      {pokemonName}
      <Button onClick={(e) => handleClick(e, pokemonName)}>
        <Bookmark className="h-5 w-5" />
      </Button>
    </Card>
  );
};

export default PokemonCard;
