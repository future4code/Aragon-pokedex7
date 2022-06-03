import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { GlobalContext } from "../global/GlobalState";
import styled from 'styled-components';

const Div = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
padding: 3%;
`

const Section = styled.section`
img{
    height: 200px;
    background-color: #2f68b2;
}

h2{
    font-family: Arial;
    padding: 1%;
    color: #2f68b2;
}
`

const Card = styled.div`
border-style: solid;
border-color: #2f68b2;
border-radius: 3%;
padding: 1%;
box-shadow: 0 0 1em #2f68b2;
`

function PokeDetailsPage() {

    const params = useParams();
    const context = useContext(GlobalContext);

    const { pokemonDetails } = context.states;
    const { getDetailsPoke } = context.getters;

    useEffect(() => {
        getDetailsPoke(params.pokeName)
    }, [])

    const renderizaDetails = pokemonDetails.name ? (
        <Div>
            <Card>
                <Section>
                    <h2>{pokemonDetails.name.toUpperCase()}</h2>
                    <img src={pokemonDetails.images.front} alt="Imagem do pokemon de frente" />
                    <img src={pokemonDetails.images.back} alt="Imagem do pokemon de costas" />
                </Section>

                <Section>
                    <h2>Status:</h2>
                    {pokemonDetails.status.map((statu)=>{
                        return(
                            <section key={statu.name}>
                                <span>{statu["status_name"].toUpperCase()}: </span>
                                <span>{statu.value}</span>
                            </section>
                        )
                    })}
                </Section>

                <Section>
                    <h2>Tipos:</h2>
                    {pokemonDetails.types.map((type)=>{
                        return (
                            <li key={type}>{type}</li>
                        )
                    })}
                </Section>

                <Section>
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
                </Section>
            </Card>
        </Div>
    ) : <p> Carregando...</p>

    return (
        <main>

            <Header
                paginaAtual={"detalhesPokemons"}
            />

            {renderizaDetails}

        </main>
    )
}

export default PokeDetailsPage;