export type pricingType = {
  name: "Basic" | "Pro" | "Enterprise";
  monthlyPrice: number;
  yearlyPrice: number;
  perUser: number;
  popular?: boolean;
  features: string[];
};

export const pricingPlans: pricingType[] = [
  {
    name: "Basic",
    monthlyPrice: 29,
    yearlyPrice: 24,
    perUser: 5,
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "Email support",
      "1 GB storage",
      "Core features",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 79,
    yearlyPrice: 65,
    perUser: 8,
    popular: true,
    features: [
      "Up to 25 team members",
      "Advanced analytics",
      "Priority support",
      "10 GB storage",
      "All features included",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: 199,
    yearlyPrice: 165,
    perUser: 12,
    features: [
      "Unlimited team members",
      "Custom analytics",
      "24/7 dedicated support",
      "Unlimited storage",
      "Enterprise features",
      "Custom integrations",
      "SLA guarantee",
    ],
  },
];
