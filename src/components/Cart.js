import React from 'react'
import Form from './Form'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link} from 'react-router-dom'
import Order from './Order'
import CartList from './CartList'

const Cart = () => {
  const {cart, clearCart, removeItem} = useContext(CartContext)
  const [orden, setOrden] = useState({})
  const [idCompra, setIdCompra] = useState('')
  const isCart= true;

  const confirmarCompra = (id, orden) => {
    setIdCompra(id)
    setOrden(orden)
    clearCart()
  }

  // Cálculo del total del carrito
  const totalCarrito = cart.reduce((x, y) => x + y.price*y.cantidad, 0)
  
  return (
    idCompra ?
       <Order id={idCompra} orden={orden}/>
    :
    <div className='cartContainer'> 
      <h2>Tu carrito</h2>
      <div>
        {cart.length !== 0 ?
          // RENDERIZADO CARRITO
            <>
              <CartList items={cart} removeItem={removeItem} totalCarrito={totalCarrito} isCart={isCart}/>
              <div className='vaciarCarrito'>
              <button className="botonDanger" onClick={clearCart}>Vaciar carrito</button>
              </div>
            </>

            :

          // SIN ITEMS EN EL CARRITO
            <div className='cartVacio'>
              <p>Tu carrito está vacío</p>
              <Link to="/" className='botonDanger'>Elegir Vinos</Link>
            </div>
        }
      </div>
      <h3>Para finalizar tu compra, por favor ingresá los datos a continuación:</h3>
      <Form cart={cart} totalCarrito={totalCarrito} confirmarCompra={confirmarCompra}/>
      </div>

    
  )
}

export default Cart