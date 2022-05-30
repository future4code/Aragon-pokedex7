import { useNavigate } from "react-router-dom"
import { goToPokeDetailsPage, goToPokedexPage, goToPokeListPage, goToPreviousPage } from "../routes/coordinator"

export function Header(props){
    const navigate = useNavigate()

    const renderizaHeader = ()=>{
        switch(props.paginaAtual){
            case "pokelista":
                return (
                    <div>
                        <h1>Pokemons</h1>
                        <button onClick={()=> goToPokedexPage(navigate)}>Ir para pokedex</button>
                    </div>
                );
            case "pokedex":
                return (
                    <div>
                        <h1>Pokedex</h1>
                        <button onClick={()=> goToPokeListPage(navigate)}>Ir para lista de Pokemons</button>
                    </div>
                )
            case "detalhesPokemons":
                return (
                    <div>
                        <h1>Detalhes</h1>
                        <button onClick={()=> goToPreviousPage(navigate)}>Voltar</button>
                    </div>
                )
        }
    }

    return(
        <div>
            {renderizaHeader()}
        </div>
    )
}