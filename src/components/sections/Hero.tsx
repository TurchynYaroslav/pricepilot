import Button from "../ui/Button";

type Props = {
  scroll: () => void;
};

const Hero = ({ scroll }: Props) => {
  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-300 mx-auto px-6">
        <div className=" grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Simple, Transparent Pricing for Growing SaaS Teams
            </h1>
            <p className="text-lg text-gray-600">
              Calculate your costs instantly and choose the plan that fits your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="bright">Get Started</Button>
              <Button
                variant="dim"
                onClick={() => {
                  scroll();
                }}
              >
                View Pricing
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-square rounded-2xl bg-linear-to-br from-indigo-100 via-purple-50 to-blue-100 flex items-center justify-center">
              <div className="relative w-4/5 h-4/5">
                <div className="absolute inset-0 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl opacity-20 animate-pulse"></div>
                <div className="absolute inset-8 bg-linear-to-br from-blue-500 to-indigo-600 rounded-lg opacity-30"></div>
                <div className="absolute inset-16 bg-white rounded-b-lg shadow-2xl flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold text-indigo-600">
                      $49
                    </div>
                    <div className="text-sm text-gray-600">per month</div>
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

export default Hero;
