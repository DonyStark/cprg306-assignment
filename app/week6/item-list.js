"use client";
import { useState } from 'react';
import itemsData from './items.json';
import Item from './item';

function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...itemsData];
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
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;