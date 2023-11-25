import { getNewOrganization } from "../redux/slices/OrganizationsSlice";

function HomePage() {
  const currOrganization = getNewOrganization();
  console.log(currOrganization);
  return <div>HomePage</div>;
}

export default HomePage;
