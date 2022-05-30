import { useParams } from "react-router-dom";
import { Header } from "../components/Header";

export function PokeDetails () {

    const params = useParams()

    return (
        <main>

            <Header
                paginaAtual = {"detalhesPokemons"}
            />

            <hr/>
            
            <h1>PokeInfos</h1>
            <p>Nome: {params.pokeName}</p>
        
        </main>
    )
}