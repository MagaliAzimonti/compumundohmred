import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db } from "../../services/firebase"

const ItemDetailContainer = () => {
    const [producto, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productoId } = useParams()

    useEffect(() => {
        getDoc(doc(db, "productos", productoId)).then(response => {
            const data = response.data()
            const productsAdjust = { id: response.id, ...data }
            setProduct(productsAdjust)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [productoId])

    if (loading) {
        return <h1 className='text-light mt-4'>Loading...</h1>
    }

    return (

        <div>
            <h1>Detalle</h1>
            <ItemDetail {...producto} />
        </div>

    )
}

export default ItemDetailContainer

