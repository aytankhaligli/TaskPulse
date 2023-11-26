import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentOrganization } from "../redux/slices/OrganizationsSlice";
import { selectOrganizationTasks } from "../redux/slices/TasksSlice";
import { selectOrganizationUsers } from "../redux/slices/UsersSlice";
import Card from "../components/Card";
import { useEffect } from "react";

function HomePage() {
  // access store data
  const users = useSelector((state) => state.user);
  const organizations = useSelector((state) => state.organization);
  const tasks = useSelector((state) => state.task);
  const currentUser = useSelector((state) => state.auth.currentUser);

  // For navigation
  const navigate = useNavigate();

  //When there isn't current user go to welcoming page
  useEffect(() => {
    if (!currentUser) navigate("/");
  }, [currentUser, navigate]);

  // Current organization and organization users and tasks
  const currOrganization =
    currentUser &&
    selectCurrentOrganization(organizations, currentUser.organizationId);
  const organizationTasks =
    currentUser && selectOrganizationTasks(tasks, currentUser.organizationId);
  const organizationUsers =
    currentUser && selectOrganizationUsers(users, currentUser.organizationId);

  // Tasks types : todo, inProgress,done
  const todoTasks = organizationTasks.filter((task) => task.status === "To Do");
  const inProgressTasks = organizationTasks.filter(
    (task) => task.status === "In Progress"
  );
  const finishedTasks = organizationTasks.filter(
    (task) => task.status === "Done"
  );

  return (
    <>
      {currentUser && (
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
      )}
    </>
  );
}

export default HomePage;
