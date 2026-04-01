import bannerImg from "../assets/banner.png";
import playIcon from "../assets/Play.png";

const Banner = () => {
  return (
    <section className="bg-[#f7f7fb]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-20">
        <div>
          <div className="mb-6 inline-flex items-center rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-600">
            <span className="mr-2 h-2 w-2 rounded-full bg-violet-600"></span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Supercharge Your Digital Workflow
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:scale-105 transition">
              Explore Products
            </button>

            <button className="flex items-center gap-2 rounded-full border border-violet-400 px-6 py-3 text-sm font-semibold text-violet-600 transition hover:bg-violet-50">
              <img src={playIcon} alt="play" className="h-4 w-4" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={bannerImg}
            alt="Banner"
            className="w-full max-w-md rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
