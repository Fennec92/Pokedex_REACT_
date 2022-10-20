import "./SinglePokemonData.css";
import pokedex from "../../Images/pokedex.png";

const SinglePokemonData = ({ selectedPokemonData, toggleShow }) => {
    const { show, type, name, pokemonImage, pokemonId } = selectedPokemonData;

    console.log("singlepokemondata rendred");

    return (
        <div
            style={show ? { position: "absolute" } : { display: "none" }}
            className="singlePokemonData-container"
        >
            <div className="pokedex-wrapper">
                <img src={pokedex} alt="pokedex" />
                <button type="button" onClick={toggleShow}>
                    Close
                </button>
                <div className="pokemon-image-in-pokedex">
                    <img src={pokemonImage} alt="pokemon" />
                </div>
                <div className="pokemon-information">
                    <ul>
                        <li>
                            <span className="test">Name:</span>{" "}
                            {name.at(0).toUpperCase() + name.slice(1)}
                        </li>
                        <li>ID: {pokemonId}</li>
                        <li>Type(s): {type}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SinglePokemonData;
