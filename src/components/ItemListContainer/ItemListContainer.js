import React from 'react'
import estilos from './items.module.css'

const ItemListContainer = (props) => {
  return (
    <div className={estilos.mainContainer}>
      <h1>{props.saludo}</h1>
    </div>
  )
}

export default ItemListContainer