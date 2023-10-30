function Item({ name, quantity, category }) {
    return <li>{`${name} (Qty: ${quantity}, Category: ${category})`}</li>;
  }
  
  export default Item;