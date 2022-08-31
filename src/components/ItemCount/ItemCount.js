import React, {useState} from 'react'

const ItemCount = ({item, initial, onAdd}) => {
    const [counter, setCounter] = useState(0)

    const sumar = () => {
        counter<item.stock ? setCounter(counter + 1) : alert("Stock insuficiente. Beber con moderación")
    }

    const restar = () => {
        counter>initial && setCounter(counter - 1) 
    }
    const itemName=item.title

  return (
    <div className="counterBlock">
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