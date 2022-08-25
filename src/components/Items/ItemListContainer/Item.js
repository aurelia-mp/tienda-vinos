import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'

const Item = ({item, onAdd}) => {
  return (
    <div className="itemCard">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>{item.precio}</p>
        <img src={item.img} alt={item.title}/>
        <button className={item.stock === 0 ? "sinStock" : undefined}>Stock: {item.stock}</button>
        <p className="tags">Categoría: {item.category}</p>
        <ItemCount stock={item.stock} initial='0' onAdd={onAdd} item={item}/>
    </div>         
  )
}

export default Item