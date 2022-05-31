import axios from "axios";
import { createContext, useState } from "react";
import { BASE_URL } from "../constants/url";

export const GlobalContext = createContext()


export default function GlobalState(props) {

    const [pokeList, setPokeList] = useState([]);
    const [pokemonDetails, setPokemonDetails] = useState({})

    const getPokeList = () => {
        axios.get(`${BASE_URL}/list?limit=20&offset=0`)
            .then((res) => setPokeList(res.data))
            .catch((err) => console.log(err.message))
    }

    const getDetailsPoke = (pokeName)=>{
        axios.get(`${BASE_URL}/${pokeName}`)
            .then((res) => setPokemonDetails(res.data))
            .catch((err)=> console.log(err.message))
    }

    const states = {
        pokeList: pokeList,
        pokemonDetails: pokemonDetails,
    };

    const setters = {
        setPokeList: setPokeList,
        setPokemonDetails: setPokemonDetails,
    };

    const getters = {
        getPokeList: getPokeList,
        getDetailsPoke: getDetailsPoke,
    };

    const context = { states, setters, getters }


    return (
        <GlobalContext.Provider value={{states, setters, getters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}