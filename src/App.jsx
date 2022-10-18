import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import "./App.css";

const App = () => {
    const pokemonApi = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemonData = async () => {
            const res = await fetch(pokemonApi);
            const json = await res.json();
            const pokemonsData = json.results.map((item, i) => {
                return {
                    ...item,
                    pokemonImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
                        i + 1
                    }.gif`,
                    pokemonId: i + 1,
                };
            });
            setPokemons(pokemonsData);
        };

        fetchPokemonData(9);
    }, []);

    return (
        <div className="pokedex-container">
            <h1>Pokedex</h1>
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.pokemonId} pokemon={{ ...pokemon }} />
            ))}
            <button type="button">Load more</button>
        </div>
    );
};

export default App;
