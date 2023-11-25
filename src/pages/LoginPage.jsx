import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, errorText } = useSelector((state) => state.auth);

  useEffect(() => {
    isAuthenticated && navigate("/home");
  }, [dispatch, isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.removeItem("users");
    dispatch(login({ email, password }));
  };

  return (
    <div className="w-full h-screen bg-[url('assets/login-bg.jpg')] bg-cover flex items-center justify-center">
      <div
        className="flex flex-col my-0 mx-auto w-[400px] py-12 px-10 bg-white rounded-md shadow-xl  
    "
      >
        <h1 className="text-4xl mb-6 text-center">TaskPulse</h1>
        <p className="mb-6 text-center opacity-40">
          Sign in your TaskPulse account
        </p>
        {errorText && (
          <p className="text-sm py-2 text-red-700 text-center">{errorText}</p>
        )}
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            label="Email address"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            label="Password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={handleSubmit}
            text="Submit"
            style={{ border: "1px solid black" }}
          />
          <p className="text-center text-sm mt-6">
            Dont have an account{" "}
            <Link to="/signup" className="font-semibold underline">
              {" "}
              Register now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
