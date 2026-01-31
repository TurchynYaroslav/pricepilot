import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  variant?: "bright" | "dim" | "black";
  fullWidth?: boolean;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  variant = "bright",
  fullWidth = false,
  children,
  className,
  ...props
}: ButtonProps) => {
  let buttonV;
  if (variant === "bright")
    buttonV = "bg-indigo-600 text-white hover:bg-indigo-700";
  else if (variant === "dim")
    buttonV =
      "text-indigo-600 border-indigo-600 border hover:bg-indigo-50 hover:text-black";
  else if (variant === "black")
    buttonV = "bg-gray-900 text-white hover:bg-gray-800 hover:text-gray-50";
  return (
    <button
      className={[
        "font-medium px-4 py-2 rounded-md transition h-9 duration-300 items-center flex justify-center text-sm text-nowrap",
        buttonV,
        fullWidth && "w-full",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
