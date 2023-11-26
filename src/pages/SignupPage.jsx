import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrganization } from "../redux/slices/OrganizationsSlice";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../redux/slices/UsersSlice";
import { signup } from "../redux/slices/AuthSlice";
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import Form from "../components/Form";

function SignupPage() {
  const [organizationName, setOrganizationName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  // Get data from store
  const organizations = useSelector((state) => state.organization);
  const users = useSelector((state) => state.user);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // Check if authenticate navigate to homepage
  useEffect(() => {
    isAuthenticated && navigate("/home");
  }, [dispatch, isAuthenticated, navigate]);

  // Form Submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check email is already registered
    if (users.some((user) => user.email === email)) {
      setError("This email address already registered");
      return;
    } else {
      setError(null);
    }

    // Create Organization
    dispatch(
      createOrganization({
        id: organizations[organizations.length - 1].id + 1,
        organizationName,
        phoneNumber,
        address,
        username,
        email,
        password,
      })
    );

    // Create User
    dispatch(
      createUser({
        id: users[users.length - 1].id + 1,
        organizationId: organizations[organizations.length - 1].id + 1,
        name: "",
        surname: "",
        username,
        email,
        password,
        isAdmin: true,
      })
    );

    // Sign up as a this user
    dispatch(
      signup({
        id: users[users.length - 1].id + 1,
        organizationId: organizations[organizations.length - 1].id + 1,
        name: "",
        surname: "",
        username,
        email,
        password,
        isAdmin: true,
      })
    );
  };

  return (
    <div className="w-full h-full  bg-[url('./assets/signup-bg.jpg')] bg-cover flex  items-center justify-center">
      <Form onSubmit={handleSubmit}>
        <h1 className="text-4xl mb-6 text-center text-gray-700">
          Task<span className="text-cyan-600">Pulse</span>
        </h1>
        <p className="mb-4 text-center opacity-40">
          Sign up and create free TaskPulse account
        </p>
        <Input
          placeholder="Amazon"
          onChange={(e) => setOrganizationName(e.target.value)}
          value={organizationName}
        >
          <Label text="Organization Name" />
        </Input>
        <Input
          type="phone"
          placeholder="+994778909870"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
        >
          <Label text="Phone Number" />
        </Input>
        <Input
          placeholder="123 Main St, Cityville"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        >
          <Label text="Address" />
        </Input>
        <Input
          placeholder="leyla"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        >
          <Label text="Username" />
        </Input>
        <Input
          type="email"
          placeholder="leyla@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          error={error}
        >
          <Label text="Email Address" />
        </Input>
        <Input
          type="password"
          placeholder="*********"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        >
          <Label text="Password" />
        </Input>
        <Button text="Submit" style={{ border: "1px solid cyan" }} />
        <p className="text-center text-sm mt-6">
          Already have an account
          <Link to="/login" className="font-semibold underline">
            {" "}
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default SignupPage;
