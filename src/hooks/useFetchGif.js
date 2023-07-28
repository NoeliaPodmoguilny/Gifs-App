import { useEffect, useState} from "react";
import { getGif } from "../helpers/getGifs";

//un hooks no es más que una Fn!

export const useFetchGif = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => { 
        getGif(category)
            .then(newImages => setImages(newImages));
        setIsLoading(false)
    },[])

    return{
        images, //en ECMASc6 cuando existe una propiedad que apunta a una variable con mismo nombre, puede ir sólo el nombre
        isLoading,
    }

}
