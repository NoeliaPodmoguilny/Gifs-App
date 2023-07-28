
import { useFetchGif } from "../hooks/useFetchGif";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {
    
    const {images, isLoading} = useFetchGif(category)


    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {images.map( (img) => (
                    <GifGridItem 
                        key={img.id}
                        {...img} //de esta manera puedo "esparcir" las propiedades de img en el GifGridItem    
                    />                    
                ))}
            </div>
        </>
    )
}
