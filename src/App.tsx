import { useState } from 'react'
import './App.css'

function App() {
  const [selectedPokemon, selectPokemon] = useState<string | undefined>(
    undefined
  );
return (
    <>
      <header>
        <h1>My Pokedex</h1>
      </header>
      <main>
        {selectedPokemon ? (
          <>
            {/* <PokemonDetails pokemonName={selectedPokemon} /> */}
            <button onClick={() => selectPokemon(undefined)}>back</button>
          </>
        ) : (
          // <PokemonList onPokemonSelected={selectPokemon} />
          null
        )}
      </main>
    </>
  );
}

export default App
