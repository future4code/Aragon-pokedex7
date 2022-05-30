import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";


export const useRequestData = (path, inicialState) => {
    const [data, setData] = useState(inicialState);

    const getData = () => {
        axios.get(`${BASE_URL}${path}`)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    useEffect(() => {
        getData()
    },[path])

    return [data, getData]
}