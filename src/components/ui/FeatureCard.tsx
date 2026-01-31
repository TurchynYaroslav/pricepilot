import type { ComponentType, HTMLAttributes } from "react";
import LucideIcon from "./LucideIcon";

type Feature = {
  icon: ComponentType;
  title: string;
  description: string;
};

type FeatureCardProps = {
  feature: Feature;
} & HTMLAttributes<HTMLDivElement>;

const FeatureCard = ({ feature, ...props }: FeatureCardProps) => {
  return (
    <div
      {...props}
      className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
    >
      <LucideIcon Icon={feature.icon} />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-gray-600">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
