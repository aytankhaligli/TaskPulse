import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function WelcomingPage() {
  const navigate = useNavigate();
  const handleLogin = () => navigate("/login");
  const handleSignUp = () => navigate("/signup");
  return (
    <div className=" w-full h-screen  bg-[url('assets/bg.jpg')] bg-cover ">
      <div className="h-screen flex flex-col   items-center justify-center shadow-xl ">
        <h1 className="text-7xl font-semibold text-gray-700 mb-20 -mt-[200px]">
          Task<span className="text-cyan-600">Pulse</span>
        </h1>
        <div className="flex gap-10 w-1/2">
          <Button onClick={handleLogin} text="Log In" />
          <Button onClick={handleSignUp} text="Sign up" />
        </div>
      </div>
    </div>
  );
}

export default WelcomingPage;
