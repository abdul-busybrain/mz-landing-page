import { Users, Calendar, BarChart, X, Menu } from "lucide-react";
import { useState } from "react";

function Button({ children, variant = "primary", className = "" }) {
  const baseStyles =
    "px-6 py-2 rounded-md font-medium transition-colors duration-200";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary:
      "bg-white text-indigo-600 hover:bg-gray-50 border border-indigo-600",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Navigation />
            <Button>Sign up free</Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <ul className="flex flex-col space-y-4">
                {" "}
                <li>
                  <a href="#how" className="text-gray-600 hover:text-gray-900">
                    How it Works
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#signin"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Sign in
                  </a>
                </li>
              </ul>
              <Button className="w-full">Sign up Free</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function Logo() {
  return <h1 className="text-2xl font-bold text-indigo-600">Mozo</h1>;
}

function Navigation() {
  return (
    <nav>
      <ul className="flex items-center space-x-8">
        <li>
          <a href="#how" className="text-gray-600 hover:text-gray-900">
            How it Works
          </a>
        </li>
        <li>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </a>
        </li>
        <li>
          <a href="#blog" className="text-gray-600 hover:text-gray-900">
            Blog
          </a>
        </li>
        <li>
          <a href="#signin" className="text-gray-600 hover:text-gray-900">
            Sign in
          </a>
        </li>
      </ul>
    </nav>
  );
}

// NOTE Hero Section
function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:pt-40 sm:pb-24">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Streamlined <br className="hidden sm:block" /> Communication for{" "}
          <br className="hidden sm:block" /> Quick Shipping
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Mozo is a Web-Based, self hosted team chat sytem.
        </p>

        <Button className="mt-8 px-8 py-3 text-lg">Start free trial</Button>
        <Button className="mt-8 px-8 py-3 text-lg">Watch Demo</Button>
      </div>
    </section>
  );
}

// Features Section
function Feature({ btnStyle }) {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-gray-900 text-center">
          Enhance your team's productiity with Mozo
        </h3>
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
      </div>
    </section>
  );
}

// HOW IT WORKS
function How() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-gray-900 text-center">
          How it works
        </h3>
      </div>
    </section>
  );
}
