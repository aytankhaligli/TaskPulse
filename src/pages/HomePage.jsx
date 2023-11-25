import { Link } from "react-router-dom";
import { getNewOrganization } from "../redux/slices/OrganizationsSlice";

function HomePage() {
  const currOrganization = getNewOrganization();
  console.log(currOrganization);
  return (
    <div>
      <p>{currOrganization.organizationName}</p>
      <Link to="/create">
        <button>Create User</button>
      </Link>
    </div>
  );
}

export default HomePage;
