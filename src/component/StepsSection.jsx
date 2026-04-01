import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const steps = [
  {
    id: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    icon: userIcon,
  },
  {
    id: "02",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    icon: packageIcon,
  },
  {
    id: "03",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    icon: rocketIcon,
  },
];

const StepsSection = () => {
  return (
    <section id="features" className="bg-[#f7f7fb] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Get Started In 3 Steps
          </h2>
          <p className="mt-4 text-gray-500">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm"
            >
              <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                {step.id}
              </span>

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-violet-100">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="h-12 w-12 object-contain"
                />
              </div>

              <h3 className="mt-8 text-3xl font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-4 text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
