import type { ComponentPropsWithoutRef, ComponentType } from "react";

type IconComponent = ComponentType<ComponentPropsWithoutRef<"svg">>;
type WrapperProps = ComponentPropsWithoutRef<"div">;

type LucideIconProps = WrapperProps & { Icon: IconComponent };

const LucideIcon = ({ Icon, ...props }: LucideIconProps) => {
  return (
    <div
      className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4"
      {...props}
    >
      <Icon />
    </div>
  );
};

export default LucideIcon;
