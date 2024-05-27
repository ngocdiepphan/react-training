const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(products => //map iterates over each element in the products array and returns a li element for each product.
    <li
    key={products.id} //key is a required property so React can keep track of list elements effectively
      style={{
        color: products.isFruit ? 'red': 'green'
      }} //If isFruit is true, the color will be 'red'; if false, the color will be 'green'.
      >
      {products.title}
    </li>
  );
  return (
    <>
      <h2 className="item">3. Rendering list</h2>
      <ul>{listItems}</ul>
    </>
  );
}

export { ShoppingList }
