export default function FeatureCard({
  icon: Icon,
  badge,
  title,
  description,
  variant = "green",
}) {
  const variants = {
    green: {
      card: "bg-[#2d5a27]",
      icon: "bg-white/15 text-white",
      badge: "bg-white/15 text-white",
      title: "text-white",
      description: "text-slate-300",
    },

    white: {
      card: "bg-white border border-gray-200 shadow-sm",
      icon: "bg-[#EEF2EB] text-[#2d5a27]",
      badge: "bg-[#F5F5F3] text-[#2d5a27]",
      title: "text-[#2d5a27]",
      description: "text-slate-500",
    },
  };

  const style = variants[variant];

  return (
    <div>
      <div
        className={`rounded-3xl w-full min-h-70 p-10 flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${style.card}`}
      >
        {/* PRIMEIRA PARTE */}
        <div className="flex items-center justify-between">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-3xl ${style.icon}`}
          >
            <Icon size={28} />
          </div>

          <div
            className={`flex items-center justify-center h-8 w-32 rounded-3xl ${style.badge}`}
          >
            <p className="uppercase font-medium">{badge}</p>
          </div>
        </div>

        {/* SEGUNDA PARTE */}
        <div className="mt-auto">
          <h2 className={`font-display font-bold text-3xl mb-2 ${style.title}`}>
            {title}
          </h2>

          <p className={`font-serif ${style.description}`}>{description}</p>
        </div>
      </div>
    </div>
  );
}
