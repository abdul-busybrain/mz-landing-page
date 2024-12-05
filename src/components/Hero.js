import { Button } from "./Button";

// NOTE Hero Section
export function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-16 px-4 sm:pt-40 sm:pb-24 bg-blue-50"
    >
      <div className="max-w-7xl mx-auto text-center ">
        <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Streamlined <br className="hidden sm:block" /> Communication for
          <br className="hidden sm:block" /> Quick Shipping
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Mozo is a Web-Based, self hosted team chat sytem.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Button className=" px-8 py-3 text-lg">Start free trial</Button>
          <Button variant="secondary" className="px-8 py-3 text-lg">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
