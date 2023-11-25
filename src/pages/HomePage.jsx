import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findCurrentOrganization } from "../redux/slices/OrganizationsSlice";

function HomePage() {
  const users = useSelector((state) => state.user);
  const organizations = useSelector((state) => state.organization);
  const currentUser = useSelector((state) => state.auth.currentUser);

  console.log(currentUser);

  const currOrganization = findCurrentOrganization(
    organizations,
    currentUser.organizationId
  );
  console.log(currOrganization);
  return (
    <div>
      <p>{currOrganization.organizationName}</p>
      {currentUser.isAdmin && (
        <Link to="/create">
          <button>Create User</button>
        </Link>
      )}
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default HomePage;
