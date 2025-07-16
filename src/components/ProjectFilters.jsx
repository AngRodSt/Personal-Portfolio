/* eslint-disable react/prop-types */
import { useState } from "react";

const ProjectFilters = ({ onFilterChange }) => {
  const [activeFilters, setActiveFilters] = useState({
    type: "all",
    tech: "all",
    status: "all",
  });

  const filterOptions = {
    type: [
      { value: "all", label: "All Types" },
      { value: "Full Stack App", label: "Full Stack" },
      { value: "Frontend App", label: "Frontend" },
      { value: "Mobile App", label: "Mobile App" },
      { value: "UI Mockup", label: "UI Mockup" },
    ],
    tech: [
      { value: "all", label: "All Technologies" },
      { value: "React", label: "React" },
      { value: "Next.js", label: "Next.js" },
      { value: "React Native", label: "React Native" },
      { value: "Node.js", label: "Node.js" },
      { value: "JavaScript", label: "JavaScript" },
      { value: "TypeScript", label: "TypeScript" },
      { value: "Python", label: "Python" },
      { value: "MongoDB", label: "MongoDB" },
      { value: "Firebase", label: "Firebase" },
      { value: "GraphQL", label: "GraphQL" },
    ],
    status: [
      { value: "all", label: "All Status" },
      { value: "completed", label: "Completed" },
      { value: "inProgress", label: "In Progress" },
      { value: "beta", label: "Beta" },
      { value: "paused", label: "Paused" },
    ],
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...activeFilters, [filterType]: value };
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="mb-8 space-y-6">
      {/* Filter Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(filterOptions).map(([filterType, options]) => (
          <div key={filterType} className="space-y-2">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              {filterType === "type"
                ? "Project Type"
                : filterType === "tech"
                ? "Technology"
                : "Status"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleFilterChange(filterType, option.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border
                    ${
                      activeFilters[filterType] === option.value
                        ? "bg-cyan-500 text-black border-cyan-400 shadow-lg shadow-cyan-500/25"
                        : "bg-gray-800/50 text-gray-300 border-gray-600/50 hover:bg-gray-700/50 hover:border-gray-500/50 hover:text-white"
                    }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Active Filters Display */}
      {(activeFilters.type !== "all" ||
        activeFilters.tech !== "all" ||
        activeFilters.status !== "all") && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-gray-400 text-sm">Active filters:</span>
          {Object.entries(activeFilters).map(([key, value]) =>
            value !== "all" ? (
              <span
                key={key}
                className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs border border-cyan-500/30"
              >
                {value}
                <button
                  onClick={() => handleFilterChange(key, "all")}
                  className="ml-2 hover:text-cyan-100"
                >
                  ×
                </button>
              </span>
            ) : null
          )}
          <button
            onClick={() => {
              setActiveFilters({ type: "all", tech: "all", status: "all" });
              onFilterChange({ type: "all", tech: "all", status: "all" });
            }}
            className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs border border-red-500/30 hover:bg-red-500/30"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectFilters;
