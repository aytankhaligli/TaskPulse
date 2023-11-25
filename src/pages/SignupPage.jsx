import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrganization } from "../redux/slices/OrganizationsSlice";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [organizationName, setOrganizationName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const organizations = useSelector(
    (state) => state.organization.organizations
  );
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.removeItem("organizations");
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
    navigate("/home");
  };

  console.log(organizations);
  console.log(useSelector((state) => state.organization.organizations));
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Organization Name</label>
        <input
          placeholder="Express"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          placeholder="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <label>Address</label>
        <input
          placeholder="adress"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <label>Username</label>
        <input
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

export default SignupPage;
