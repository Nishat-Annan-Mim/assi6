const stats = [
  { id: 1, value: "50K+", label: "Active Users" },
  { id: 2, value: "200+", label: "Premium Tools" },
  { id: 3, value: "4.9", label: "Rating" },
];

const StatsSection = () => {
  return (
    <section className="bg-gradient-to-r from-violet-600 to-fuchsia-600 py-10 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/20 px-4 text-center sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.id} className="py-6">
            <h3 className="text-4xl font-extrabold">{stat.value}</h3>
            <p className="mt-3 text-lg text-white/90">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
