import "./SinglePokemonData.css";

const SinglePokemonData = ({ selectedPokemonData }) => {
    const { show, type } = selectedPokemonData;

    console.log("singlepokemondata rendred");

    return (
        <div
            style={show ? { display: "block" } : { display: "none" }}
            className="singlePokemonData"
        >
            <h1>{type}</h1>
        </div>
    );
};

export default SinglePokemonData;
