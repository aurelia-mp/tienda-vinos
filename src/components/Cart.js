import React from 'react'
import Form from './Form'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const {cart, clearCart, removeItem} = useContext(CartContext)

  // Cálculo del total del carrito
  const totalCarrito = cart.reduce((x, y) => x + y.price*y.cantidad, 0)
  
  return (
    <div className='cartContainer'> 
      <h2>Tu carrito</h2>
      <div>
        {cart.length !== 0 ?
          // RENDERIZADO CARRITO
            <>
              <table className='cartTable'>
                <thead>
                  <tr>
                    <th></th>
                    <th>Articulo</th>
                    <th>Cantidad</th>
                    <th>Precio unitario</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => {
                    return(
                      <tr key={item.id}>
                        <td><img src={`/${item.img}`} alt={item.title}/></td>
                        <td>{item.title}</td>
                        <td>{item.cantidad}</td>
                        <td>{item.price}</td>
                        <td>{`${item.price * item.cantidad}`}</td>
                        <td><span className="material-symbols-outlined" onClick={()=>removeItem(item.id)}>
delete</span></td>
                      </tr>
                    )   
                  })}
                </tbody>
              </table>
              <div className='totalCarrito'>
                <h3 >Total de tu compra: AR${totalCarrito}</h3>
                <button onClick={clearCart}>Vaciar carrito</button>
              </div>
            </>

            :

          // SIN ITEMS EN EL CARRITO
            <p>Tu carrito está vacío</p>
        }
      </div>
      <Form />
    </div>
  )
}

export default Cart