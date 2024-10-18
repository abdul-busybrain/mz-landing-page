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

function Logo() {
  return <span>Logo</span>;
}

function Navigation() {
  return (
    <div>
      <span>Home</span>
      <span>How it works</span>
      <span>Pricing</span>
      <span>Blog</span>
    </div>
  );
}

function Main() {
  return <main></main>;
}

function Footer() {
  return <footer></footer>;
}
