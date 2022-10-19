import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import "./App.css";

const App = () => {
    const pokemonApi = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    const [pokemons, setPokemons] = useState([]);
    const [showMore, setShowMore] = useState(false);

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

    const loadMorePokemon = () => {
        setShowMore(true);
    };

    console.log("app rendered");

    return (
        <>
            <h1>Pokedex</h1>
            <div className="pokedex-container">
                {pokemons.map((pokemon, i) => {
                    if (i < 16 || showMore) {
                        return (
                            <PokemonCard
                                key={pokemon.pokemonId}
                                pokemon={{ ...pokemon }}
                            />
                        );
                    }
                    return null;
                })}
            </div>
            <button
                style={showMore ? { display: "none" } : null}
                onClick={loadMorePokemon}
                type="button"
            >
                Load more
            </button>
        </>
    );
};

export default App;
