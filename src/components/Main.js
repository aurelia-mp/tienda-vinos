import React from 'react'
import ItemListContainer from './Items/ItemListContainer'
import { ItemDetailContainer } from './Items/ItemDetailContainer'
import {Routes, Route} from 'react-router-dom'

const Main = ({onAdd}) => {
  return (
    <Routes>
      <Route path='/' element={<ItemListContainer saludo='Bienvenido a Tienda de Vinos. Sitio en construcción' />}/>
      <Route path='/item/:id' element={<ItemDetailContainer onAdd={onAdd} />}/>
      <Route path='/category/:id' element={<ItemListContainer/>} />
    </Routes>
  )
}

export default Main