import { useSelector } from "react-redux";

function ItemCard({ item }) {
  console.log(item);
  // Access all users
  const users = useSelector((state) => state.user);

  // Find  assigned Users
  const assignUser =
    item.assignedTo &&
    users.find((user) => item.assignedTo.filter((ass) => ass.id === user.id));

  return (
    <li className="p-3 bg-white text-gray-800 rounded-md text-lg flex justify-between items-center shadow-md">
      {item.title ? item.title : item.name}
      {item.title && assignUser && (
        <div>
          <div className="w-10 h-10 rounded-full bg-cyan-800 flex items-center justify-center text-white">
            {assignUser.name.slice(0, 1) + assignUser.surname.slice(0, 1)}
          </div>
        </div>
      )}
    </li>
  );
}

export default ItemCard;
