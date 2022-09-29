import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link} from 'react-router-dom'
import CartList from './CartList'

const Cart = () => {
  const {cart, clearCart, removeItem, totalCarrito} = useContext(CartContext)
  const isCart= true;
  
  return (
    <div className='cartContainer'> 
      <h2>Tu carrito</h2>
      <div>
        {cart.length !== 0 ?
            <>
              <CartList items={cart} removeItem={removeItem} totalCarrito={totalCarrito} isCart={isCart}/>
              <div className='vaciarCarrito'>
              <button className="btn botonDanger" onClick={clearCart}>Vaciar carrito</button>
              <Link to='../confirmacion' className='btn botonNegro'>Confirmar compra</Link>
              </div>
            </>
            :
            <div className='cartVacio'>
              <p>Tu carrito está vacío</p>
              <Link to="/" className='btn botonDanger'>Elegir Vinos</Link>
            </div>
        }
      </div>
      
      </div>
  )
}

export default Cart