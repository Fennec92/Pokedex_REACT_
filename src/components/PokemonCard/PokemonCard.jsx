import { useEffect, useState } from "react";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
    const { name, url, pokemonImage, pokemonId } = pokemon;

    const [selectedPokemonData, setSelectedPokemonData] = useState({
        type: "",
    });

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(url);

            const json = await res.json();
            const types = json.types.map((type) => type.type.name).join(" | ");
            setSelectedPokemonData((prev) => {
                return {
                    ...prev,
                    type: types,
                };
            });
        };

        getData();
    }, []);

    return (
        <div className="pokedex-item">
            <img src={pokemonImage} alt="" />
            <div className="card-info">
                <h2>{name}</h2>
                <p>Id: {pokemonId}</p>
                <p>{selectedPokemonData.type}</p>
            </div>
        </div>
    );
};

export default PokemonCard;
