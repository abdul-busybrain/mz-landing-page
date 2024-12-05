import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import { HashLink } from "react-router-hash-link";

function Navigation() {
  const navColor =
    "text-base font-medium text-gray-600 active:text-blue-500 hover:text-blue-600";

  return (
    <nav>
      <ul className="flex items-center space-x-8">
        <li>
          <HashLink to="/#how" className={`${navColor}`}>
            How it Works
          </HashLink>
        </li>
        <li>
          <HashLink to="/#pricing" className={`${navColor}`}>
            Pricing
          </HashLink>
        </li>
        <li>
          <NavLink to="/blog" className={`${navColor}`}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={`${navColor}`}>
            Login
          </NavLink>
        </li>
        <Button>
          <NavLink to={"/register"}>Register free</NavLink>
        </Button>
      </ul>
    </nav>
  );
}

export default Navigation;
