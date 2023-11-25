import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentOrganization } from "../redux/slices/OrganizationsSlice";
import { selectOrganizationTasks } from "../redux/slices/TasksSlice";
import { selectOrganizationUsers } from "../redux/slices/UsersSlice";

function HomePage() {
  const users = useSelector((state) => state.user);
  const organizations = useSelector((state) => state.organization);
  const tasks = useSelector((state) => state.task);
  const currentUser = useSelector((state) => state.auth.currentUser);

  // console.log(tasks);

  const currOrganization = selectCurrentOrganization(
    organizations,
    currentUser.organizationId
  );
  const organizationTasks = selectOrganizationTasks(
    tasks,
    currentUser.organizationId
  );
  const organizationUsers = selectOrganizationUsers(
    users,
    currentUser.organizationId
  );
  console.log(organizationUsers);
  return (
    <div>
      <p>{currOrganization.organizationName}</p>
      {currentUser.isAdmin && (
        <Link to="/create">
          <button>Create User</button>
        </Link>
      )}
      {organizationUsers.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
      <Link to="/createtask">
        <button>Create Task</button>
      </Link>
      <div>{organizationTasks.map((task) => task.title)}</div>
    </div>
  );
}

export default HomePage;
