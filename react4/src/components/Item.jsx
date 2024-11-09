import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete'; // Import the Material-UI Delete icon

function Item({ item, index, removeItem }) {
  return (
    <li>
      {item}
      <button
        onClick={() => removeItem(index)}
        style={{ marginLeft: '10px', border: 'none', background: 'none', cursor: 'pointer' }}
      >
        <DeleteIcon style={{ color: '#ff4d4d', fontSize: 20 }} />
      </button>
    </li>
  );
}

export default Item;
