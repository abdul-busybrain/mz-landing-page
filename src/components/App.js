import {
  Users,
  Calendar,
  BarChart,
  X,
  Menu,
  ClipboardCheck,
  Rocket,
} from "lucide-react";
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
          <div className="block lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
            <Button>Sign up free</Button>
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
                  <a
                    href="#how"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    How it Works
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#signin"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Sign in
                  </a>
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

function Logo() {
  return <h1 className="text-2xl font-bold text-indigo-600">Mozo</h1>;
}

function Navigation() {
  return (
    <nav>
      <ul className="flex items-center space-x-8">
        <li>
          <a
            href="#how"
            className="text-base font-medium text-gray-600 hover:text-gray-900"
          >
            How it Works
          </a>
        </li>
        <li>
          <a
            href="#pricing"
            className="text-base font-medium text-gray-600 hover:text-gray-900"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#blog"
            className="text-base font-medium text-gray-600 hover:text-gray-900"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="#signin"
            className="text-base font-medium text-gray-600 hover:text-gray-900"
          >
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
  const steps = [
    {
      icon: <ClipboardCheck className="w-12 h-12 text-indigo-600" />,
      number: "01",
      title: "Create Your Project",
      description:
        "Set up your project workspace in minutes. Define goals, timelines, and key milestones with our intuitive project setup wizard.",
    },
    {
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      number: "02",
      title: "Invite Your Team",
      description:
        "Add team members and assign roles. Our smart collaboration tools ensure everyone knows their responsibilities.",
    },
    {
      icon: <BarChart className="w-12 h-12 text-indigo-600" />,
      number: "03",
      title: "Track Progress",
      description:
        "Monitor project advancement in real-time with visual dashboards. Get insights on team performance and project status.",
    },
    {
      icon: <Rocket className="w-12 h-12 text-indigo-600" />,
      number: "04",
      title: "Deliver Results",
      description:
        "Complete projects on time and within budget. Generate comprehensive reposts and celebrate team success.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            How it works
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started with our four-step process to transform your project
            management
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-6 bg-indigo-600 text-white text-sm font-bold py-2 px-4 rounded-full">
                {step.number}
              </div>

              {/* Icon */}
              <div className="mb-6 mt-4">{step.icon}</div>

              {/* Content */}
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h4>
              <p className="text-gray-600">{step.description}</p>

              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-indigo-300" />
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
            Start Your Project Now
          </button>
        </div>
      </div>
    </section>
  );
}
