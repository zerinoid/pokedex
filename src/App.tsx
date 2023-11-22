import { useState } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";

function App() {
  const [selectedPokemon, selectPokemon] = useState<string | undefined>(
    undefined
  );
  return (
    <>
      <header>
        <h1>Pokedex App</h1>
      </header>
      <main>
        {selectedPokemon ? (
          <>
            <PokemonDetails pokemonName={selectedPokemon} />
            <button onClick={() => selectPokemon(undefined)}>back</button>
          </>
        ) : (
          <PokemonList onPokemonSelected={selectPokemon} />
        )}
      </main>
    </>
  );
}

export default App;
