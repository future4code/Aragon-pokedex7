import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../global/GlobalState";
import { goToPokeDetailsPage } from "../routes/coordinator";


export function CardPoke(props) {
    const navigate = useNavigate()
    const context = useContext(GlobalContext)

    const { pokedex } = context.states
    const { setPokedex } = context.setters

    const addPokemon = () => {
        const listPokedex = [...pokedex, props.pokemon];

        const pokedexOrdenada = listPokedex.sort((a, b) => {
            return a.id - b.id;
        });

        setPokedex(pokedexOrdenada);
    }

    const removerPokemon = () => {
        const listPokedex = pokedex.filter((pokemon)=>{
            return props.pokemon.id !== pokemon.id
        });

        setPokedex(listPokedex)
    }


    return (
        <main>
            <p>nº: {props.pokemon.id}</p>
            <img src={props.pokemon.images.front} alt="Imagem do pokemon de frente" />
            <p>{props.pokemon.name.toUpperCase()}</p>

            {props.paginaAtual === "pokelista" 
               ? <button onClick={addPokemon}>Adicionar a Pokedex</button>
               : <button onClick={removerPokemon}>Remover da pokedex</button>
            }
            <button onClick={() => goToPokeDetailsPage(navigate, props.pokemon.name)}>Ver detalhes</button>

            <hr />
        </main>
    )
}