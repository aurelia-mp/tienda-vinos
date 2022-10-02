import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    
    const isInCart = (itemId) => {
        if (cart.find((elt) => elt.id===itemId)){
            return true
        }
        else{
            return false
        }
    } 

    const addItem = (item, cantidad) => {     
        if(isInCart(item.id)) {
            let newCart = [...cart]
            let index = newCart.findIndex((elt) => elt.id === item.id)
            newCart[index].cantidad = cantidad
            setCart(newCart)
        }
        else{
            let nuevoItem = {...item, cantidad}
            setCart([...cart, nuevoItem]) 
        }
    }

    const clearCart = () =>{
        setCart([])
    } 

    const removeItem = (itemId) => {
        if(isInCart(itemId)){
            alert("Articulo eliminado")
            setCart(cart.filter((elt) => elt.id !== itemId))
        }
        else{
            alert("No tenías ninguna unidad de este vino en tu carrito")
        }
    }

    const contarCantidad = (id) => {
        const producto = cart.find((prod) => prod.id === id)
        return producto?.cantidad
    }

    const totalCarrito = cart.reduce((x, y) => x + y.price*y.cantidad, 0)

    const totalItems = cart.reduce((x, y) => x + y.cantidad, 0)

    return(
        <CartContext.Provider value = {{cart, addItem, clearCart, removeItem, contarCantidad, totalCarrito, totalItems}}>
            {children}
        </CartContext.Provider>
    )
}