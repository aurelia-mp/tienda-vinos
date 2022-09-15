import { useState, useEffect } from "react"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"
import {getDoc, doc, collection} from 'firebase/firestore'
import { db } from "../../firebaseConfig"

export const ItemDetailContainer = () =>{
    const {id} = useParams()

    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
        const itemCollection = collection(db, 'productos')
        const prod = doc(itemCollection, id)
        
        getDoc(prod)
        .then((res)=>{
            setItem({
                id: id,
                ...res.data()
            }
            )
            setIsLoading(false)
        })
        .catch((error) => console.log(error))
    
        setIsLoading(true)

    }, [id])

    return(
        <>
            {isLoading ? 
                <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                :
                <ItemDetail item={item}/> 
            }
        </>
    )
}
