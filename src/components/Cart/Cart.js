import CartContext from "../../context/CartContext";
import { useContext } from "react";
import {Link} from 'react-router-dom'
import './Cart.css'

const CartItemDetail = () => {
    const { cart, clearCart, removeItem, total} = useContext(CartContext)

    return (
        <>
        {cart.length === 0 ?
        (<>
        <h1 className='cartAdv'>El carrito está vacío</h1>
        <Link className="btn btn-primary" to='/'>Ver más productos</Link>
        </>) :
                (<>
                    <h1 className="CartTitle">Carrito</h1>
                    <div>
                        <div class="carrito-container">
                            <div class="container">
                                <hr />
                                <div class="row">
                                    <div class="col-6">
                                        <div >
                                            <h6 className='text-light'>Producto</h6>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div>
                                            <h6 className='text-light'>Precio</h6>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div>
                                            <h6 className='text-light'>Cantidad</h6>
                                        </div>
                                    </div>
                                    <div class="col-2">
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
                                        <div className="row">
                                        <div className="col-6">
                                        <div className="NameItemContainer d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                                            <Link className="NameItem" to={`../ItemDetail/${pr.id}`}>
                                                <p className="mb-0">{pr.name}</p>
                                            </Link>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                        <div className="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                                            <p className="mb-0 text-light">${pr.price}</p>
                                        </div>
                                        </div>
                                        <div className="col-2">
                                        <div className="d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                                            <p className="mb-0 text-light">{pr.quantity}</p>
                                        </div>
                                        </div>
                                        <div className="col-2">
                                        <div className="d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                                            <p className="text-light">${pr.total}</p>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-light mt-4" onClick={() => removeItem(pr.id)} id={pr.id}>Eliminar</button>
                                        </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <hr className="text-light"/>
                            <div>
                                <div className="text-light ">Total</div>
                                <div className="text-light">${parseFloat(total)}</div>
                            </div>
                        </div>

                    </div>
                    {cart.length !== 0 && (
                        <div>
                            <button className="btn btn-light m-4"onClick={clearCart}>Vaciar carrito</button>
                            <button className="btn btn-light m-4">Realizar pago</button>
                        </div>
                    )}
                    </>)
                }            
        </>)    
    
    }

export default CartItemDetail