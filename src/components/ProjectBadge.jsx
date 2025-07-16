/* eslint-disable react/prop-types */
const ProjectBadge = ({ status, className = "" }) => {
  const getStatusConfig = (status) => {
    const configs = {
      completed: {
        text: "Completed",
        bgColor: "bg-cyan-500/90",
        textColor: "text-black",
        borderColor: "border-cyan-400/60",
        icon: "✓",
      },
      inProgress: {
        text: "In Progress",
        bgColor: "bg-orange-500/90",
        textColor: "text-black",
        borderColor: "border-orange-400/60",
        icon: "⚡",
      },
      paused: {
        text: "Paused",
        bgColor: "bg-gray-500/90",
        textColor: "text-white",
        borderColor: "border-gray-400/60",
        icon: "⏸",
      },
      archived: {
        text: "Archived",
        bgColor: "bg-gray-800/90",
        textColor: "text-gray-300",
        borderColor: "border-gray-600/60",
        icon: "📁",
      },
    };
    return configs[status] || configs.completed;
  };

  const config = getStatusConfig(status);

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full border backdrop-blur-md shadow-lg ${config.bgColor} ${config.textColor} ${config.borderColor} ${className}`}
    >
      <span>{config.icon}</span>
      {config.text}
    </span>
  );
};

export default ProjectBadge;
