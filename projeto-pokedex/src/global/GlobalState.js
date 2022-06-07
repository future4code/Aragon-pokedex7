import axios from "axios";
import { createContext, useState } from "react";
import { BASE_URL } from "../constants/url";

export const GlobalContext = createContext()


export default function GlobalState(props) {

    const [pokeList, setPokeList] = useState([]);
    const [pokemonDetails, setPokemonDetails] = useState({});
    const [pokedex, setPokedex] = useState([]);
    const [pagina, setPagina] = useState(1)


    const getPokeList = async (pagina) => {
        try {
            const res = await axios.get(`${BASE_URL}/list?limit=20&offset=${20*(pagina -1)}`);
            const requests = res.data.map((pokemon) =>
                axios.get(`${BASE_URL}/${pokemon.name}`)
            );

            const response = await Promise.all(requests);
            const list = response.map((pokemon)=> pokemon.data);
            setPokeList(list)

        } catch (err) {
            console.log(err.message)
        }
    }


    const getDetailsPoke = (pokeName) => {
        axios.get(`${BASE_URL}/${pokeName}`)
            .then((res) => setPokemonDetails(res.data))
            .catch((err) => console.log(err.message))
    }

    const states = {
        pokeList: pokeList,
        pokemonDetails: pokemonDetails,
        pokedex: pokedex,
        pagina: pagina,
    };

    const setters = {
        setPokeList: setPokeList,
        setPokemonDetails: setPokemonDetails,
        setPokedex: setPokedex,
        setPagina: setPagina,
    };

    const getters = {
        getPokeList: getPokeList,
        getDetailsPoke: getDetailsPoke,
    };


    return (
        <GlobalContext.Provider value={{ states, setters, getters }}>
            {props.children}
        </GlobalContext.Provider>
    )
}