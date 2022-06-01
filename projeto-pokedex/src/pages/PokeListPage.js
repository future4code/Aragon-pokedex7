import { useContext, useEffect } from "react";
import { CardPoke } from "../components/CardPoke";
import { Header } from "../components/Header";
import { GlobalContext } from "../global/GlobalState";

function PokeListPage() {

    const context = useContext(GlobalContext)

    const { pokeList } = context.states;
    const { getPokeList } = context.getters;

    useEffect(() => {
        getPokeList()
    }, [])


    const renderizaLista = pokeList[0] ? pokeList.map((pokemon) => {
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

        <h1>Pagina lista de pokemons</h1>
        {renderizaLista}
    </main>
)
}

export default PokeListPage;