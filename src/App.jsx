import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import { getNewOrganization } from "./redux/slices/OrganizationsSlice";

function App() {
  const currOrganization = getNewOrganization();
  console.log(currOrganization);
  return (
    <>
      <h1>TaskPulse</h1>
      {/* <div>
        <div>
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </div> */}
      {currOrganization ? <HomePage /> : <SignupPage />}
    </>
  );
}

export default App;
