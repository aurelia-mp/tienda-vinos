import { createContext } from "react";
import { useState } from "react";


export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    
    // estados
    const [cart, setCart] = useState([] )

    // funciones
    // Ver si un item está en el carrito
    const isInCart = (itemId) => {
        if (cart.find((elt) => elt.id===itemId)){
            return true
        }
        else{
            return false
        }
    } 

    // 1. AGREGAR UN ITEM AL CARRITO
    const addItem = (item, cantidad) => {
        
        if(isInCart(item.id)) {
            // Si el item está en el cart, actualizar cantidad
            let newCart = [...cart]
            let index = newCart.findIndex((elt) => elt.id === item.id)
            newCart[index].cantidad += cantidad
            setCart(newCart)
        }

        else{
            // Si el item no está en el cart, agregarlo
            let nuevoItem = {...item, cantidad}
            setCart([...cart, nuevoItem]) 
        }
    }

    // 2. REINICIAR EL CARRITO
    const clearCart = () =>{
        setCart([])
    } 

    // 3. ELIMINAR ITEM
    const removeItem = (itemId) => {
        if(isInCart(itemId)){
            alert("Articulo eliminado")
            setCart(cart.filter((elt) => elt.id !== itemId))
        }

        else{
            alert("No tenías ninguna unidad de este vino en tu carrito")
        }
    }

    console.log('Detalle del carrito', cart)

    return <CartContext.Provider value = {{cart, addItem, clearCart, removeItem}}>
        {children}
    </CartContext.Provider>
}