import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import WelcomingPage from "./pages/WelcomingPage";
import CreateUserPage from "./pages/CreateUserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/create" element={<CreateUserPage />} />
    </Routes>
  );
}

export default App;