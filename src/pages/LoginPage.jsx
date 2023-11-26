import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/AuthSlice";
import Input from "../components/Input";
import Button from "../components/Button";
import Form from "../components/Form";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Store data
  const { isAuthenticated, errorText } = useSelector((state) => state.auth);

  // If authenticate navigate to Home
  useEffect(() => {
    isAuthenticated && navigate("/home");
  }, [dispatch, isAuthenticated, navigate]);

  // Login function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="w-full h-screen bg-[url('assets/signup-bg.jpg')] bg-cover flex items-center justify-center">
      <Form onSubmit={handleSubmit}>
        <h1 className="text-4xl mb-6 text-center text-gray-700">
          Task<span className="text-cyan-600">Pulse</span>
        </h1>
        <p className="mb-4 text-center opacity-40">
          Sign in your TaskPulse account
        </p>
        {errorText && (
          <p className="text-sm pb-2 text-red-700 text-center">{errorText}</p>
        )}
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
          minLength={6}
        />
        <Button text="Submit" style={{ border: "1px solid cyan" }} />
        <p className="text-center text-sm mt-6">
          Dont have an account{" "}
          <Link to="/signup" className="font-semibold underline">
            Register now
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default LoginPage;
