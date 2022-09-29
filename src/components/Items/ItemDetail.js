import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
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
                        <img src={`/${item.img}`} alt={item.title}/>
                    </div>
                    <div className="itemDetailCart">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p className="itemPrice">AR${item.price}</p>
                        <p>Stock: {item.stock > 0 ? item.stock : "agotado"}</p>
                        <ItemCount stock={item.stock} initial={cantidadInicial} onAdd={onAdd} item={item}/>
                        { cantidad !== 0 && 
                            <>
                                <p>{cantidad} unidad(es) en tu carrito
                                <span className="material-symbols-outlined" onClick={()=>onRemove()}>
              delete</span></p>
                                <div className="itemCardBotones">
                                    <Link to="/">Agregar más productos</Link>
                                    <button className="btn botonNegro"><Link to="/cart">Terminar mi compra</Link></button>
                                </div>
                            </>
                          }
                    </div>                
                </div>
            }
        </>
    )
}
                         
