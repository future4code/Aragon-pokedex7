import { CardPoke } from "../components/CardPoke";
import { Header } from "../components/Header";
import { useRequestData } from "../hooks/useRequestData";

export function PokeListPage () {

    const [listaPokemons] = useRequestData(`/list?limit=20&offset=0`, [])

    const renderizaLista = listaPokemons?.map((pokemon)=>{
        return (
            <CardPoke 
                key={pokemon.id}
                pokemon={pokemon}
            />
        )
    })

    return (
        <main>
            <Header 
                paginaAtual ={"pokelista"}
            />

            <h1>Pagina lista de pokemons</h1>
            {renderizaLista}
        
        </main>
    )
}