import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../global/GlobalState";
import { goToPokeDetailsPage } from "../routes/coordinator";
import styled from 'styled-components';

const Main = styled.main`
padding: 1%;
`

const Card = styled.div`
border-style: solid;
border-color: #2f68b2;
border-radius: 3%;
display: flex;
flex-direction: column;
padding: 1%;
width: 200px;
height: 300px;
background-image: url(https://pngimage.net/wp-content/uploads/2018/06/pokemon-background-png-5.png);


p{
    color: white;
    font-weight: bold;
    font-family: Arial;
    margin-left: 30px;
    margin-top: 10px;
}

button{
    background-color:#ffcc00;
	border-radius:8px;
	color:#2f68b2;
	font-family:Arial;
	font-size:12px;
	font-weight:bold;
	padding:5px 10px;
    margin: 3px;
}
`

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
        <Main>  
            <Card>
                <p>{props.pokemon.id} - {props.pokemon.name.toUpperCase()}</p>
                <img src={props.pokemon.images.front} alt="Imagem do pokemon de frente" />
                {props.paginaAtual === "pokelista" 
                ? <button onClick={addPokemon}>Adicionar a Pokedex</button>
                : <button onClick={removerPokemon}>Remover da Pokedex</button>
                }
                <button onClick={() => goToPokeDetailsPage(navigate, props.pokemon.name)}>Ver detalhes</button>
            </Card>
        </Main>
    )
}