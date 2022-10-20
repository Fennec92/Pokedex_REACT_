import { useEffect, useState } from "react";
import SinglePokemonData from "../SinglePokemonData/SinglePokemonData";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
    const { name, url, pokemonImage, pokemonId } = pokemon;

    const [selectedPokemonData, setSelectedPokemonData] = useState({
        type: "",
        show: false,
    });

    console.log("pokemoncard rendered");

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

    const toggleShow = () => {
        setSelectedPokemonData((prev) => {
            return {
                ...prev,
                show: !prev.show,
            };
        });
    };

    return (
        <>
            <div onClick={toggleShow} className="pokedex-item" id={pokemonId}>
                <img src={pokemonImage} alt="" />
                <div className="card-info">
                    <h2>{name}</h2>
                    <p>Id: {pokemonId}</p>
                    <p>{selectedPokemonData.type}</p>
                </div>
            </div>
            <SinglePokemonData
                selectedPokemonData={{ ...selectedPokemonData, ...pokemon }}
                toggleShow={toggleShow}
            />
        </>
    );
};

export default PokemonCard;
