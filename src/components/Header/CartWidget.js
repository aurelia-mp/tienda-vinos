import React from 'react'

const CartWidget = ({counter}) => {
  return (
    <div className='cart'>
        <span className="material-symbols-outlined">shopping_cart</span>
        <p>{counter}</p>
    </div>
  )
}

export default CartWidget