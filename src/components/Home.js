import { Outlet } from "react-router-dom";
import FAQ from "./FAQ";
import Feature from "./Feature";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import How from "./How";
import { Pricing } from "./Pricing";

function Home() {
  return (
    <main>
      <Outlet />
      <Hero />
      <Feature />
      <How />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
export default Home;
