import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    isAuthenticated && navigate("/home");
  }, [dispatch, isAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.removeItem("users");
    dispatch(login({ email, password }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default LoginPage;
