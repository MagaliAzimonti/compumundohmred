import CartContext from "../../context/CartContext";
import { useContext } from "react";
import {Link} from 'react-router-dom'
import './Cart.css'

const CartItemDetail = () => {
    const { cart, clearCart, removeItem, total } = useContext(CartContext)

    return (
        <>
            {cart.length === 0 ?
                (<>
                    < main>
                        <h1 className='text-light m-4 title-empty'>El carrito está vacío</h1>
                        <Link className="btn btn-light btn-empty" to='/'>Ver más productos</Link>
                    </main>
                </>) :
                (<>
                    <main>
                        <h1 className="CartTitle">Carrito</h1>
                        <div>
                            <div class="carrito-container ">
                                <div class="container">
                                    <hr />
                                    <div class="row row-col row-cols-md-2">
                                        <div class="col col-md-6">
                                            <div >
                                                <h6 className='text-light'>Producto</h6>
                                            </div>
                                        </div>
                                        <div class="col col-md-2">
                                            <div>
                                                <h6 className='text-light'>Precio</h6>
                                            </div>
                                        </div>
                                        <div class="col col-md-2">
                                            <div>
                                                <h6 className='text-light'>Cantidad</h6>
                                            </div>
                                        </div>
                                        <div class="col col-md-2">
                                            <div>
                                                <h6 className='text-light'>Total</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {cart.map((pr) => {
                                    return (
                                        <div key={pr.id}>
                                            <div className="row row-col row-cols-md-2">
                                                <div className="col col-md-6">
                                                    <div className="NameItemContainer d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                                                        <Link className="NameItem" to={`../ItemDetail/${pr.id}`}>
                                                            <p className="mb-0">{pr.name}</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col col-md-2">
                                                    <div className="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                                                        <p className="mb-0 text-light">${pr.price}</p>
                                                    </div>
                                                </div>
                                                <div className="col col-md-2">
                                                    <div className="d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                                                        <p className="mb-0 text-light">{pr.quantity}</p>
                                                    </div>
                                                </div>
                                                <div className="col col-md-2">
                                                    <div className="d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                                                        <p className="text-light">${pr.total}</p>
                                                    </div>
                                                </div>
                                                <div className="col-1 col-md-2">
                                                    <button className="btn btn-light mt-4 btn-eliminar" onClick={() => removeItem(pr.id)} id={pr.id}>Eliminar</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                <hr className="text-light" />
                                <div>
                                    <div className="text-light ">Total</div>
                                    <div className="text-light">${parseFloat(total)}</div>
                                </div>
                            </div>

                        </div>
                        {cart.length !== 0 && (
                            <div>
                                <button className="btn btn-light m-4 btn-vaciar" onClick={clearCart}>Vaciar carrito</button>
                                <Link to='/checkout' className="btn btn-light m-4 btn-pedir">Realizar pago</Link>
                            </div>
                        )}
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
                </>)
            }
        </>)

}

export default CartItemDetail