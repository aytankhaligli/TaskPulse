import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentOrganization } from "../redux/slices/OrganizationsSlice";
import { selectOrganizationTasks } from "../redux/slices/TasksSlice";
import { selectOrganizationUsers } from "../redux/slices/UsersSlice";
import Button from "../components/Button";
import Card from "../components/Card";

function HomePage() {
  const users = useSelector((state) => state.user);
  const organizations = useSelector((state) => state.organization);
  const tasks = useSelector((state) => state.task);
  const currentUser = useSelector((state) => state.auth.currentUser);

  console.log(organizations);
  console.log(users);
  console.log(tasks);
  console.log(currentUser);
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
  const todoTasks = organizationTasks.filter((task) => task.status === "To Do");
  const inProgressTasks = organizationTasks.filter(
    (task) => task.status === "In Progress"
  );
  const finishedTasks = organizationTasks.filter(
    (task) => task.status === "Done"
  );

  return (
    <div className=" h-screen  p-10 bg-[url('./assets/home-bg.jpg')] bg-cover ">
      <h1 className="text-2xl uppercase mb-6">
        {currOrganization.organizationName}
      </h1>
      <div className="flex items-start gap-4">
        <Card list={organizationUsers} title="Users">
          {currentUser.isAdmin && (
            <Link
              to="/create"
              className="text-gray-800 text-lg px-8 py-6 border-t border-gray-800"
            >
              Create User
            </Link>
          )}
        </Card>
        <Card list={todoTasks} title="To do" />
        <Card list={inProgressTasks} title="In Progress" />
        <Card list={finishedTasks} title="Done" />
      </div>
    </div>
  );
}

export default HomePage;
