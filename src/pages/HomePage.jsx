import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentOrganization } from "../redux/slices/OrganizationsSlice";
import { selectOrganizationTasks } from "../redux/slices/TasksSlice";
import { selectOrganizationUsers } from "../redux/slices/UsersSlice";
import { logout } from "../redux/slices/AuthSlice";
import Card from "../components/Card";

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

  // Logout functionality
  const dispatch = useDispatch();
  const onhandleClick = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      {currentUser && (
        <div className=" h-screen  p-10 bg-[url('./assets/home-bg.jpg')] bg-cover ">
          <div className="flex justify-between items-center  mb-6">
            <h1 className="text-2xl uppercase">
              {currOrganization.organizationName}
            </h1>
            <div className="flex gap-5 items-center">
              <div
                className="px-4 py-2 rounded-md bg-cyan-800 flex items-center justify-center text-white cursor-pointer"
                onClick={() => navigate("/profile")}
              >
                {currentUser.username}
              </div>
              <div
                className="bg-cyan-800 text-white px-3 py-2 rounded-md cursor-pointer "
                onClick={onhandleClick}
              >
                Log out
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Card list={organizationUsers} title="Users">
              {currentUser.isAdmin && (
                <Link
                  to="/create"
                  className="text-gray-800 text-lg px-8 py-6 border-t border-gray-800 hover:bg-gray-100"
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
