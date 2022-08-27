import './ItemListContainer.css'
import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = ({mensaje}) => {
    const [productos, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionReference = !categoryId 
        ? collection(db, "productos")
        : query(collection(db, "productos"), where("category", "==", categoryId))

        getDocs(collectionReference).then(response => {
            const productsAdjust = response.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(productsAdjust)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if(loading) {
        return <h1 className='text-light mt-4'>Loading...</h1>
    }

    return (
        <>
        <h1 className='titleMensaje'>{mensaje}</h1>
        <ItemList productos={productos}/>
        </>
        
    )

}

export default ItemListContainer