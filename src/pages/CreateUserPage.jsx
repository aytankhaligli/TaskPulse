import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/slices/UsersSlice";
import { useNavigate } from "react-router-dom";
import { selectCurrentOrganization } from "../redux/slices/OrganizationsSlice";

function CreateUserPage() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const users = useSelector((state) => state.user);
  const organizations = useSelector((state) => state.organization);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  const currOrganization = selectCurrentOrganization(
    organizations,
    currentUser.organizationId
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.removeItem("users");
    dispatch(
      createUser({
        id: users[users.length - 1].id + 1,
        organizationId: currOrganization.id,
        name,
        surname,
        email,
        password,
        isAdmin: false,
      })
    );
    navigate("/home");
  };
  console.log(users);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Surname</label>
        <input
          placeholder="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
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

export default CreateUserPage;
