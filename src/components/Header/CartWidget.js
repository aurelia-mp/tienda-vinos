import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
  const {totalItems} = useContext(CartContext)

  return (
    <div className='cart'>
      <span className="material-symbols-outlined">shopping_cart</span>
      {totalItems > 0 && 
        <p>{totalItems}</p>
      }
    </div>
  )
}

export default CartWidget