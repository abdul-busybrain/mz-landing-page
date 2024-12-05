import { NavLink } from "react-router-dom";

export function Logo() {
  return (
    <NavLink to="/" className="text-2xl font-bold text-blue-600">
      <h1 style={{ fontFamily: "Arial", fontWeight: "bold" }}> mozo</h1>
    </NavLink>
  );
}
