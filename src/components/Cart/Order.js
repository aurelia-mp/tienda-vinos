import React from 'react'
import CartList from './CartList'

const Order = ({id, orden}) => {

  const isCart=false

  return (
    <div className='cartContainer'>
      <h1>Compra confirmada! </h1>
      <h2>A continuación, te mostramos los detalles de tu compra</h2>
      <p>Id de tu compra: {id}</p>
      <h4>Datos de contacto:</h4>
      <p>{orden.buyer.name} {orden.buyer.lastName}</p>
      <p>Tel: {orden.buyer.phone}</p>
      <p>Mail: {orden.buyer.email}</p>
      <h4>Items comprados</h4>
      <div>
        <CartList items={orden.items} totalCarrito={orden.total} isCart={isCart}/>
      </div>
      <h2>¡Muchas gracias por comprar en Tienda de Vinos!</h2>
    </div>
  )
}

export default Order