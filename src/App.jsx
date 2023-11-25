import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import WelcomingPage from "./pages/WelcomingPage";
import CreateUserPage from "./pages/CreateUserPage";
import LoginPage from "./pages/LoginPage";
import CreateTaskPage from "./pages/CreateTaskPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/create" element={<CreateUserPage />} />
      <Route path="/createtask" element={<CreateTaskPage />} />
    </Routes>
  );
}

export default App;
