import { useContext, useState, useEffect } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

export const ItemDetail = ({item}) => { 
    const [cantidad, setCantidad] = useState(0)
    const {addItem, clearCart, removeItem} = useContext(CartContext)

    const onAdd = (item, cantidad) =>{
        alert(`${cantidad} agregados al carrito`)
        setCantidad(cantidad)
        addItem(item, cantidad)
    }

    const onRemove= () =>{
        console.log("eliminado")
        setCantidad(0)
        removeItem(item.id)
    }

    const onEmpty = () => {
        console.log('Carrito vaciado')
        setCantidad(0)
        clearCart()
    }
      
    return(   
        <>
            {item.id &&     
                <div className="itemDetailContainer">
                    <div>
                        <img src={`/${item.img}`} alt={item.description}/>
                    </div>
                    <div className="itemDetailCart">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p className="itemPrice">AR${item.price}</p>
                        <p>Stock: {item.stock > 0 ? item.stock : "agotado"}</p>
                        { cantidad === 0 ?
                            <>
                                <ItemCount stock={item.stock} initial='0' onAdd={onAdd} item={item} clearCart={clearCart}/>
                                
                            </>
                            :
                            <>
                                <p>{cantidad} unidad(es) en tu carrito</p>
                                <Link to="/cart">Ir al carrito</Link>
                                <button onClick={() => onRemove()} className="botonDanger">Eliminar este ítem del carrito</button>
                            </>
                          }

                          <button onClick={onEmpty} className="botonNegro"><span className="material-symbols-outlined" onClick={()=>removeItem(item.id)}>
delete</span>Vaciar Carrito</button>
                    </div>                
                </div>
            }
        </>
    )
}