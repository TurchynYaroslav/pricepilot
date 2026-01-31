import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import { pricingPlans, type pricingType } from "../../data/pricing";

const PricingCalculator = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [users, setUsers] = useState<number>(1);
  const [selectedPlan, setSelectedPlan] = useState<pricingType>(
    pricingPlans[1],
  );
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly",
  );
  const planPrice =
    billingPeriod === "monthly"
      ? selectedPlan.monthlyPrice
      : selectedPlan.yearlyPrice;

  const usersPrice = Number(selectedPlan.perUser * users);
  const subtotal = selectedPlan.monthlyPrice + usersPrice;
  const discount = billingPeriod === "yearly" ? Math.round(subtotal * 0.2) : 0;
  const totalPrice = subtotal - discount;

  const dropDownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-300 mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Calculate Your Cost
          </h2>
          <p className="text-lg text-gray-600">
            Estimate your monthly expenses based on your team size
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-10 space-y-8 grid">
              <div className="">
                <label className="block text-sm font-semibold text-gray-900 mb-4">
                  Number of users: {users}
                </label>
                <input
                  onChange={(e) => setUsers(Number(e.target.value))}
                  value={users}
                  type="range"
                  min={1}
                  max={100}
                  step={1}
                  className="w-full
          h-2
          appearance-none
          rounded-full
          bg-gray-200
          accent-indigo-600
          cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1</span>
                  <span>100</span>
                </div>
              </div>
              <div className="relative" ref={dropDownRef}>
                <label className="text-sm font-semibold text-gray-900 mb-3">
                  Select plan
                </label>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  role="combobox"
                  className="bg-gray-100 w-full flex justify-between items-center rounded-md gap-2 px-3 py-2 text-sm whitespace-nowrap transition-all outline-none dis font-semibold"
                >
                  <span>{selectedPlan.name}</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down size-4 opacity-50"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
                {isOpen && (
                  <ul className="w-full absolute top-17 px-1 py-1 rounded-md bg-white border border-gray-200 shadow-md">
                    {pricingPlans.map((plan, index) => {
                      return (
                        <li
                          key={index}
                          className={`${selectedPlan === plan && "bg-gray-200"} px-2 py-2 text-sm text-gray-900 rounded-md hover:bg-gray-200`}
                          onClick={() => {
                            setSelectedPlan(plan);
                          }}
                        >
                          {plan.name}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
              <div className="">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Billing period
                </label>
                <div className="flex gap-3">
                  <Button
                    onClick={() =>
                      billingPeriod === "yearly" && setBillingPeriod("monthly")
                    }
                    variant={billingPeriod === "monthly" ? "bright" : "dim"}
                    fullWidth={true}
                  >
                    Monthly
                  </Button>
                  <Button
                    onClick={() =>
                      billingPeriod === "monthly" && setBillingPeriod("yearly")
                    }
                    variant={billingPeriod === "yearly" ? "bright" : "dim"}
                    fullWidth={true}
                  >
                    Yearly
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 md:p-10 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="">
                  <p className="text-sm text-gray-600 mb-2">
                    Estimated monthly cost
                  </p>
                  <p className="text-5xl font-bold text-gray-900">
                    ${totalPrice}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">per month</p>
                </div>
                <div className="space-y-3 pt-6 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      Base price ({selectedPlan.name})
                    </span>
                    <span className="font-semibold text-gray-900">
                      ${planPrice}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      Users ({users} × ${selectedPlan.perUser})
                    </span>
                    <span className="font-semibold text-gray-900">
                      ${usersPrice}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">
                      Yearly discount ({billingPeriod === "yearly" ? "20" : "0"}
                      %)
                    </span>
                    <span className="font-semibold text-green-600">
                      -${discount}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Annual total
                      </span>
                      <span className="font-bold text-gray-900">
                        ${totalPrice * 12}
                      </span>
                    </div>
                    <p className="text-xs text-green-600 mt-2">
                      You save ${discount * 12} per year
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
