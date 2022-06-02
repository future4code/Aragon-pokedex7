import { useContext, useEffect } from "react";
import { CardPoke } from "../components/CardPoke";
import { Header } from "../components/Header";
import { GlobalContext } from "../global/GlobalState";

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

        <hr/>
        <h1>Pagina lista de pokemons</h1>
        
        {pagina !== 1 && 
            <button onClick={()=> trocarPagina(-1)}>Voltar página</button>
        }

        <span>Página {pagina}</span>

        {pokeList.length && 
            <button onClick={()=> trocarPagina(1)}>Próxima página</button>
        }
        <hr/>

        {renderizaLista}
    </main>
)
}

export default PokeListPage;