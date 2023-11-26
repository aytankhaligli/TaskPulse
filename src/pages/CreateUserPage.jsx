import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/slices/UsersSlice";
import { selectCurrentOrganization } from "../redux/slices/OrganizationsSlice";
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import Form from "../components/Form";

function CreateUserPage() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("1234567");

  const navigate = useNavigate();

  // Access stored data
  const users = useSelector((state) => state.user);
  const organizations = useSelector((state) => state.organization);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  // Find current Organization
  const currOrganization = selectCurrentOrganization(
    organizations,
    currentUser.organizationId
  );

  // Create user function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createUser({
        id: users[users.length - 1].id + 1,
        organizationId: currOrganization.id,
        name,
        surname,
        username: name,
        email,
        password,
        isAdmin: false,
      })
    );
    navigate("/home");
  };

  return (
    <div className="w-full h-screen bg-[url('./assets/login-bg.jpg')] bg-cover flex items-center justify-center">
      <Form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-semibold text-gray-700  mb-10 text-center">
          New<span className="text-cyan-600">User</span>
        </h1>
        <Input
          value={name}
          placeholder="Anna"
          onChange={(e) => setName(e.target.value)}
        >
          <Label text="Name" />
        </Input>
        <Input
          value={surname}
          placeholder="Khaligova"
          onChange={(e) => setSurname(e.target.value)}
        >
          <Label text="Surname" />
        </Input>
        <Input
          type="email"
          value={email}
          placeholder="anna.kh@mail.ru"
          onChange={(e) => setEmail(e.target.value)}
        >
          <Label text="Email" />
        </Input>
        <Input
          type="password"
          value={password}
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        >
          <Label text="Password" />
        </Input>
        <Button text="Create User" style={{ border: "1px solid cyan" }} />
      </Form>
    </div>
  );
}

export default CreateUserPage;
