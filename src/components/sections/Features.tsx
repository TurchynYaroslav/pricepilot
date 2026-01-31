import FeatureCard from "../ui/FeatureCard";
import Calc from "../ui/icons/Calc";
import Layers from "../ui/icons/Layers";
import Users from "../ui/icons/Users";
import Zap from "../ui/icons/Zap";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-time Pricing",
      description:
        "Get instant cost estimates as you adjust your requirements with our dynamic calculator.",
    },
    {
      icon: Layers,
      title: "Flexible Plans",
      description:
        "Choose from multiple tiers that scale with your business needs and team size.",
    },
    {
      icon: Users,
      title: "Team-based Billing",
      description:
        "Pay only for active team members with transparent per-user pricing.",
    },
    {
      icon: Calc,
      title: "Instant Cost Estimates",
      description:
        "See exactly what you'll pay before committing, with no hidden fees or surprises.",
    },
  ];

  return (
    <section id="features" className="w-full py-20 bg-gray-50">
      <div className="max-w-300 mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:yext-4xl font-bold text-gray-900">
            Everything You Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features to help you manage pricing and billing with
            confidence
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            return <FeatureCard feature={feature} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
