import { useContext } from "react";
import { CardPoke } from "../components/CardPoke";
import { Header } from "../components/Header";
import { GlobalContext } from "../global/GlobalState";

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
        <p>Nenhum pokemon na sua pokedex :(</p>
    )

    return (
        <main>

            <Header 
                paginaAtual={"pokedex"}
            />

            <h1>Lista Pokedex</h1>
            {renderizaPokedex}
        
        </main>
    )
}

export default PokedexPage;