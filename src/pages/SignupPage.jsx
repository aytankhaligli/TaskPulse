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
  const [errorText, setErrorText] = useState(null);

  const navigate = useNavigate();

  const organizations = useSelector((state) => state.organization);
  const users = useSelector((state) => state.user);
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log(isAuthenticated);
  // console.log(users);
  // console.log(organizations);

  const dispatch = useDispatch();

  useEffect(() => {
    isAuthenticated && navigate("/home");
  }, [dispatch, isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.removeItem("users");
    // localStorage.removeItem("organizations");

    if (
      !organizationName ||
      !phoneNumber ||
      !address ||
      !username ||
      !email ||
      !password
    ) {
      setErrorText("Please fill in all fields");
      return;
    } else if (password.length < 6) {
      setErrorText("Password has to be min 6 alphanumeric characters");
      return;
    } else {
      setErrorText(null);
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

      dispatch(
        createUser({
          id: users[users.length - 1].id + 1,
          organizationId: organizations.length - 1,
          name: "",
          surname: "",
          username,
          email,
          password,
          isAdmin: true,
        })
      );

      dispatch(
        signup({
          id: users[users.length - 1].id + 1,
          organizationId: organizations.length - 1,
          name: "",
          surname: "",
          username,
          email,
          password,
          isAdmin: true,
        })
      );
    }
  };

  return (
    <div className="w-full h-full  bg-[url('./assets/signup-bg.jpg')] bg-cover flex  items-center justify-center">
      <Form errorText={errorText}>
        <Input
          placeholder="Amazon"
          onChange={(e) => setOrganizationName(e.target.value)}
          value={organizationName}
        >
          <Label text="Organization Name" />
        </Input>
        <Input
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
        <Button
          text="Submit"
          onClick={handleSubmit}
          style={{ border: "1px solid black" }}
        />
        <p className="text-center text-sm mt-6">
          Aready have an account{" "}
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
