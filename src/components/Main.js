import React from 'react'
import ItemListContainer from './Items/ItemListContainer'
import { ItemDetailContainer } from './Items/ItemDetailContainer'
import Cart from './Cart'
import {Routes, Route} from 'react-router-dom'

const Main = ({onAdd}) => {
  return (
    <Routes>
      <Route path='/' element={<ItemListContainer saludo='Bienvenido a Tienda de Vinos' />}/>
      <Route path='/item/:id' element={<ItemDetailContainer onAdd={onAdd} />}/>
      <Route path='/category/:id' element={<ItemListContainer/>} />
      <Route path='/cart' element={<Cart/>} />    
    </Routes>
  )
}

export default Main