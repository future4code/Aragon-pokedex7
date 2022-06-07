import { useContext, useEffect } from "react";
import { CardPoke } from "../components/CardPoke";
import { Header } from "../components/Header";
import { GlobalContext } from "../global/GlobalState";
import styled from 'styled-components';

const ListaDePokemons = styled.main`
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
`

const OrdenaPagina = styled.main`
display: flex;
flex-direction: row;
justify-content: center;

button{
    background-color:#ffcc00;
	border-radius:8px;
	color:#2f68b2;
	font-family:Arial;
	font-size:12px;
	font-weight:bold;
	padding:5px 10px;
    margin: 2px;
}

span{
    font-family:Arial;
	font-size:15px;
	font-weight:bold;
    margin-top: 8px;
    margin-left: 10px;
    margin-right: 10px;
}
`

function PokeListPage() {

    const context = useContext(GlobalContext)

    const { pokeList , pokedex, pagina} = context.states;
    const { getPokeList } = context.getters;
    const {setPagina} = context.setters
    

    useEffect(() => {
        getPokeList()
    }, [])

    const trocarPagina = (sum) => {
        const proximaPagina = pagina + sum 

        setPagina(proximaPagina)
        getPokeList(proximaPagina)
    }


    const renderizaLista = pokeList[0] ? pokeList.filter((pokemon)=>{
        for (let listPoke of pokedex){
            if(listPoke.id === pokemon.id){
                return false
            };
        };

        return true
    })
    .map((pokemon) => {
        return (
            <CardPoke
                key={pokemon.id}
                pokemon={pokemon}
                paginaAtual={"pokelista"}
            />
        )
    }) : <p>Carregando...</p>

return (
    <main>
            <Header
                paginaAtual={"pokelista"}
            />
        <OrdenaPagina>
            {pagina !== 1 && 
                <button onClick={()=> trocarPagina(-1)}>Voltar página</button>
            }

            <span>Página {pagina}</span>

            {pokeList.length && 
                <button onClick={()=> trocarPagina(1)}>Próxima página</button>
            }
        </OrdenaPagina>
        <ListaDePokemons>
            {renderizaLista}
        </ListaDePokemons>
    </main>
)
}

export default PokeListPage;