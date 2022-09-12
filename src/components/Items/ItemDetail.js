import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

export const ItemDetail = ({item}) => { 
    const [cantidad, setCantidad] = useState(0)
    const {addItem, removeItem, contarCantidad} = useContext(CartContext)

    let cantidadInicial = contarCantidad(item.id)

    const onAdd = (item, cantidad) =>{
        setCantidad(cantidad)
        addItem(item, cantidad)
    }

    const onRemove= () =>{
        setCantidad(0)
        cantidadInicial = 0
        removeItem(item.id)
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
                        <ItemCount stock={item.stock} initial={cantidadInicial} onAdd={onAdd} item={item}/>
                        { cantidad !== 0 && 
                            <>
                                <p>{cantidad} unidad(es) en tu carrito</p>
                                <div className="itemCardBotones">
                                    <button className="botonNegro"><Link to="/cart">Terminar mi compra</Link></button>
                                    <button onClick={() => onRemove()} className="botonDanger">Eliminar del carrito</button>
                                </div>
                            </>
                          }
                    </div>                
                </div>
            }
        </>
    )
}
                         
