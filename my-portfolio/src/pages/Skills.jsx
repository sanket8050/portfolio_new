import { profile } from "../data/profile";
import { motion } from "framer-motion";
import { Code, Database, Brain, Palette } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      name: "Languages",
      icon: Code,
      glow: "shadow-emerald-500/20",
      border: "border-emerald-500/30",
      iconColor: "text-emerald-400",
      skills: ["C++", "Python", "JavaScript"],
    },
    {
      name: "Frontend",
      icon: Palette,
      glow: "shadow-purple-500/20",
      border: "border-purple-500/30",
      iconColor: "text-purple-400",
      skills: ["React", "Next.js", "TailwindCSS"],
    },
    {
      name: "Backend & Database",
      icon: Database,
      glow: "shadow-blue-500/20",
      border: "border-blue-500/30",
      iconColor: "text-blue-400",
      skills: ["Node.js", "Express.js", "MongoDB", "SQL", "Postman"],
    },
    {
      name: "Machine Learning",
      icon: Brain,
      glow: "shadow-pink-500/20",
      border: "border-pink-500/30",
      iconColor: "text-pink-400",
      skills: ["TensorFlow", "PyTorch", "OpenCV"],
    },
  ];

  return (
    <section className="relative min-h-screen bg-black px-6 py-20">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.08),_transparent_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl">
            Technologies and tools I use to build scalable, performant and
            intelligent systems.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid gap-10">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className={`relative rounded-2xl border ${cat.border} bg-[#0b0f14] p-6 md:p-8 
                shadow-xl ${cat.glow} hover:shadow-2xl transition-all duration-300`}
              >
                {/* neon edge */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />

                {/* Header */}
                <div className="relative flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-black border ${cat.border} flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${cat.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {cat.name}
                  </h3>
                </div>

                {/* Skills */}
                <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.08 }}
                      className="group rounded-xl border border-white/10 bg-black px-4 py-3 
                      text-sm font-medium text-slate-300 
                      hover:text-white hover:border-white/30 
                      transition-all duration-200"
                    >
                      <span className="relative z-10">{skill}</span>
                      <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 rounded-2xl border border-white/10 bg-[#0b0f14] p-8 shadow-xl"
        >
          <h3 className="text-lg font-semibold text-white text-center mb-6">
            Complete Tech Stack
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-white/10 bg-black text-sm 
                text-slate-400 hover:text-white hover:border-white/30 hover:shadow-md 
                transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
