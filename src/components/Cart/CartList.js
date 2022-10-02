import React from 'react'
import { Link } from 'react-router-dom'

const CartList = ({items, removeItem, totalCarrito, isCart}) => {
  return (
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
        {items.map((item) => {
          return(
          <tr key={item.id}>
              <td><Link to={`/item/${item.id}`}><img src={`/${item.img}`} alt={item.title}/></Link></td>
              <td><Link to={`/item/${item.id}`}>{item.title}</Link></td>
              <td>{item.cantidad}</td>
              <td>{item.price}</td>
              <td>{`${item.price * item.cantidad}`}</td>
              {isCart && 
                <td><span className="material-symbols-outlined" onClick={()=>removeItem(item.id)}>
  delete</span></td>}       
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
  )
}

export default CartList