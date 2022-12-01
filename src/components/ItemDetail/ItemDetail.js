import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import NotificationContext from '../../Notificacion/Notification'


const ItemDetail = ({ id, name, description, img, stock, price }) => {
    const [addQuantity, setQuantity] = useState(0)
    const { addItem, productQuantity } = useContext(CartContext)
    const { NotificationResult } = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
        const addProduct = {
            id, name, price, quantity, total: (price * quantity)
        }
        if (quantity <= 0) {
            NotificationResult('danger', `Este producto no está disponible`)
        } else {
            addItem(addProduct)
            NotificationResult('success', `Se agregaron ${quantity} ${name}`)
        }

    }

    const prodQuantity = productQuantity(id)

    return (
        <>
            <main>
                <div className='container'>
                    <div className='row row-cols-1 row-cols-md-2'>
                        <div className='col'>
                            <img className="imageDetail mb-4" src={img} alt='detalle imagenes' />
                        </div>
                        <div className='col'>
                            <h1 className="titleDetail text-light">{name}</h1>
                            <p className="pDetail text-light">{description}</p>
                            <p className='text-light m-3'>${price}</p>
                            {
                                addQuantity === 0 ? (
                                    <ItemCount onAdd={handleOnAdd} stock={stock} initial={prodQuantity} />

                                ) : (
                                    <Link to='/Cart' className='btn btn-light m-4 btn-finish'>Finalizar compra</Link>
                                )
                            }
                        </div>

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

export default ItemDetail 