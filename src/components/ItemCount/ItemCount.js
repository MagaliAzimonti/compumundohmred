import { useEffect, useState } from "react";
import './ItemCount.css'


const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    useEffect(() => {
        setQuantity(initial)
    }, [initial])

    const incrementCount = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrementCount = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div>
            <h1 className='count-title text-light'>Cantidad: {quantity}</h1>
            <p className="card-text text-light">{stock} disponibles</p>
            <button onClick={decrementCount} className='btn btn-light m-2 mb-4'>-</button>
            <button onClick={incrementCount} className='btn btn-light m-2 mb-4'>+</button>
            <button onClick={() => onAdd(quantity)} className='btn btn-light m-2 mb-4 btn-add'>Añadir al carrito</button>
        </div>
    )
}
export default ItemCount