import React from 'react'
import Item from './Item'

const ItemList = ({items, onAdd}) => {
    return (
      <div className='itemList'>
          {items.map((item) => <Item item={item} key={item.id} onAdd={onAdd}/>)}
      </div>
    )
}

export default ItemList