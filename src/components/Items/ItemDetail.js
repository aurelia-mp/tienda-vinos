import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

export const ItemDetail = ({item}) => { 
    const [cantidad, setCantidad] = useState(0)

    const onAdd = (cant) =>{
        alert(`${cant} agregados al carrito`)
        setCantidad(cant)
      }
      
    return(   
        <>
            {item.id &&     
                <div className="itemDetailContainer">
                    <div>
                        <img src={`/${item.img}`} alt={item.description}/>
                    </div>
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p className="itemPrice">AR${item.price}</p>
                        <p>Stock: {item.stock > 0 ? item.stock : "agotado"}</p>
                        { cantidad === 0 ?
                            <ItemCount stock={item.stock} initial='0' onAdd={onAdd}/>
                            :
                            <>
                                <p>{cantidad} unidad(es) en tu carrito</p>
                                <Link to="/cart">Ir al carrito</Link>
                            </>
                          }
                    </div>                
                </div>
            }
        </>
    )
}