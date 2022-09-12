import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div className="itemCard">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>{item.precio}</p>
        <img src={`/${item.img}`} alt={item.title}/>
        <p>Stock: {item.stock}</p>
        <Link to={`/item/${item.id}`}><button className="botonNegro">Ver detalles</button></Link>
        <Link to={`/category/${item.category}`}><p className="tags">Categoría: {item.category}</p></Link>
    </div>         
  )
}

export default Item