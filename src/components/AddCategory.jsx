import { useState } from "react"

//usualmente definimos las fn con 'on' cuando se está emitiendo algo

export const AddCategory = ({onNewCategory}) => {

        const [inputValue, setInputValue] = useState('')

        const onInputChange = ({target}) => {
            setInputValue(target.value)
        }

        const onSubmit = (e) => {
            e.preventDefault();
            if (inputValue.trim().length < 1) return; //si no hay caracter no graba al presionar enter

            onNewCategory(
                inputValue.trim() &&
                inputValue.charAt(0).toUpperCase() +
                inputValue.slice(1).toLowerCase() 
            )
            setInputValue('')//queda el input vacio desp de presionar enter
        }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar Gifs" 
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
