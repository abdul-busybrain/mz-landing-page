import { BarChart, ClipboardCheck, Rocket, Users } from "lucide-react";
import { Button } from "./Button";

function How() {
  const steps = [
    {
      icon: <ClipboardCheck className="w-12 h-12 text-blue-600" />,
      number: "01",
      title: "Create Your Project",
      description:
        "Set up your project workspace in minutes. Define goals, timelines, and key milestones with our intuitive project setup wizard.",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      number: "02",
      title: "Invite Your Team",
      description:
        "Add team members and assign roles. Our smart collaboration tools ensure everyone knows their responsibilities.",
    },
    {
      icon: <BarChart className="w-12 h-12 text-blue-600" />,
      number: "03",
      title: "Track Progress",
      description:
        "Monitor project advancement in real-time with visual dashboards. Get insights on team performance and project status.",
    },
    {
      icon: <Rocket className="w-12 h-12 text-blue-600" />,
      number: "04",
      title: "Deliver Results",
      description:
        "Complete projects on time and within budget. Generate comprehensive reposts and celebrate team success.",
    },
  ];

  return (
    <section id="how" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
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
              <div className="absolute -top-4 left-6 bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-full">
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
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-blue-300" />
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button
            variant="primary"
            className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md  transition-colors duration-200"
          >
            Start Your Project Now
          </Button>
        </div>
      </div>
    </section>
  );
}

export default How;
