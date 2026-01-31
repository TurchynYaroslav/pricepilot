import type { ComponentPropsWithoutRef, ReactNode } from "react";

type InlineLinkProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

const InlineLink = ({ children, ...props }: InlineLinkProps) => {
  return (
    <a
      className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
      {...props}
    >
      {children}
    </a>
  );
};

export default InlineLink;
