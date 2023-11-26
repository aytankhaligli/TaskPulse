import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../redux/slices/TasksSlice";
import { selectCurrentOrganization } from "../redux/slices/OrganizationsSlice";
import { selectOrganizationUsers } from "../redux/slices/UsersSlice";
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import Form from "../components/Form";
import Select from "../components/Select";
import { MultiSelect } from "react-multi-select-component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateTaskPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [status, setStatus] = useState("To Do");
  const [assignedUsers, setAssignedUsers] = useState([]);
  console.log(deadline);
  // Store data
  const tasks = useSelector((state) => state.task);
  const organizations = useSelector((state) => state.organization);
  const users = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Current User,organization and users in this organization
  const currentUser = useSelector((state) => state.auth.currentUser);
  const currOrganization = selectCurrentOrganization(
    organizations,
    currentUser.organizationId
  );
  const organizationUsers = selectOrganizationUsers(
    users,
    currentUser.organizationId
  );

  // Format date
  const formattedDate = `${deadline.getDate()}-${deadline.getMonth()}-${deadline.getFullYear()} `;

  // Options for Select tag options for task status
  const options = [
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
  ];

  // Assig user to the task
  const assignUserOptions = organizationUsers
    .filter((user) => user.name)
    .map((user) => ({
      label: user.name,
      value: user.id,
    }));

  // Create Task function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createTask({
        id: tasks[tasks.length - 1].id + 1,
        organizationId: currOrganization.id,
        assignedTo: assignedUsers.map((user) => ({ id: user.value })),
        title,
        description,
        deadline: formattedDate,
        status,
      })
    );
    navigate("/home");
  };

  return (
    <div className="w-full h-auto bg-[url('./assets/signup-bg.jpg')] bg-cover flex items-center justify-center">
      <Form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-semibold text-gray-700  mb-10 text-center">
          New<span className="text-cyan-600">Task</span>
        </h1>
        <Input
          value={title}
          placeholder="Fix bugs"
          onChange={(e) => setTitle(e.target.value)}
        >
          <Label text="Title" />
        </Input>
        <Input
          value={description}
          placeholder="Login page doesn't work correctly"
          onChange={(e) => setDescription(e.target.value)}
        >
          <Label text="Description" />
        </Input>
        <div className="">
          <Label text="Deadline" />
          <div className="mb-4 mt-3 px-2 py-[6px] border-2 cursor-text text-sm  rounded-[3px] ">
            <DatePicker
              showicon
              selected={deadline}
              onChange={(date) => setDeadline(date)}
            />
          </div>
        </div>
        <div>
          <Label text="Status" />
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            options={options}
          />
        </div>
        <div>
          <Label text="Assign user" />
          <div className="mb-4 mt-3">
            <MultiSelect
              value={assignedUsers}
              onChange={setAssignedUsers}
              options={assignUserOptions}
              hasSelectAll={false}
            />
          </div>
        </div>
        <Button text="Create" style={{ border: "1px solid black" }} />
      </Form>
    </div>
  );
}

export default CreateTaskPage;
