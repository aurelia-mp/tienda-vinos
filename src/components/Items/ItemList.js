import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
    return (
      <div className='itemList'>
          {items.map((item) => <Item item={item} key={item.id}/>)}
      </div>
    )
}

export default ItemList