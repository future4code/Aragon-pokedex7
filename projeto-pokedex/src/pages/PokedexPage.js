import { useContext } from "react";
import { CardPoke } from "../components/CardPoke";
import { Header } from "../components/Header";
import { GlobalContext } from "../global/GlobalState";
import styled from 'styled-components';
import pokedexVazia from '../img/pokedexVazia.png';

const None = styled.p`
display: flex;
flex-direction: column;
align-items: center;

p{
    font-family: Arial;
    font-size: 20px;
    margin-top: 20px;
}

img{
    margin: 50px;
    height: 300px;
}
`

const ListaPokedex = styled.main`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-around;
`

function PokedexPage () {
    const context = useContext(GlobalContext)

    const {pokedex} = context.states

    const renderizaPokedex = pokedex[0] ? pokedex.map((pokemon)=>{
        return (
            <CardPoke 
                key={pokemon.name}
                pokemon={pokemon}
                paginaAtual={"pokedex"}
            />     
        )
    }) : (
        <None>
            <p>Nenhum pokémon na sua pokedex :(</p>
            <img src={pokedexVazia} />
        </None>
    )

    return (
        <main>

            <Header 
                paginaAtual={"pokedex"}
            />
            <ListaPokedex>
                {renderizaPokedex}
            </ListaPokedex>
        </main>
    )
}

export default PokedexPage;