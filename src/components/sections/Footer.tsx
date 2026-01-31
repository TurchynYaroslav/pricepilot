import InlineLink from "../ui/InlineLink";

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-white border-t border-gray-200">
      <div className="max-w-300 mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="">
            <span className="text-xl font-semibold text-indigo-600">
              PricePilot
            </span>
            <p className="text-sm text-gray-600 mt-2">
              Transparent pricing solutions for modern SaaS teams.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 md:justify-end">
            <InlineLink href="#">Privacy</InlineLink>
            <InlineLink href="#">Terms</InlineLink>
            <InlineLink href="#contact">Contact</InlineLink>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © 2026 PricePilot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
