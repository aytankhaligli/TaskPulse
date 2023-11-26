import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../redux/slices/TasksSlice";
import { useNavigate } from "react-router-dom";
import { selectCurrentOrganization } from "../redux/slices/OrganizationsSlice";
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import Form from "../components/Form";
import Select from "../components/Select";
import { selectOrganizationUsers } from "../redux/slices/UsersSlice";
import { MultiSelect } from "react-multi-select-component";

function CreateTaskPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("To Do");
  const [assignedUsers, setAssignedUsers] = useState([]);

  const tasks = useSelector((state) => state.task);
  const organizations = useSelector((state) => state.organization);
  const users = useSelector((state) => state.user);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currOrganization = selectCurrentOrganization(
    organizations,
    currentUser.organizationId
  );
  const organizationUsers = selectOrganizationUsers(
    users,
    currentUser.organizationId
  );

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
  const assignUserOptions = organizationUsers
    .filter((user) => user.name)
    .map((user) => ({
      label: user.name,
      value: user.id,
    }));
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createTask({
        id: tasks[tasks.length - 1].id + 1,
        organizationId: currOrganization.id,
        assignedTo: assignedUsers.map((user) => ({ id: user.value })),
        title,
        description,
        deadline,
        status,
      })
    );
    navigate("/home");
  };
  return (
    <div className="w-full h-screen bg-[url('./assets/login-bg.jpg')] bg-cover flex items-center justify-center">
      <Form>
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
        <Input
          value={deadline}
          placeholder="01-12-2023"
          onChange={(e) => setDeadline(e.target.value)}
        >
          <Label text="Deadline" />
        </Input>
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
        <Button
          text="Create"
          onClick={handleSubmit}
          style={{ border: "1px solid black" }}
        />
      </Form>
    </div>
  );
}

export default CreateTaskPage;
