import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"

import { db } from "../../services/firebase"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const [cartLoading, setCartLoading] = useState(false)
    const { cart, totalCart, clearCart } = useContext(CartContext)
    const navigate = useNavigate()
    const totalPrice = totalCart()
    
    const createNewOrder = async (e) => {
        e.preventDefault()
        setCartLoading(true)
        
        try {
            const newOrder = {
                buyer: {
                    name: e.target.inputName.value,
                    surname: e.target.inputSurname.value,
                    phone: e.target.inputPhone.value,
                    email: e.target.inputEmail.value,
                    adress: e.target.inputAdress.value

                    
                },
                items: cart,
                totalPrice,
                date: new Date()
                }

                
                const cartId = cart.map(prod => prod.id)
                const productsReference = collection(db, 'productos')
                const firestoreProducts = await getDocs(query(productsReference, where(documentId(), 'in', cartId)))
                const { docs } = firestoreProducts
                const noStock = []
                
                const batch = writeBatch(db)
                docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const dbStock = dataDoc.stock 
    
                    const cartNewProduct = cart.find(prod => prod.id === doc.id)
                    const quantityCartProd = cartNewProduct?.quantity

                    
    
                    if (dbStock >= quantityCartProd) {
                        batch.update(doc.ref, { stock: dbStock - quantityCartProd  })
                    } else {
                        noStock.push({id: doc.id, ...dataDoc})
                    }
                })
                if(noStock.length === 0) {
                    await batch.commit()
    
                    const orderReference = collection(db, "orders")
                    const newAddedOrder = await addDoc(orderReference, newOrder )
                    console.log(`El id de su orden es: ${newAddedOrder.id}`)
                    clearCart()
                    navigate('/')
                } else {
                    console.log('Hay productos que están fuera de stock')
                }
            } catch (error) {
                console.log(error)
            } finally {
                setCartLoading(false)
                
            }
        }

        if(cartLoading) {
            return <h1 className="text-light">Generando orden...</h1>
        }
        
        
        
            return (
                <>
                <div className="row">
                <div className="col-12">
                    <h1 className="text-light mt-4">Ingrese sus datos de envío</h1>
                    <form onSubmit={createNewOrder}>
                        <div className="card card-body m-4 bg-dark">
                            <div className="form-group">
                                <input type="text" name="inputName" className="form-control mb-3" placeholder="Ingrese su nombre"></input>
                                <input type="text" name="inputSurname" className="form-control mb-3" placeholder="Ingrese su apellido"></input>
                                <input type="number" name="inputPhone" className="form-control mb-3" placeholder="Ingrese su teléfono"></input>
                                <input type="text" name="inputEmail" className="form-control mb-3" placeholder="Ingrese su email"></input>
                                <input type="text" name="inputAdress" className="form-control mb-3" placeholder="Ingrese la dirección de entrega"></input>
                                <button className="btn btn-success" type="submit">Confirmar orden</button>
            
                            </div>
                        </div>
                    </form>
                    </div>
                    </div>
                </>
                ) 
        
   
}

export default Checkout