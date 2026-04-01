const NavBar = ({ cartCount }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-violet-600">DigiTools</h1>

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          <a href="#products" className="hover:text-violet-600">
            Products
          </a>
          <a href="#features" className="hover:text-violet-600">
            Features
          </a>
          <a href="#pricing" className="hover:text-violet-600">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-violet-600">
            Testimonials
          </a>
          <a href="#faq" className="hover:text-violet-600">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative">
            <svg
              className="h-5 w-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 4h12M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold text-white">
              {cartCount}
            </span>
          </div>

          <button className="hidden text-sm font-medium text-gray-700 sm:block">
            Login
          </button>

          <button className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
