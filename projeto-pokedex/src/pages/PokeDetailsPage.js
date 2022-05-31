import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import GlobalState from "../global/GlobalState";

function PokeDetailsPage () {

    const params = useParams()
    const {states, getters} = useContext(GlobalState)

    const {pokemonDetails} = states;
    const {getDetailsPoke} = getters;

    useEffect(()=>{
        getDetailsPoke(params.pokeName)
    },[])

    const renderizaDetails = pokemonDetails.name ? (
        <>
            <h2>{pokemonDetails.name}</h2>
            <img src={pokemonDetails.images.front}  alt="Imagem do pokemon de frente" />
            <img src={pokemonDetails.images.back} alt="Imagem do pokemon de costas" />
        </>
    ) : <p> Carregando...</p>

    return (
        <main>

            <Header
                paginaAtual = {"detalhesPokemons"}
            />

            <hr/>
            
            <h1>PokeInfos</h1>
            {renderizaDetails}
        
        </main>
    )
}

export default PokeDetailsPage;