import { useContext, useState } from "react"
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
                            <ItemCount stock={item.stock} initial='0' onAdd={onAdd} item={item} clearCart={clearCart}/>
                            :
                            <>
                                <p>{cantidad} unidad(es) en tu carrito</p>
                                <Link to="/cart">Ir al carrito</Link>
                            </>
                          }
                          <button onClick={() => removeItem(item.id)} id="botonVaciar">Eliminar este ítem del carrito</button>
                          <button onClick={clearCart} id="botonVaciar">Vaciar Carrito</button>
                    </div>                
                </div>
            }
        </>
    )
}