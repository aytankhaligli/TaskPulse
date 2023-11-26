import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";

function Card({ list, title, children }) {
  return (
    <div className="bg-gray-200 w-[300px] h-auto flex flex-col rounded-md shadow-md ">
      <div className="px-8 py-6 border-b border-gray-800">
        <h1 className="text-gray-800 text-lg">{title}</h1>
      </div>
      <div className="h-auto overflow-scroll">
        <ul className="flex flex-col px-4 py-8 gap-4">
          {list.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </ul>
      </div>
      {children}
      {title !== "Users" && (
        <Link
          to="/createtask"
          className="text-gray-800 text-lg px-8 py-6 border-t border-gray-800 hover:bg-gray-100"
        >
          Create Task
        </Link>
      )}
    </div>
  );
}

export default Card;
