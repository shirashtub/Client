import { useEffect, useState } from "react";
import axios from 'axios'

const UseGet = () => {
    const [result, setResult] = useState([])
    useEffect(()=>{
        get()
    },[])
    const get = async (url) => {
        try {
            const response = await axios.get(url)
            setResult(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return [get, result]
}

export default UseGet