import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
  const {cart} = useContext(CartContext)
  let totalItems = cart.reduce((x, y) => x + y.cantidad, 0)

  return (
    <div className='cart'>
        <span className="material-symbols-outlined">shopping_cart</span>
        <p>{totalItems}</p>
    </div>
  )
}

export default CartWidget