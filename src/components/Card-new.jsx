/* eslint-disable react/prop-types */
import Github from "./GitHubL";
import LinkC from "./Link";
import ProjectBadge from "./ProjectBadge";
import TechTag from "./TechTag";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Modal Component using Portal to render outside normal DOM hierarchy
const Modal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
      }}
    >
      <div
        className="bg-gray-900/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl relative animate-modalSlideIn max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative">
          {/* Project Image */}
          <div
            className={`${project.image} h-64 sm:h-80 bg-cover bg-center rounded-t-2xl relative`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent rounded-t-2xl" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center transition-colors border border-white/20 z-10"
            >
              <span className="text-white text-lg">✕</span>
            </button>

            {/* Featured badge in modal */}
            {project.featured && (
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full bg-orange-500 text-black">
                  ⭐ Featured Project
                </span>
              </div>
            )}

            {/* Title overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 bg-cyan-500 text-black text-sm font-medium rounded-lg">
                  {project.type}
                </span>
                <ProjectBadge status={project.status} />
              </div>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6">
          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              About this project
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech, index) => (
                <TechTag key={index} tech={tech} />
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {project.github && project.github !== "private" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <Github />
                <span className="font-medium">View Code</span>
              </a>
            )}

            {project.github === "private" && (
              <div className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-500/20 border-2 border-gray-400/50 text-gray-300 rounded-xl cursor-not-allowed">
                <span className="text-lg">🔒</span>
                <span className="font-medium">Private Repository</span>
              </div>
            )}

            {project.live &&
              project.live !== "beta-closed" &&
              project.live !== "mobile-app" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black rounded-xl transition-all duration-300 hover:scale-105 font-medium"
                >
                  <LinkC />
                  <span>Live Demo</span>
                </a>
              )}

            {project.live === "beta-closed" && (
              <div className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-orange-500/20 border-2 border-orange-400/50 text-orange-300 rounded-xl cursor-not-allowed">
                <span className="text-lg">🔒</span>
                <span className="font-medium">Beta Cerrada</span>
              </div>
            )}

            {project.live === "mobile-app" && project.github === "private" && (
              <div className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-orange-500/20 border-2 border-orange-400/50 text-orange-300 rounded-xl cursor-not-allowed">
                <span className="text-lg">📱</span>
                <span className="font-medium">Mobile App - Private</span>
              </div>
            )}

            {project.live === "mobile-app" && project.github !== "private" && (
              <div className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-500/20 border-2 border-gray-400/50 text-gray-300 rounded-xl cursor-not-allowed">
                <span className="text-lg">📱</span>
                <span className="font-medium">Mobile App</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Use portal to render modal at document.body level, bypassing all parent containers
  return createPortal(modalContent, document.body);
};

const Card = ({
  title,
  description,
  url,
  type,
  tecnologys,
  githubLink,
  webLink,
  status,
  featured = false,
}) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const techArray = tecnologys
    ? tecnologys.split("|").map((tech) => tech.trim())
    : [];

  // Extract image URL from Tailwind class
  const extractImageUrl = (urlClass) => {
    if (!urlClass) return "";
    const match = urlClass.match(/url\(['"]?([^'"]+)['"]?\)/);
    return match ? match[1] : "";
  };

  const project = {
    title,
    description,
    image: url, // url contiene la clase de background de Tailwind
    type,
    technologies: techArray,
    github: githubLink,
    live: webLink,
    status,
    featured,
  };

  return (
    <>
      {/* Minimalist Card Design */}
      <div
        data-aos="fade-up"
        onClick={handleCardClick}
        className={`group relative cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:z-10
          ${
            featured
              ? "bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900/30"
              : "bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900/30"
          }
          rounded-2xl p-6 border border-white/10 backdrop-blur-sm 
          shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${extractImageUrl(url)})`,
            }}
          ></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full min-h-[280px]">
          {/* Top Section - Badges and Status */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm border-2
                ${
                  featured
                    ? "bg-orange-600/90 text-white border-orange-400"
                    : "bg-cyan-600/90 text-white border-cyan-400"
                }`}
              >
                {type}
              </span>
              {featured && (
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-orange-600/90 text-white border-2 border-orange-400 backdrop-blur-sm">
                  ⭐ Featured
                </span>
              )}
            </div>
            <div className="self-start sm:self-auto">
              <ProjectBadge status={status} />
            </div>
          </div>

          {/* Main Content with enhanced typography */}
          <div className="flex-1">
            {/* Title with text shadow */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 leading-tight drop-shadow-lg">
              {title}
            </h3>

            {/* Description with better background */}
            <div className="bg-gray-800/60 rounded-lg p-3 mb-4 backdrop-blur-sm border border-gray-600/30">
              <p className="text-gray-200 text-sm leading-relaxed line-clamp-2">
                {description}
              </p>
            </div>

            {/* Tech Stack with stronger background - no bottom line, just spacing */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs text-gray-300 font-semibold bg-gray-800/80 px-2 py-1 rounded border border-gray-600/50">
                Tech:
              </span>
              <div className="flex gap-1 flex-wrap">
                {techArray.slice(0, 2).map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded-md bg-gray-700/90 text-gray-100 border border-gray-500/50 font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {techArray.length > 2 && (
                  <span className="text-xs px-2 py-1 text-gray-300 font-semibold bg-gray-800/80 rounded border border-gray-600/50">
                    +{techArray.length - 2} more
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Action - simplified without border line */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-800/40 -mx-6 rounded-b-2xl">
            <span className="text-xs text-gray-200 font-semibold">
              Click to explore project
            </span>
            <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              <span
                className={`${
                  featured ? "text-orange-400" : "text-cyan-400"
                } text-sm font-bold`}
              >
                →
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Hover Effect */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
          ${
            featured
              ? "bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/5"
              : "bg-gradient-to-br from-cyan-500/10 via-transparent to-cyan-500/5"
          }`}
        ></div>

        {/* Stronger Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>

      {/* Modal using Portal - renders outside normal DOM tree */}
      <Modal isOpen={showModal} onClose={closeModal} project={project} />
    </>
  );
};

export default Card;
