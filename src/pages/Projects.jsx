import Card from "../components/Card-new";
import ProjectFilters from "../components/ProjectFilters";
import ProjectStats from "../components/ProjectStats";
import { useState, useMemo } from "react";

// Project data with status and better descriptions - Featured projects first
const projectsData = [
  // FEATURED PROJECTS
  {
    url: "bg-[url('/Alibyme.png')]",
    githubLink: "https://github.com/AngRodSt/ALIBYME",
    webLink: "https://alibyme.vercel.app/",
    title: "ALIBYME",
    type: "Full Stack App",
    status: "inProgress",
    featured: true,
    description:
      "Advanced anime discovery platform powered by AniList GraphQL API. Features AI-powered recommendations, interactive carousels, studio exploration, and comprehensive search functionality with modern responsive design.",
    tecnologys: "Next.js | TypeScript | GraphQL | Tailwindcss | Swiper",
  },
  {
    url: "bg-[url('/Explore.jpeg')]",
    githubLink: "private",
    webLink: "mobile-app",
    title: "Explore",
    type: "Mobile App",
    status: "inProgress",
    featured: true,
    description: (
      <>
        Innovative travel discovery mobile application with interactive maps,
        destination recommendations, and AI-powered travel planning tools.
        Features user-generated content, social sharing, personalized itinerary
        creation with real-time weather integration and OpenAI travel
        suggestions.
        <div className="mt-3 p-2 bg-orange-500/20 border border-orange-400/30 rounded-lg">
          <p className="text-xs text-orange-300">
            🔒 <span className="font-bold">Private Repository</span> - Mobile
            App
          </p>
        </div>
      </>
    ),
    tecnologys: "React Native | Expo | Firebase | OpenAI API | Google API",
  },
  {
    url: "bg-[url('/agroclima.png')]",
    githubLink: "https://github.com/AngRodSt/AgroClima-Vega",
    webLink: "https://agro-clima-vega.vercel.app",
    title: "AgroClima Vega",
    type: "Full Stack App",
    status: "inProgress",
    featured: true,
    description: (
      <>
        Comprehensive precision agriculture solution combining IoT hardware
        (Arduino) with modern web dashboard. Provides 24/7 agricultural
        monitoring with intelligent analysis and automated alerts to optimize
        production in La Vega, Dominican Republic.
        <div className="mt-3 p-2 bg-orange-500/20 border border-orange-400/30 rounded-lg">
          <p className="text-xs text-orange-300">
            🚧 <span className="font-bold">In Development</span> - AgTech
            Platform
          </p>
        </div>
      </>
    ),
    tecnologys:
      "React | TypeScript | Arduino | Tailwindcss | Chart.js | Leaflet",
  },
  {
    url: "bg-[url('/AngrodDesign.png')]",
    githubLink: "https://github.com/AngRodSt/AngRod-Designs",
    webLink: "https://ang-rod-designs.vercel.app",
    title: "AngRod Designs",
    type: "Full Stack App",
    status: "completed",
    featured: true,
    description:
      "Dynamic web application tailored for a small entrepreneurship focused on 3D design and 3D printing services. Integrates an e-commerce section powered by the Shopify API and a custom service request system for personalized 3D design and printing projects.",
    tecnologys: "Next.js | Shopify API | MongoDB | Tailwindcss",
  },
  {
    url: "bg-[url('/worldsxmap.png')]",
    githubLink: "https://github.com/AngRodSt/World-Map-Frontend-V.2",
    webLink: "https://worldsxmapv2.vercel.app/",
    title: "WorldsxMap",
    type: "Full Stack App",
    status: "completed",
    featured: true,
    description: (
      <>
        A dynamic and interactive web application featuring a world map where
        each country serves as a clickable, customizable element. Users can
        select countries, change their colors, and attach personalized notes.
        <div className="mt-3 p-3 bg-black/30 rounded-lg">
          <p className="font-bold text-cyan-300">Test credentials:</p>
          <ul className="text-sm mt-1">
            <li>📧 Email: correo@correo.com</li>
            <li>🔑 Password: 123456</li>
          </ul>
          <p className="text-xs mt-2 text-orange-300">
            ⚠️ Note: The server might take a few seconds to wake up (hosted on
            Render free tier).
          </p>
        </div>
      </>
    ),
    tecnologys: "Next.js | Express | MongoDB | Tailwindcss",
  },
  // REGULAR PROJECTS
  {
    url: "bg-[url('/TankFiller.png')]",
    githubLink: "https://github.com/AngRodSt/Tank-Filler-Application",
    webLink: "mobile-app",
    title: "Tank Filler IoT Controller",
    type: "Mobile App",
    status: "completed",
    featured: false,
    description: (
      <>
        IoT mobile application for remote water tank monitoring and control.
        Features real-time Firebase integration, animated water level
        indicators, manual/automatic pump control, and multi-user tank
        management system.
        <div className="mt-3 p-2 bg-gray-500/20 border border-gray-400/30 rounded-lg">
          <p className="text-xs text-gray-300">
            📱 <span className="font-bold">Mobile App</span> - No disponible en
            web
          </p>
        </div>
      </>
    ),
    tecnologys: "React Native | Expo | Firebase | TypeScript | Reanimated",
  },
  {
    url: "bg-[url('/Veterinary.png')]",
    githubLink: "https://github.com/AngRodSt/APV-Frontend",
    webLink: "https://apvveterinarymanager.netlify.app/",
    title: "Veterinary Patients Manager",
    type: "Full Stack App",
    status: "completed",
    description:
      "Complete management system for veterinary clinics. Enables veterinarians to register, update, and manage appointments efficiently with secure authentication and password recovery.",
    tecnologys: "React | Express | MongoDB | Node.js | Tailwindcss",
  },
  {
    url: "bg-[url('/angrodSearch.png')]",
    githubLink: "https://github.com/AngRodSt/AnimeLibrary",
    webLink: "https://animesearchangrod.azurewebsites.net/",
    title: "Anime Library App",
    type: "Full Stack App",
    status: "completed",
    description:
      "Web application to manage your favorite anime collection. Allows users to create simple accounts and save anime to personalized lists with jQuery autocomplete functionality.",
    tecnologys: "Python | Flask | MySQL",
  },
  {
    url: "bg-[url('/AgenciaViajes.png')]",
    githubLink: "https://github.com/AngRodSt/agencia_de_viajes",
    webLink: "https://agencia-de-viajes-mr4r.onrender.com/",
    title: "Travel Agency",
    type: "Full Stack App",
    status: "completed",
    description:
      "Travel agency simulation that allows managing and dynamically displaying travel information. Users can explore destinations and add testimonials through interactive forms.",
    tecnologys: "Node.js | Express | Tailwindcss | Pug | Sequelize",
  },
  {
    url: "bg-[url('/Courpany.png')]",
    title: "Online Course Store",
    webLink: "https://courpany-as.netlify.app/",
    githubLink: "https://github.com/AngRodSt/Shopping-Cart",
    type: "UI Mockup",
    status: "completed",
    description:
      "Clean and responsive mockup for an online course store. Includes landing page, course listing and a functional shopping cart with localStorage integration.",
    tecnologys: "HTML | JavaScript | CSS",
  },
  {
    url: "bg-[url('/APVTypescript.png')]",
    webLink: "https://apv-type-script.vercel.app/",
    githubLink: "https://github.com/AngRodSt/APV-TypeScript",
    title: "VPM Migrated TypeScript",
    type: "Frontend App",
    status: "completed",
    description:
      "Web application designed to efficiently organize and manage pet appointments. Allows users to add, edit, and delete appointments with an intuitive interface.",
    tecnologys: "HTML | TypeScript | Tailwindcss",
  },
  {
    url: "bg-[url('/Cryptos.png')]",
    githubLink: "https://github.com/AngRodSt/Cripto-Finder",
    webLink: "https://cripto-finder-gamma.vercel.app/",
    type: "Frontend App",
    title: "Crypto Finder",
    status: "completed",
    description:
      "Practical application that allows users to query real-time cryptocurrency values through an API. Users can select different currencies and view their updated exchange rates.",
    tecnologys: "HTML | JavaScript | Tailwindcss",
  },
  {
    url: "bg-[url('/pictureFinder.png')]",
    webLink: "https://picture-finder-lyart.vercel.app/",
    githubLink: "https://github.com/AngRodSt/Picture-Finder",
    title: "PixaBay API Finder",
    type: "Frontend App",
    status: "completed",
    description:
      "Web application that allows users to search and explore high-quality images using the Pixabay API. Simple interface for finding images related to keywords.",
    tecnologys: "HTML | JavaScript | Tailwindcss",
  },
  {
    url: "bg-[url('/Weather.png')]",
    githubLink: "https://github.com/AngRodSt/Weather-FetchApi",
    webLink: "https://weather-fetch-api.vercel.app/",
    title: "Weather Search App",
    type: "Frontend App",
    status: "completed",
    description:
      "Web application that allows users to check current weather, displaying maximum and minimum temperatures for specific locations using a weather API.",
    tecnologys: "HTML | JavaScript | Tailwindcss",
  },
  {
    url: "bg-[url('/Recipes.png')]",
    webLink: "https://recipe-finder-pi-lac.vercel.app/",
    githubLink: "https://github.com/AngRodSt/Recipe-Finder",
    title: "Recipes Finder App",
    type: "Frontend App",
    status: "completed",
    description:
      "Web application that enables users to browse recipes by categories using an API. Showcases a range of dishes with detailed preparation information and ingredients.",
    tecnologys: "HTML | JavaScript | Tailwindcss | Bootstrap",
  },
];

