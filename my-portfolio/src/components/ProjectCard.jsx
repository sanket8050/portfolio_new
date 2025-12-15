import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Tilt from "./Tilt";

export default function ProjectCard({ project, onOpen }) {
  return (
    <Tilt className="rounded-2xl">
      <motion.article
        layout
        whileHover={{ y: -10, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="
          group relative overflow-hidden rounded-2xl
          bg-black/80
          border border-emerald-500/20
          hover:border-emerald-400/50
          shadow-lg shadow-emerald-500/10
          hover:shadow-2xl hover:shadow-emerald-500/30
          transition-all duration-300
        "
      >
        {/* Neon top bar */}
        <div className="h-1 bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400" />

        {/* Glow background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-lime-400/20 blur-3xl rounded-full" />
        </div>

        <div className="relative p-6 space-y-4">
          {/* Title */}
          <div>
            <h3 className="text-xl font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-emerald-200/60">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-emerald-100/70 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="
                  text-xs px-3 py-1 rounded-full
                  bg-emerald-500/10
                  text-emerald-300
                  border border-emerald-400/20
                  hover:bg-emerald-400/20
                  transition
                "
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-4 border-t border-emerald-500/10">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-sm text-emerald-300 hover:text-emerald-200 transition"
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
                className="flex items-center gap-1.5 text-sm text-emerald-300 hover:text-emerald-200 transition"
              >
                <ExternalLink className="w-4 h-4" />
                Live
              </a>
            )}

            <button
              onClick={() => onOpen(project)}
              className="
                ml-auto flex items-center gap-2
                px-4 py-2 rounded-lg
                bg-gradient-to-r from-emerald-400 to-lime-400
                text-black font-semibold text-sm
                hover:from-emerald-300 hover:to-lime-300
                shadow-md shadow-emerald-500/30
                transition-all
              "
            >
              View Details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.article>
    </Tilt>
  );
}
