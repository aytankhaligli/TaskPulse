import { useDispatch, useSelector } from "react-redux";
import editIcon from "../assets/edit.svg";
import { updateTaskStatus } from "../redux/slices/TasksSlice";
import Select from "./Select";
import { useEffect, useState } from "react";

function ItemCard({ item }) {
  const [newStatus, setNewStatus] = useState(item.status);
  const [show, setShow] = useState(false);
  // Access all users
  const users = useSelector((state) => state.user);

  // Find  assigned Users
  const assignedUsers =
    item.assignedTo &&
    users.filter((user) =>
      item.assignedTo.some((assignment) => assignment.id === user.id)
    );

  const dispatch = useDispatch();

  //  Change Task Status
  useEffect(() => {
    const taskId = item.id;
    dispatch(updateTaskStatus(taskId, newStatus));
  }, [newStatus]);

  // Edit task
  const handleClick = () => {
    setShow(true);
  };
  return (
    <li className="relative p-3 bg-white text-gray-800 rounded-md text-lg flex items-center justify-between shadow-md">
      <div className="">
        {item.title ? (
          item.title
        ) : (
          <div className="flex gap-2">
            <p> {item.username}</p>
            {item.surname && <p>{item.surname}</p>}
          </div>
        )}
        {item.title && (
          <div>
            <p className="text-xs text-gray-400">{item.description}</p>
            <p className="text-xs text-gray-600 absolute -top-2 -right-2 bg-white px-1 py-1 inline-block rounded-md shadow-md">
              {item.deadline}
            </p>
          </div>
        )}
      </div>
      {item.title && assignedUsers && (
        <div className="flex gap-1 items-center ">
          {assignedUsers.map((assignUser) => (
            <div
              key={assignUser.id}
              className="w-9 h-9 rounded-full bg-cyan-800  text-white flex items-center justify-center"
            >
              {`${assignUser.name.slice(0, 1)}${assignUser.surname.slice(
                0,
                1
              )}`}
            </div>
          ))}
          {show ? (
            <div className="">
              <Select
                options={[
                  {
                    id: 1,
                    name: "To Do",
                  },
                  {
                    id: 2,
                    name: "In Progress",
                  },
                  {
                    id: 3,
                    name: "Done",
                  },
                ]}
                onChange={(e) => setNewStatus(e.target.value)}
                value={newStatus}
              />
            </div>
          ) : (
            <div onClick={handleClick} className="cursor-pointer">
              <img src={editIcon} alt="" className="w-6" />
            </div>
          )}
        </div>
      )}
    </li>
  );
}

export default ItemCard;
