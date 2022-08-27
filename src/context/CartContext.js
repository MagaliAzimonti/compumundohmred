import { useState, createContext, useContext } from "react"
import NotificationContext from "../Notificacion/Notification"

const CartContext = createContext()


export const CartContextProvider = ({ children }) => {
  const {NotificationResult} = useContext(NotificationContext)
    const [cart, setCart] = useState([])

  const addItem = (addProduct) => {
    if(!prodInCart(addProduct.id)) {
        setCart([...cart, addProduct])
    } else {
        const updateCart = cart.map(prod => {
            if(prod.id === addProduct.id) {
                const updateProduct = {
                    ...prod,
                    quantity: addProduct.quantity,
                    total: addProduct.quantity*addProduct.price
                }
                return updateProduct
            } else {
                return prod
            }
        })

        setCart(updateCart)
    }
  } 

  const clearCart = () => {
    NotificationResult('warning', 'Se ha vaciado el carrito')
    setCart([])
  }

  const removeItem = (id) => {
    const prod =  cart.find(pr => pr.id === id)
    NotificationResult('warning', `Has eliminado ${prod.quantity} ${prod.name}`)
    const updateCart = cart.filter(prod => prod.id !== id)
    setCart(updateCart)
  }

  const prodInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

  const getCart = () => {
    let acc = 0

    cart.forEach(prod => {
      acc += prod.quantity
    })

    return acc
  }

  const productQuantity = (id) => {
    const producto =  cart.find(prod => prod.id === id)

    return producto?.quantity
  }

  const total = cart.reduce((acc, add) => {
    return acc + add.total
  }, 0)

  return (
    <CartContext.Provider value={{cart, addItem, getCart, prodInCart, removeItem, clearCart, productQuantity, total}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext