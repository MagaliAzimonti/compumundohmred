import { useEffect, useState } from "react";


const ItemCount = ({stock=0, initial =1, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    useEffect(() => {
        setQuantity(initial)
    }, [initial])

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div>
            <h1 className='text-light'>{quantity}</h1>
            <button onClick={decrement} className='btn btn-danger m-2 mb-4'>-</button>
            <button onClick={increment} className='btn btn-success m-2 mb-4'>+</button>
            <button onClick={() => onAdd(quantity)} className='btn btn-light m-2 mb-4'>Añadir al carrito</button>
        </div>
    )
}
export default ItemCount