import React, { useState, useEffect } from 'react'
import estilos from './items.module.css'
import { productos } from '../../productos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({saludo}) => {
  const[items, setItems] = useState([]);
  const {id} = useParams();
  
  useEffect(()=>{
    const cargarProductos = new Promise ((resolve, reject) => {
        const productoFiltrados = productos.filter((producto) => producto.category === id);
        setTimeout(() => {
          resolve(id? productoFiltrados : productos)
        }, 2000);
      })
  
      cargarProductos
        .then((datos) => {
          setItems(datos);
        })
        .catch(error => console.log("Error al cargar los productos"))
    
  }, [id]);

  return (
    <div className={estilos.mainContainer}>
      <h1>{saludo}</h1>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer