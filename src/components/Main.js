import React from 'react'
import ItemListContainer from './Items/ItemListContainer'
import { ItemDetailContainer } from './Items/ItemDetailContainer'
import Cart from './Cart/Cart'
import {Routes, Route} from 'react-router-dom'
import Form from './Cart/Form'

const Main = ({onAdd}) => {
  return (
    <Routes>
      <Route path='/' element={<ItemListContainer saludo='Todos nuestros productos' />}/>
      <Route path='/item/:id' element={<ItemDetailContainer onAdd={onAdd} />}/>
      <Route path='/category/:id' element={<ItemListContainer />} />
      <Route path='/cart' element={<Cart/>} />    
      <Route path='/confirmacion' element={<Form />}/>
    </Routes>
  )
}

export default Main