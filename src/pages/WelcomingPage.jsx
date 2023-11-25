import { Link } from "react-router-dom";

function WelcomingPage() {
  return (
    <div>
      <div>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default WelcomingPage;
