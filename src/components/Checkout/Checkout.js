import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import './Checkout.css'
import { db } from "../../services/firebase"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const [cartLoading, setCartLoading] = useState(false)
    const [orderConfir, setOrderConfirm] = useState(false)
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
                    batch.update(doc.ref, { stock: dbStock - quantityCartProd })
                } else {
                    noStock.push({ id: doc.id, ...dataDoc })
                }
            })
            if (noStock.length === 0) {
                await batch.commit()

                const orderReference = collection(db, "orders")
                const newAddedOrder = await addDoc(orderReference, newOrder)
                console.log(`id de su pedido: ${newAddedOrder.id}`)
                clearCart()
                setOrderConfirm(true)
                setTimeout(() => {
                    navigate('/')
                }, 3500)
            } else {
                console.log('Hay productos que están fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setCartLoading(false)

        }
    }

    if (cartLoading) {
        return <main> <h1 className="confirm-text text-light mt-4">Generando orden...</h1> </main>
    }

    if (orderConfir) {
        return <main> <h1 className="confirm-text text-light mt-4">Su pedido fue enviado con éxito, nos comunicaremos a la brevedad</h1> </main>
    }



    return (
        <>
            <main>
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
                                    <button className="btn btn-success btn-confirmar" type="submit">Confirmar orden</button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <footer class="text-white pt-4 pb-4 mt-5">
                <div class="container text-center text-md-left">
                    <div class="row text-center text-md-left">
                        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h3 class="text-uppercase mb-4 font-weight-bold text-light">Compumundo</h3>
                            <p>En Compumundo HiperMegaRed podes comparar y encontrar los mejores productos de hardware para tu PC Gamer al mejor precio. Compumundo - Buscador de hardware para encontrar tu PC Gamer</p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h3 class="text-uppercase mb-4 font-weight-bold text-light">Soporte</h3>
                            <div class="mx-auto mt-3">
                                <a href="#" class="text-light">Preguntas frecuentes</a>
                            </div>
                            <div class="mx-auto mt-3">
                                <a href="pages/contact.html" class="text-light">Contacto</a>
                            </div>
                            <div class="mx-auto mt-3">
                                <a href="#" class="text-light">Política de privacidad</a>
                            </div>
                            <div class="mx-auto mt-3">
                                <a href="#" class="text-light">Términos y condiciones</a>
                            </div>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h3 class="text-uppercase mb-4 font-weight-bold text-light">NOSOTROS</h3>
                            <div class="mx-auto mt-3">
                                <a href="pages/about.html" class="text-light">¿Quiénes somos?</a>
                            </div>
                            <div class="mx-auto mt-3">
                                <a href="pages/location.html" class="text-light">¿Dónde estamos?</a>
                            </div>
                            <div class="mx-auto mt-3">
                                <a href="pages/login.html" class="text-light">Registrate</a>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h3 class="text-uppercase mb-4 font-weight-bold text-light">Contacto</h3>
                            <div class="mx-auto mt-3">
                                <i class="fas fa-home mr-3"></i>  Calle Falsa 123, Longchamps
                            </div>
                            <div class="mx-auto mt-3">
                                <i class="fas fa-envelope mr-3"></i>  consultas@compumundohmr.com
                            </div>
                            <div class="mx-auto mt-3">
                                <i class="fas fa-phone mr-3"></i>  4242-4242
                            </div>
                        </div>
                    </div>
                    <hr class="mb-4" />
                    <div class="row align-items-center">
                        <div class="col-md-7 col-lg-8">
                            <p>Copyright © 2022. Todos los derechos reservados.
                                <strong >
                                    <a href="#" class="text-light p-2">Compumundo HiperMegaRed</a>
                                </strong>
                            </p>
                        </div>
                        <div class="col-md-5 col-lg-4">
                            <div class="text-center text-md-right">
                                <ul class="list-unstyled list-inline">
                                    <li class="list-inline-item">
                                        <a href="https://www.facebook.com" class="btn-floating btn-sm text-light" target="_blank"><i class="fab fa-facebook"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="https://www.twitter.com" class="btn-floating btn-sm text-light" target="_blank"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="https://www.instagram.com/" class="btn-floating btn-sm text-light" target="_blank"><i class="fab fa-instagram"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="https://api.whatsapp.com/send?phone=1158897653" class="btn-floating btn-sm text-light" target="_blank"><i class="fab fa-whatsapp"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )


}

export default Checkout