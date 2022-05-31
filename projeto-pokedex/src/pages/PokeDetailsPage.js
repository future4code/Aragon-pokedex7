import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { GlobalContext } from "../global/GlobalState";

function PokeDetailsPage() {

    const params = useParams();
    const context = useContext(GlobalContext);

    const { pokemonDetails } = context.states;
    const { getDetailsPoke } = context.getters;

    useEffect(() => {
        getDetailsPoke(params.pokeName)
    }, [])

    const renderizaDetails = pokemonDetails.name ? (
        <>
            <section>
                <h2>{pokemonDetails.name.toUpperCase()}</h2>
                <img src={pokemonDetails.images.front} alt="Imagem do pokemon de frente" />
                <img src={pokemonDetails.images.back} alt="Imagem do pokemon de costas" />
            </section>

            <section>
                <h2>Status:</h2>
                {pokemonDetails.status.map((statu)=>{
                    return(
                        <section key={statu.name}>
                            <span>{statu["status_name"].toUpperCase()}: </span>
                            <span>{statu.value}</span>
                        </section>
                    )
                })}
            </section>

            <section>
                <h2>Tipos:</h2>
                {pokemonDetails.types.map((type)=>{
                    return (
                        <li key={type}>{type}</li>
                    )
                })}
            </section>

            <section>
                <h2>Habilidades:</h2>
                {pokemonDetails.abilities.filter((abilitie, index)=>{
                    if (index < 5) {
                        return abilitie;
                    }                   
                })
                .map((abilitie)=>{
                    return (
                        <li key={abilitie}>{abilitie}</li>
                    )
                })}
            </section>
        </>
    ) : <p> Carregando...</p>

    return (
        <main>

            <Header
                paginaAtual={"detalhesPokemons"}
            />

            <hr />

            <h1>PokeInfos</h1>
            {renderizaDetails}

        </main>
    )
}

export default PokeDetailsPage;