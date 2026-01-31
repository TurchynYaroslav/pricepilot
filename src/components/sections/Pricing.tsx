import PricingCard from "../ui/icons/PricingCard";
import { pricingPlans } from "../../data/pricing";
import { forwardRef, useState } from "react";

const Pricing = forwardRef<HTMLElement>((_, ref) => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <section ref={ref} id="pricing" className="w-full py-20 bg-white ">
      <div className="max-w-300 mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Flexible Pricing
          </h2>
          <p className="text-lg text-gray-600">Only pay for what you need</p>
        </div>
        <div className="flex justify-center items-center gap-4 mb-12">
          <span
            className={`${billingPeriod === "monthly" ? "text-gray-900 font-semibold" : "text-gray-600"} text-sm min-w-14 min-h-6`}
          >
            Monthly
          </span>
          <button
            onClick={() =>
              setBillingPeriod(
                billingPeriod === "monthly" ? "yearly" : "monthly",
              )
            }
            style={{
              backgroundColor:
                billingPeriod === "yearly" ? "#4F46E5" : undefined,
            }}
            className="relative w-14 h-7 bg-gray-200 rounded-full transition-colors"
          >
            <div
              style={{
                transform:
                  billingPeriod === "yearly" ? "translateX(28px)" : undefined,
              }}
              className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform"
            ></div>
          </button>
          <span
            className={`${billingPeriod === "monthly" ? "text-gray-600 " : "font-semibold text-gray-900"}text-sm min-w-14 relative min-h-6`}
          >
            Yearly
            <span
              className="absolute bottom-3 left-12
               text-sm/4 font-semibold text-green-600 bg-green-100 px-2 py-2 rounded-full
            "
            >
              Save 20%
            </span>
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((card, index) => {
            return (
              <PricingCard variant={billingPeriod} card={card} key={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default Pricing;
