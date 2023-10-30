"use client";
import { useState } from 'react';
import Item from './item';

function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];
  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
  }

  return (
    <div>
      <button 
        style={{backgroundColor: sortBy === "name" ? 'blue' : 'white'}}
        onClick={() => setSortBy("name")}>
        Sort by Name
      </button>
      <button 
        style={{backgroundColor: sortBy === "category" ? 'blue' : 'white'}}
        onClick={() => setSortBy("category")}>
        Sort by Category
      </button>
      <ul>
        {sortedItems.map(item => (
          <Item 
            key={item.id} 
            name={item.name} 
            quantity={item.quantity} 
            category={item.category} 
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
