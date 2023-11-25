import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../redux/slices/TasksSlice";
import { useNavigate } from "react-router-dom";
import { selectCurrentOrganization } from "../redux/slices/OrganizationsSlice";

function CreateTaskPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("");

  const tasks = useSelector((state) => state.task);
  const organizations = useSelector((state) => state.organization);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currOrganization = selectCurrentOrganization(
    organizations,
    currentUser.organizationId
  );
  console.log(currOrganization);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createTask({
        id: tasks[tasks.length - 1].id + 1,
        organizationId: currOrganization.id,
        title,
        description,
        deadline,
        status,
      })
    );
    navigate("/home");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Deadline</label>
        <input
          placeholder="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <div>
        <label>Status</label>
        <input
          placeholder="done"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default CreateTaskPage;
