import React, {useState} from 'react'
import { useEffect } from 'react'

const ItemCount = ({stock, initial = 0, onAdd, item}) => {
    const [counter, setCounter] = useState(initial)
    
    useEffect(()=>{
      setCounter(initial)
    }, [initial])

    const sumar = () => {
        counter<stock ? setCounter(counter + 1) : alert("Stock insuficiente. Beber con moderación")
    }

    const restar = () => {
        counter>initial && setCounter(counter - 1) 
    }

  return (
    <div className="counterBlock">
        <div className="counter">
          <button className="btn counterButton" onClick={restar}>-</button>
          <p>{counter}</p>
          <button className="btn counterButton" onClick={sumar}>+</button>
        </div>
          {initial === 0 ? 
          <button className="btn botonNegro" disabled={counter=== 0? true:false} onClick={() => onAdd(item, counter)}>Agregar al Carrito</button>
          :
          <>
            <button className="btn botonNegro" onClick={() => onAdd(item, counter)}>Actualizar cantidad</button>          </>
        }
    </div>
  )
}

export default ItemCount