import React, { useState, useEffect } from 'react'
import estilos from './items.module.css'
import { productos } from '../../../productos';
import ItemList from './ItemList';

const ItemListContainer = ({saludo, onAdd}) => {
  const[items, setItems] = useState([]);

  useEffect(()=>{
    const cargarProductos = new Promise ((resolve, reject) => {
      setTimeout(resolve(productos), 2000);
    })

    cargarProductos
      .then((datos) => {
        setItems(datos);
      })
      .catch(error => console.log("Error al cargar los productos"))
  }, []);
  

  return (
    <div className={estilos.mainContainer}>
      <h1>{saludo}</h1>
      <ItemList items={items} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer