const plans = [
  {
    id: 1,
    name: "Starter",
    subtitle: "Perfect for getting started",
    price: "$0",
    period: "/Month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    buttonText: "Get Started Free",
    featured: false,
  },
  {
    id: 2,
    name: "Pro",
    subtitle: "Best for professionals",
    price: "$29",
    period: "/Month",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    buttonText: "Start Pro Trial",
    featured: true,
    tag: "Most Popular",
  },
  {
    id: 3,
    name: "Enterprise",
    subtitle: "For teams and businesses",
    price: "$99",
    period: "/Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    buttonText: "Contact Sales",
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-gray-500">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border p-6 shadow-sm ${
                plan.featured
                  ? "border-violet-600 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white"
                  : "border-gray-200 bg-white text-slate-900"
              }`}
            >
              {plan.tag && (
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100 px-4 py-1 text-xs font-semibold text-amber-600">
                  {plan.tag}
                </span>
              )}

              <h3 className="text-3xl font-bold">{plan.name}</h3>
              <p
                className={`mt-2 ${plan.featured ? "text-white/80" : "text-gray-500"}`}
              >
                {plan.subtitle}
              </p>

              <div className="mt-8">
                <span className="text-5xl font-extrabold">{plan.price}</span>
                <span
                  className={`ml-1 text-xl ${plan.featured ? "text-white/80" : "text-gray-400"}`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span
                      className={
                        plan.featured ? "text-white" : "text-green-500"
                      }
                    >
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full rounded-full px-5 py-3 text-sm font-semibold shadow-md transition ${
                  plan.featured
                    ? "bg-white text-violet-600"
                    : "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
