import React from 'react'

const Item = ({item}) => {
  return (
    <div className="itemCard">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>{item.precio}</p>
        <img src={item.img} alt={item.title}/>
        <button>Stock: {item.stock}</button>
    </div>         
  )
}

export default Item