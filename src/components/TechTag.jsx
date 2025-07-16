/* eslint-disable react/prop-types */
const TechTag = ({ tech, className = "" }) => {
  const getTechConfig = (tech) => {
    const configs = {
      "Next.js": { color: "bg-black text-white border-white/30", icon: "⚡" },
      React: { color: "bg-cyan-600 text-white border-cyan-400/50", icon: "⚛" },
      JavaScript: {
        color: "bg-orange-500 text-black border-orange-400/50",
        icon: "JS",
      },
      TypeScript: {
        color: "bg-cyan-700 text-white border-cyan-500/50",
        icon: "TS",
      },
      "Node.js": {
        color: "bg-black text-green-400 border-green-400/30",
        icon: "🟢",
      },
      Express: { color: "bg-black text-white border-white/30", icon: "🚀" },
      MongoDB: {
        color: "bg-black text-green-400 border-green-400/30",
        icon: "🍃",
      },
      MySQL: {
        color: "bg-orange-600 text-white border-orange-400/50",
        icon: "🐬",
      },
      Python: {
        color: "bg-cyan-600 text-white border-cyan-400/50",
        icon: "🐍",
      },
      Flask: { color: "bg-black text-white border-white/30", icon: "🌶" },
      Tailwindcss: {
        color: "bg-cyan-500 text-black border-cyan-400/50",
        icon: "💨",
      },
      HTML: {
        color: "bg-orange-500 text-white border-orange-400/50",
        icon: "📄",
      },
      CSS: { color: "bg-cyan-600 text-white border-cyan-400/50", icon: "🎨" },
      "Shopify API": {
        color: "bg-black text-green-400 border-green-400/30",
        icon: "🛒",
      },
      Bootstrap: {
        color: "bg-black text-cyan-400 border-cyan-400/30",
        icon: "🅱",
      },
      Sequelize: {
        color: "bg-cyan-700 text-white border-cyan-500/50",
        icon: "🔗",
      },
      Pug: {
        color: "bg-orange-600 text-white border-orange-400/50",
        icon: "🐶",
      },
    };

    return (
      configs[tech] || {
        color: "bg-black text-white border-white/30",
        icon: "🔧",
      }
    );
  };

  const config = getTechConfig(tech);

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-md border backdrop-blur-sm transition-all duration-200 hover:scale-105 shadow-sm ${config.color} ${className}`}
    >
      <span className="text-xs">{config.icon}</span>
      {tech}
    </span>
  );
};

export default TechTag;
