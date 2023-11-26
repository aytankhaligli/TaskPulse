function ItemCard({ item }) {
  console.log(item);
  return (
    <li className="p-3 bg-gray-200 text-gray-800 rounded-md text-lg">
      {item.username}
    </li>
  );
}

export default ItemCard;