const Projects = () => {
  const [filters, setFilters] = useState({
    type: "all",
    tech: "all",
    status: "all",
  });

  // Filtrar proyectos basado en los filtros activos
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const typeMatch = filters.type === "all" || project.type === filters.type;
      const statusMatch =
        filters.status === "all" || project.status === filters.status;
      const techMatch =
        filters.tech === "all" ||
        (project.tecnologys && project.tecnologys.includes(filters.tech));

      return typeMatch && statusMatch && techMatch;
    });
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <div className="relative min-h-screen pt-24 lg:pt-20 bg-gradient-to-b from-transparent to-cyan-500/90 backdrop-blur-sm cursor-default">
        {/* Header */}
        <div className="text-white text-center mb-8">
          <h1 className="mb-2 covered-by-your-grace-regular text-[min(6rem,15vw)]">
            My <span className="text-cyan-400 neon-text-cyan">Projects</span>
          </h1>
          <p className="montserrat text-lg mb-6">
            Collection of projects I&apos;ve developed
          </p>
        </div>

        {/* Statistics */}
        <div className="container mx-auto px-4 mb-8">
          <ProjectStats projects={projectsData} />
        </div>

        {/* Filters */}
        <div className="container mx-auto px-4">
          <ProjectFilters
            onFilterChange={handleFilterChange}
            projects={projectsData}
          />
        </div>

        {/* Grid de proyectos */}
        <div className="container mx-auto p-4 lg:p-8">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={`${project.title}-${index}`}
                  url={project.url}
                  githubLink={project.githubLink}
                  webLink={project.webLink}
                  title={project.title}
                  type={project.type}
                  description={project.description}
                  tecnologys={project.tecnologys}
                  status={project.status}
                  featured={project.featured}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl text-white mb-2">No projects found</h3>
              <p className="text-gray-300">
                Try adjusting the filters to see more results
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
