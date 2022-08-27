import { useState } from "react";

const Counter = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)
    console.log (onAdd)
    
    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
        
    }

    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
        
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Eliminar</button>
            <button onClick={increment}>Agregar</button>
            <button onClick={() => onAdd(count)}>Añadir al carrito</button>
        </div>
    )
}

export default Counter