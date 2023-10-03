function Item({ name, quantity, category }) {
    return (
      <li className="bg-gray-200 p-2 rounded-md mb-2">
        <strong>{name}</strong> (Qty: {quantity}) - Category: {category}
      </li>
    );
  }
  
  export default Item;