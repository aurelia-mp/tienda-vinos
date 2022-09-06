import { useState, useEffect } from "react"
import { productos } from "../../productos"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () =>{
    const {id} = useParams()

    const [item, setItem] = useState({})

    useEffect(() =>{
        const buscarProducto = new Promise ((res, rej) => {
            setTimeout(()=>{
                const productoBuscado = productos.find((prod) => prod.id===Number(id))
                res(productoBuscado)
            }, 2000)
        })
    
        buscarProducto
            .then((producto) => {
                setItem(producto)
            })
            .catch((error) => console.log(error))

    }, [id])

    return(
            <ItemDetail item={item}/> 
    )
}