import type { HtmlHTMLAttributes } from "react";
import Button from "../Button";

type planDetails = {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  features: string[];
};

type PricingCardProps = {
  variant: "monthly" | "yearly";
  card: planDetails;
} & HtmlHTMLAttributes<HTMLDivElement>;

const PricingCard = ({ variant, card, ...props }: PricingCardProps) => {
  return (
    <div
      className={[
        "mt-10 flex flex-col justify-between relative bg-white rounded-2xl p-8 transition-all  shadow-sm hover:shadow-md",
        card.popular
          ? "border-indigo-600 border-2 scale-105"
          : "border-gray-200 border",
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {card.popular ? (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      ) : (
        ""
      )}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {card.name}
        </h3>
        <div className="mb-2 transition-all">
          {variant === "monthly" ? (
            <span className="text-4xl font-bold text-gray-900 transition-all">
              ${card.monthlyPrice}
            </span>
          ) : (
            <div className="relative transition-all">
              <span className="text-4xl font-bold text-gray-400 line-through opacity-70">
                ${card.monthlyPrice}
              </span>
              <span className="absolute bottom-7 text-xl text-green-600 font-semibold">
                ${card.yearlyPrice}
              </span>
            </div>
          )}
        </div>

        <p className="text-sm text-gray-600 mb-6">per month</p>
        <ul className="space-y-3 mb-8">
          {card.features.map((text, index) => {
            return (
              <div className="flex items-start gap-3" key={index}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check w-5 h-5 text-indigo-600 shrink-0 mt-0.5"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <p className="text-sm text-gray-600 text-left">{text}</p>
              </div>
            );
          })}
        </ul>
      </div>
      {card.popular ? (
        <Button variant="bright" fullWidth={true}>
          Choose Plan
        </Button>
      ) : (
        <Button variant="black" fullWidth={true}>
          Choose Plan
        </Button>
      )}
    </div>
  );
};

export default PricingCard;
