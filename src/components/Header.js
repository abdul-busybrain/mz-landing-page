import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Navigation from "./Navigation";
import { Link, Menu, X } from "lucide-react";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";

function Header() {
  const { userLoggedIn } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Mobile Menu Button */}
          <div className="block lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6 " aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Navigation />
            {userLoggedIn ? (
              <Link to={"/logout"}>
                <button>Logout</button>
              </Link>
            ) : (
              <Link to={"/register"}>
                <Button>Register free</Button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden transition-all duration-200 ease-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <nav>
              <ul className="flex flex-col space-y-4">
                <li>
                  <NavLink
                    to="/how"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    How it Works
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/pricing"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="Login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Sign in
                  </NavLink>
                </li>
              </ul>
              <div className="mt-4 px-3">
                <Button className="w-full justify-center">Sign up Free</Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
