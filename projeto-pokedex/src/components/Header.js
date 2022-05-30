import { useNavigate } from "react-router-dom"
import { goToPokedexPage, goToPokeListPage, goToPreviousPage } from "../routes/coordinator"

export function Header(props){
    const navigate = useNavigate()

    const renderizaHeader = ()=>{
        
        switch(props.paginaAtual){
            case "pokelista":
                return (
                    <section>
                        <h1>Pokemons</h1>
                        <button onClick={()=> goToPokedexPage(navigate)}>Ir para pokedex</button>
                    </section>
                );
            case "pokedex":
                return (
                    <section>
                        <h1>Pokedex</h1>
                        <button onClick={()=> goToPokeListPage(navigate)}>Ir para lista de Pokemons</button>
                    </section>
                )
            case "detalhesPokemons":
                return (
                    <section>
                        <h1>Detalhes</h1>
                        <button onClick={()=> goToPreviousPage(navigate)}>Voltar</button>
                    </section>
                )
        }
    }

    return(
        <main>
            {renderizaHeader()}
        </main>
    )
}