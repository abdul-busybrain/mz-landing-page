import { Button } from "./Button";

export function Pricing() {
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
    <section section id="pricing">
      <h2 className="block text-center text-blue-500 p-8 text-4xl font-bold">
        Pricing
      </h2>
      <div className=" flex justify-center items-center gap-8 p-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col p-6 rounded-2xl border ${
              plan.featured
                ? "border-blue-500 shadow-xl transform scale-105 bg-white z-10"
                : "border-gray-200 bg-white"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-5 left-0 ring-0 flex justify-center">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
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
                <span className="text-gray-500"> / month</span>
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
    </section>
  );
}
