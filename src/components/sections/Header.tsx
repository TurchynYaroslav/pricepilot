import Button from "../ui/Button";
import InlineLink from "../ui/InlineLink";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-300 mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-semibold text-indigo-600 cursor-default">
            PricePilot
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <InlineLink href="#features">Features</InlineLink>
          <InlineLink href="#pricing">Pricing</InlineLink>
          <InlineLink href="#contact">Contact</InlineLink>
          <Button variant="bright">Get Started</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
