import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Label from "../components/Label";
import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import { updatePassword } from "../redux/slices/AuthSlice";
import { updateUserPassword } from "../redux/slices/UsersSlice";

function UserProfile() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [password, setPassword] = useState(currentUser.password);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Update password
  const handleSubmit = () => {
    dispatch(updatePassword(password));
    dispatch(updateUserPassword(currentUser.id, password));
    navigate("/home");
  };
  return (
    <div className="w-full h-screen bg-[url('./assets/login-bg.jpg')] bg-cover flex items-center justify-center">
      <Form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-semibold text-gray-700  mb-10 text-center">
          Your<span className="text-cyan-600"> Profile</span>
        </h1>
        {!currentUser.isAdmin && (
          <>
            {" "}
            <Input value={currentUser.name} readOnly={true}>
              <Label text="Name" />
            </Input>
            <Input value={currentUser.surname} readOnly={true}>
              <Label text="Surname" />
            </Input>
          </>
        )}

        <Input value={currentUser.email} readOnly={true}>
          <Label text="Email" />
        </Input>
        <Input
          type="text"
          value={password}
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
        >
          <Label text="Password" />
        </Input>
        <Button text="Update Profile" style={{ border: "1px solid cyan" }} />
      </Form>
    </div>
  );
}

export default UserProfile;
