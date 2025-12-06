import { profile } from "../data/profile";
import { motion } from "framer-motion";
import { Code, Database, Brain, Palette } from "lucide-react";

export default function Skills() {
  // Categorize skills for better organization
  const skillCategories = [
    {
      name: "Languages",
      icon: Code,
      color: "indigo",
      skills: ["C++", "Python", "JavaScript"],
    },
    {
      name: "Frontend",
      icon: Palette,
      color: "purple",
      skills: ["React", "Next.js", "TailwindCSS"],
    },
    {
      name: "Backend & Database",
      icon: Database,
      color: "blue",
      skills: ["Node.js", "SQL", "MongoDB", "Postman","Express.js"],
    },
    {
      name: "Machine Learning",
      icon: Brain,
      color: "pink",
      skills: ["TensorFlow", "PyTorch", "OpenCV"],
    },
  ];

  const colorClasses = {
    indigo: {
      bg: "from-indigo-50 to-indigo-100",
      border: "border-indigo-200",
      text: "text-indigo-700",
      iconBg: "bg-indigo-100",
      iconText: "text-indigo-600",
      hover: "hover:border-indigo-300 hover:shadow-indigo-200",
    },
    purple: {
      bg: "from-purple-50 to-purple-100",
      border: "border-purple-200",
      text: "text-purple-700",
      iconBg: "bg-purple-100",
      iconText: "text-purple-600",
      hover: "hover:border-purple-300 hover:shadow-purple-200",
    },
    blue: {
      bg: "from-blue-50 to-blue-100",
      border: "border-blue-200",
      text: "text-blue-700",
      iconBg: "bg-blue-100",
      iconText: "text-blue-600",
      hover: "hover:border-blue-300 hover:shadow-blue-200",
    },
    pink: {
      bg: "from-pink-50 to-pink-100",
      border: "border-pink-200",
      text: "text-pink-700",
      iconBg: "bg-pink-100",
      iconText: "text-pink-600",
      hover: "hover:border-pink-300 hover:shadow-pink-200",
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto py-12 px-4 sm:px-6"
    >
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          A comprehensive toolkit for building modern web applications and ML solutions
        </p>
      </motion.div>

      {/* Skills by Category */}
      <div className="space-y-8">
        {skillCategories.map((category, idx) => {
          const colors = colorClasses[category.color];
          const Icon = category.icon;

          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white border-2 ${colors.border} rounded-2xl p-6 ${colors.hover} hover:shadow-xl transition-all duration-300`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center border ${colors.border}`}>
                  <Icon className={`w-6 h-6 ${colors.iconText}`} />
                </div>
                <h3 className={`text-xl font-bold ${colors.text}`}>
                  {category.name}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition-all duration-200`}
                  >
                    <div className={`w-10 h-10 rounded-lg ${colors.iconBg} flex items-center justify-center`}>
                      <span className={`text-sm font-bold ${colors.iconText}`}>
                        {skill.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className={`text-sm font-semibold ${colors.text}`}>
                      {skill}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* All Skills Cloud (Optional) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 bg-gradient-to-br from-slate-50 to-indigo-50 border-2 border-slate-200 rounded-2xl p-8"
      >
        <h3 className="text-lg font-bold text-slate-700 mb-4 text-center">
          Complete Technology Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {profile.skills.map((skill, idx) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + idx * 0.05 }}
              className="px-4 py-2 bg-white border-2 border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md transition-all duration-200 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}