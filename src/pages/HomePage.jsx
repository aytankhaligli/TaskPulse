import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function HomePage() {
  const users = useSelector((state) => state.user);
  const currOrganization = useSelector(
    (state) => state.organization.currOrganization
  );

  console.log(currOrganization);

  return (
    <div>
      <p>{currOrganization.organizationName}</p>
      <Link to="/create">
        <button>Create User</button>
      </Link>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default HomePage;
