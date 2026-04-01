const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 py-20 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Ready To Transform Your Workflow?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/85">
            Join thousands of professionals who are already using Digitools to
            work smarter. Start your free trial today.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-violet-600">
              Explore Products
            </button>
            <button className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white">
              View Pricing
            </button>
          </div>

          <p className="mt-6 text-sm text-white/80">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-1">
            <h3 className="text-4xl font-bold">DigiTools</h3>
            <p className="mt-5 text-sm leading-7 text-gray-400">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Product</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Social Links</h4>
            <div className="mt-4 flex gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950">
                ◉
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950">
                f
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950">
                𝕏
              </span>
            </div>
          </div>
        </div>

        
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
