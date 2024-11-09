import React from 'react';
import Item from './Item';

function ItemList({ items, removeItem }) {
  return (
    <div>
      <h2>List of Items:</h2>
      <ul>
        {items.map((item, index) => (
          <Item key={index} item={item} index={index} removeItem={removeItem} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
