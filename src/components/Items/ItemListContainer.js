import React, { useState, useEffect } from 'react'
import estilos from './items.module.css'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({saludo}) => {
  const[items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const {id} = useParams();
  
  useEffect(()=>{
    const itemCollection = collection(db, 'productos');

    // Si la URL incluye un ID de categoría, solo se renderizará esa categoría
    const productosARenderizar = () => {
      if (id){
        return query(itemCollection, where("category", "==", id))
      }
      else{
        return collection(db, 'productos');
      }
    }

    getDocs(productosARenderizar())
    .then((res)=>{
      const products = res.docs.map((prod) => {
        return{
          id: prod.id,
          ...prod.data(), 
        };
      
      });
          setItems(products)
          setIsLoading(false)
      })
      .catch(error => console.log("Error al cargar los productos"))

      setIsLoading(true)
  }, [id]);

  return (
    <div className={estilos.mainContainer}>
      <h1>{saludo}</h1>
      {isLoading ? 
        <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      :
        <ItemList items={items} />
      }
      
    </div>
  )
}

export default ItemListContainer



// getDocs con setTimeOut para probar el spinner
// getDocs(productosARenderizar())
//       .then((res)=>{
//         setTimeout(() => {
//           const products = res.docs.map((prod) => {
//             return{
//               id: prod.id,
//               ...prod.data(), 
//             };
          
//           });
//           setItems(products)
//           setIsLoading(false)
//         }, 2000)
        
//       })
//       .catch(error => console.log("Error al cargar los productos"))

