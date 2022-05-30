import { useNavigate } from "react-router-dom";
import { goToPokeDetailsPage } from "../routes/coordinator";


export function CardPoke(props) {
    const navigate = useNavigate()

    return (
        <main>
            <p>nº: {props.pokemon.id}</p>
            <p>{props.pokemon.name.toUpperCase()}</p>

            <button>Adicionar a Pokedex</button>
            <button onClick={()=> goToPokeDetailsPage(navigate, props.pokemon.name)}>Ver detalhes</button>

            <hr />
        </main>
    )
}