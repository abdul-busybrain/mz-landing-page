import { Users, Calendar, BarChart } from "lucide-react";

function Button({ children, btnStyle }) {
  return <button style={btnStyle}>{children}</button>;
}

export default function App() {
  return (
    <>
      <Header />

      <Hero />

      <Feature />

      <How />
    </>
  );
}

// NOTE Header Section
function Header() {
  const btnStyle = { display: "block", color: "red" };
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <Logo />
      <Navigation />
      <Button>Sign up free</Button>
    </header>
  );
}

function Logo() {
  return <h1>Mozo</h1>;
}

function Navigation() {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "3rem",
          listStyleType: "none",
        }}
      >
        <li>How it Works</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>Sign in</li>
      </ul>
    </nav>
  );
}

// NOTE Hero Section
function Hero() {
  const btnStyle = { display: "block", width: "16rem", margin: "0 auto" };

  return (
    <section style={{ textAlign: "center" }}>
      <h1>
        Streamlined <br /> Communication for <br /> Quick Shipping
      </h1>
      <p>Mozo is a Web-Based, self hosted team chat sytem.</p>

      <Button btnStyle={btnStyle}>Start free trial</Button>
      <Button btnStyle={btnStyle}>Watch Demo</Button>
    </section>
  );
}

// Features Section
function Feature({ btnStyle }) {
  return (
    <section style={{ textAlign: "center" }}>
      <h3>Enhance your team's productiity with Mozo</h3>
      <p>Write in threads, focus, and collaborate without video calls.</p>

      {/* KEY FEATURES */}
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <BarChart className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Project Tracking
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Real-time dashboards and customizable workflows - Keeping
                    teams aligned
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Team Collaboration
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Built-in communication tools and - Keep conversations
                    contextual
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Calendar className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Resource Management
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Capacity planning and workload management - Prevent team
                    burnout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button btnStyle={btnStyle}>Start free trial</Button>
    </section>
  );
}

// HOW IT WORKS
function How() {
  return (
    <>
      <h3>How it Works</h3>
    </>
  );
}
