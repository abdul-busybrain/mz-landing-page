import { Route, Routes } from "react-router-dom";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import AccountSetup from "./AccountSetup";
import { Hero } from "./Hero";
import { Pricing } from "./Pricing";
import { Footer } from "./Footer";
import Blog from "./Blog";
import Header from "./Header";
import How from "./How";
import Feature from "./Feature";
import FAQ from "./FAQ";
import Home from "./Home";
import AppLayout from "./AppLayout";
import Dashboard from "./Dashboard";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<AppLayout />}>
          {/* Home related routes (nested) */}
          <Route path="/" element={<Home />} />
          {/* Nested routes for Home component sections */}
          <Route path="/#how" element={<How />} />
          <Route path="/#pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
        </Route>

        {/* Separate page routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account-setup" element={<AccountSetup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
