import {
  Users,
  Calendar,
  BarChart,
  X,
  Menu,
  ClipboardCheck,
  Rocket,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <How />
      <Pricing />
      <FAQ />
      <Footer />
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
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Enhance your team's productiity with Mozo
        </h2>
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
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            How it works
          </h2>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
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

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$10",
      description: "Perfect for startups",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      name: "Standard",
      price: "$20",
      description: "Most popular choice",
      features: ["Basic +", "Feature 4", "Feature 5", "Feature 6"],
      featured: true,
    },
    {
      name: "Premium",
      price: "$30",
      description: "For Big Enterprises",
      features: ["Standard +", "Feature 7", "Feature 8", "Feature 9"],
    },
  ];

  return (
    <div className=" flex justify-center items-center gap-8 p-8">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative flex flex-col p-6 rounded-2xl border ${
            plan.featured
              ? "border-indigo-500 shadow-xl transform scale-105 bg-white z-10"
              : "border-gray-200 bg-white"
          }`}
        >
          {plan.featured && (
            <div className="absolute -top-5 left-0 ring-0 flex justify-center">
              <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </span>
            </div>
          )}
          <div className="text-center">
            <h4 className="text-2xl font-bold text-gray-900">{plan.name}</h4>
            <p className="mt-2 text-gray-500">{plan.description}</p>
            <p className="mt-4">
              <span className="text-4xl font-bold text-gray-900">
                {plan.price}
              </span>
              <span className="text-gray-500">month</span>
            </p>
          </div>

          <ul className="mt-6 space-y-4 flex-1">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start">
                <svg
                  className="h-6 w-6 text-green-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="ml-3 text-gray-500">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button
              variant={plan.featured ? "primary" : "secondary"}
              className="w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What industries can benefit from your AI solutions?",
      answer:
        "Our AI solutions are applicable across various industries, including healthcare, finance, retail, and manufacturing.",
    },
    {
      question: "How do you ensure data privacy and security?",
      answer:
        "We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information.",
    },
    {
      question:
        "Can your AI solutions be customized to fit specific business needs?",
      answer:
        "Automate repetitive tasks and free up valuable time for strategic initiatives.",
    },
    {
      question:
        "Do you provide ongoing support and maintenance for your AI solutions?",
      answer:
        "Absolutely, we offer comprehensive support and maintenance services to ensure the smooth operation of our AI solutions.",
    },
    {
      question: "How can I get started with your AI solutions?",
      answer:
        "Simply reach out to our team to schedule a consultation and explore how our AI solutions can benefit your business.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">
          Advice and answers from our team.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-medium text-gray-900">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`px-6 overflow-hidden transition-all duration-200 ${
                openIndex === index ? "py-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Integrations", href: "#" },
        { name: "Documentation", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Knowledge Base", href: "#" },
        { name: "API Docs", href: "#" },
        { name: "Community", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Partners", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Security", href: "#" },
        { name: "Compliance", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Ahead of the AI Revolution
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Join our newsletter for exclusive insights and updates on AI-powered
            project management.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="example@yahoo.com"
              className="flex-1 min-w-0 px-4 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-l-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-base text-gray-400">
                © 2024 Mozo - AI Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

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
