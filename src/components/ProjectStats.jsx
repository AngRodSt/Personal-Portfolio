/* eslint-disable react/prop-types */
const ProjectStats = ({ projects }) => {
  const stats = {
    total: projects.length,
    completed: projects.filter((p) => p.status === "completed").length,
    inProgress: projects.filter((p) => p.status === "inProgress").length,
    featured: projects.filter((p) => p.featured).length,
    technologies: [
      ...new Set(
        projects.flatMap(
          (p) =>
            p.tecnologys
              ?.split("|")
              .map((t) => t.trim())
              .filter((t) => t !== "") || []
        )
      ),
    ].length,
    categories: [...new Set(projects.map((p) => p.type))].length,
  };

  const completionRate = Math.round((stats.completed / stats.total) * 100);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {/* Total Projects */}
      <div className="bg-black/60 backdrop-blur-md border border-cyan-500/30 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300 shadow-xl">
        <div className="text-3xl font-bold text-cyan-400 mb-1">
          {stats.total}
        </div>
        <div className="text-sm text-white font-medium">Projects</div>
        <div className="mt-2">
          <div className="w-full bg-black/40 rounded-full h-2 border border-cyan-500/20">
            <div
              className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-2 rounded-full transition-all duration-1000 shadow-md"
              style={{ width: `${(stats.total / 50) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Completed */}
      <div className="bg-black/60 backdrop-blur-md border border-cyan-500/30 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300 shadow-xl">
        <div className="text-3xl font-bold text-cyan-400 mb-1">
          {stats.completed}
        </div>
        <div className="text-sm text-white font-medium">Completed</div>
        <div className="text-xs text-cyan-300 mt-1 font-medium">
          {completionRate}% done
        </div>
      </div>

      {/* Technologies */}
      <div className="bg-black/60 backdrop-blur-md border border-gray-500/30 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300 shadow-xl">
        <div className="text-3xl font-bold text-gray-400 mb-1">
          {stats.technologies}
        </div>
        <div className="text-sm text-white font-medium">Technologies</div>
        <div className="text-xs text-gray-300 mt-1 font-medium">Tech stack</div>
      </div>

      {/* Featured */}
      <div className="bg-black/60 backdrop-blur-md border border-orange-500/30 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300 shadow-xl">
        <div className="text-3xl font-bold text-orange-400 mb-1">
          {stats.featured}
        </div>
        <div className="text-sm text-white font-medium">Featured</div>
        <div className="text-xs text-orange-300 mt-1 font-medium">
          ⭐ Premium
        </div>
      </div>

      {/* Categories */}
      <div className="bg-black/60 backdrop-blur-md border border-gray-500/30 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300 shadow-xl">
        <div className="text-3xl font-bold text-gray-400 mb-1">
          {stats.categories}
        </div>
        <div className="text-sm text-white font-medium">Categories</div>
        <div className="text-xs text-gray-300 mt-1 font-medium">Diversity</div>
      </div>

      {/* In Progress */}
      <div className="bg-black/60 backdrop-blur-md border border-orange-500/30 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300 shadow-xl">
        <div className="text-3xl font-bold text-orange-400 mb-1">
          {stats.inProgress}
        </div>
        <div className="text-sm text-white font-medium">In Progress</div>
        <div className="text-xs text-orange-300 mt-1 font-medium">
          ⚡ Active
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;
