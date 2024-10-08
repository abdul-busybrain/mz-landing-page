import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
}

function Navigation() {}

function Logo() {}

function Main() {
  return <main></main>;
}

function Footer() {
  return <footer></footer>;
}
