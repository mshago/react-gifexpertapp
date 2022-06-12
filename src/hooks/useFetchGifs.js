import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {
    

    console.log('aaaaa',category)

    const [state, setState] = useState({
        data:[],
        loading: true,
    })

    useEffect(() => {

        getGifs(category)
            .then(x => setState({
                data: x,
                loading: false
            }))

    },[category])

    return state;
}