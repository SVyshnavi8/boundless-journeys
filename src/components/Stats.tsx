const stats = [
  { value: "500K+", label: "Active Users" },
  { value: "1M+", label: "Books Available" },
  { value: "2,500+", label: "Partner Libraries" },
  { value: "4.9★", label: "App Store Rating" },
];

const Stats = () => {
  return (
    <section className="py-16 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-primary-foreground/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
