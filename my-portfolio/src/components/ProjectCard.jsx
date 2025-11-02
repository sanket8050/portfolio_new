import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function ProjectCard({ project, onOpen }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-200/50 hover:border-indigo-200 transition-all duration-300"
    >
      {/* Card Header with gradient background */}
      <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      
      <div className="p-6 space-y-4">
        {/* Title Section */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-500 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 bg-slate-50 text-slate-700 rounded-full font-medium border border-slate-200"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-indigo-600 transition-colors font-medium"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-indigo-600 transition-colors font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          )}

          <button
            onClick={() => onOpen(project)}
            className="ml-auto flex items-center gap-1.5 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors text-sm font-semibold group/btn"
          >
            View Details
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}