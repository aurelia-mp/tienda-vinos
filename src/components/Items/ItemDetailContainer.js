import { useState, useEffect } from "react"
import { productos } from "../../productos"
import { ItemDetail } from "./ItemDetail"


// Falta el loader (optativo)
export const ItemDetailContainer = ({onAdd}) =>{
    const [item, setItem] = useState({})

    useEffect(() =>{
        const buscarProducto = new Promise ((res, rej) => {
            setTimeout(()=>{
                const productoBuscado = productos.find((prod) => prod.id===2)
                res(productoBuscado)
            }, 2000)
        })
    
        buscarProducto
            .then((producto) => {
                setItem(producto)
            })
            .catch((error) => console.log(error))

    }, [])

    console.log(item)

    return(
        <div>
            <ItemDetail item={item} onAdd={onAdd}/>
        </div>

    )
}