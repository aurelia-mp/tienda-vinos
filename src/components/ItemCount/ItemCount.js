import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter] = useState(0)

    const sumar = () => {
        counter<stock ? setCounter(counter + 1) : alert("Stock insuficiente. Beber con moderación")
    }

    const restar = () => {
        counter>initial && setCounter(counter - 1) 
    }

    // Se definen el nombre del articulo y su ID para generar dinámicamente el titúlo y foto
    const itemName = "Luigi Bosca Malbec";
    
  return (
    <div className="counterBlock">
        <h4>{itemName}</h4>
        <div className="counter">
          <button className="counterButton" onClick={restar}>-</button>
          <p>{counter}</p>
          <button className="counterButton" onClick={sumar}>+</button>
        </div>
        <button disabled={counter=== 0? true:false} onClick={() => onAdd(counter, itemName)}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount