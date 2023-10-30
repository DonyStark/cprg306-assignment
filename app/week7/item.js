function Item({ name, quantity, category, onSelect }) {
  return (
    <li onClick={onSelect}>
      {`${name} (Qty: ${quantity}, Category: ${category})`}
    </li>
  );
}

export default Item;