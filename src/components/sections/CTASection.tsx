import { useState } from "react";
import Button from "../ui/Button";

export const CTASection = () => {
  const [email, setEmail] = useState("");
  return (
    <section
      id="contact"
      className="w-full py-20 bg-linear-to-br from-indigo-50 via-purple-50 to-blue-50"
    >
      <div className="max-w-200 mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to get started?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Join thousands of teams who trust PricePilot for transparent pricing
        </p>
        <form className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              className="focus:shadow-xl/20 placeholder:font-medium flex h-9 min-w-0 rounded-md px-3 py-1 text-base bg-gray-200 transition-[color,box-shadow] outline-none  md:text-sm  aria-invalid:border-destructive w-full"
            />
            <Button variant="bright">Get Started</Button>
          </div>
        </form>
      </div>
    </section>
  );
};
