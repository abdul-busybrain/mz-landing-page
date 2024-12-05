import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { doSignOut } from "../firebase/auth";

function Logout() {
  const navigate = useNavigate();
  const { setUserLoggedIn } = useAuth();

  async function handleLogout() {
    try {
      await doSignOut();
      setUserLoggedIn(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  }
  return handleLogout();
}

export default Logout;
