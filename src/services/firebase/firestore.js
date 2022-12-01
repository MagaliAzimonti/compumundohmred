import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '.'

export const getProducts = (categoryId) => {
    const collectionReference = !categoryId
        ? collection(db, "productos")
        : query(collection(db, "productos"), where("category", "==", categoryId))

    return getDocs(collectionReference).then(response => {
        const productsAdjust = response.docs.map(doc => {
            const data = doc.data()
            return { id: doc.id, ...data }
        })
        return productsAdjust
    }).catch(error => {
        return error
    })
}