import React from 'react'

const Item = ({item}) => {
  return (
    <div className="itemCard">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>{item.precio}</p>
        <img src={item.img} alt={item.title}/>
        <button className={item.stock === 0 ? "sinStock" : undefined}>Stock: {item.stock}</button>
        <p className="tags">Categoría: {item.category}</p>
    </div>         
  )
}

export default Item