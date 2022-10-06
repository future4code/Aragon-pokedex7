import { useNavigate } from "react-router-dom"
import { goToPokedexPage, goToPokeListPage, goToPreviousPage } from "../routes/coordinator"
import styled from 'styled-components';
import logo from '../img/logo.png';

const HeaderPoke = styled.section`
background-color: #2f67b2;
display: flex;
align-items: center;
justify-content: space-between;
height: 100px;
padding: 20px;

img{
    height: 120px;
}

button{
	background-color:#ffcc00;
	border-radius:8px;
	color:#2f68b2;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:13px 32px;
}
`

export function Header(props){
    
    const navigate = useNavigate()

    const renderizaHeader = ()=>{
        
        switch(props.paginaAtual){
            case "pokelista":
                return (
                    <HeaderPoke>
                        <h1><img src={logo} /></h1>
                        <button onClick={()=> goToPokedexPage(navigate)}>Minha Pokedex</button>
                    </HeaderPoke>
                ); 
            case "pokedex":
                return (
                    <HeaderPoke>
                        <h1><img src={logo} /></h1>
                        <button onClick={()=> goToPokeListPage(navigate)}>Lista de Pokemons</button>
                    </HeaderPoke>
                )
            case "detalhesPokemons":
                return (
                    <HeaderPoke>
                        <h1><img src={logo} /></h1>
                        <button onClick={()=> goToPreviousPage(navigate)}>Voltar</button>
                    </HeaderPoke>
                )
            case "paginaDeErro":
                return (
                    <HeaderPoke>
                        <h1><img src={logo} /></h1>
                        <button onClick={()=> goToPokeListPage(navigate)}>Ir para Página Inicial</button>
                    </HeaderPoke>
                )
        }
    }

    return(
        <main>
            {renderizaHeader()}
        </main>
    )
}