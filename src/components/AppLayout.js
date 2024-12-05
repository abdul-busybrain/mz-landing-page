import { Outlet } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Navigation from "./Navigation";

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
