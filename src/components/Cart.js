import React from 'react'
import Form from './Form'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

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
                    <th>Total (AR$)</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => {
                    return(
                      <tr key={item.id}>
                        
                          <td><Link to={`/item/${item.id}`}><img src={`/${item.img}`} alt={item.title}/></Link></td>
                          <td><Link to={`/item/${item.id}`}>{item.title}</Link></td>
                          <td>{item.cantidad}</td>
                          <td>{item.price}</td>
                          <td>{`${item.price * item.cantidad}`}</td>
                          <td><span className="material-symbols-outlined" onClick={()=>removeItem(item.id)}>
  delete</span></td>      
                      </tr>
                    )   
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan = "4" id="total">Total</td>
                    <td colSpan = "1">{totalCarrito}</td>
                  </tr>
              </tfoot>
              </table>
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
      <Form />
    </div>
  )
}

export default Cart