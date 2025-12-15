import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { GraduationCap, Code, Briefcase, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6"
    >
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="mt-6 space-y-4 text-slate-300 leading-relaxed">
          <p className="text-lg">
            I'm{" "}
            <span className="font-semibold text-green-400">
              {profile.name}
            </span>
            , a <span className="font-semibold">{profile.title}</span> based in{" "}
            {profile.location}.
          </p>

          <p>
            I build <span className="text-green-300 font-medium">production-ready</span> web
            applications and ML systems — from clean UI to scalable backend
            pipelines.
          </p>

          <p>
            I enjoy solving real-world problems with{" "}
            <span className="text-green-300 font-medium">
              engineering + design thinking
            </span>
            , keeping systems fast, simple, and user-focused.
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-black/60 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)] transition-all"
        >
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/30">
              <GraduationCap className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-green-300 mb-2">
                Education
              </h3>
              <p className="text-sm text-slate-300">
                Engineering background with focus on DSA, ML, DBMS and Computer
                Vision.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-black/60 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all"
        >
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
              <Briefcase className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-emerald-300 mb-2">
                Experience
              </h3>
              <p className="text-sm text-slate-300">
                Built ML-based MRI analysis, dashboards, APIs, and full-stack
                products.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Technical Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="bg-black/60 backdrop-blur-xl border border-lime-500/20 rounded-2xl p-6 hover:border-lime-400 hover:shadow-[0_0_25px_rgba(132,204,22,0.25)] transition-all"
        >
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-lime-500/10 flex items-center justify-center border border-lime-500/30">
              <Code className="w-6 h-6 text-lime-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-lime-300 mb-2">
                Technical Focus
              </h3>
              <p className="text-sm text-slate-300">
                React, Next.js, Node.js, Python, TensorFlow, PyTorch, scalable
                system design.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What Drives Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="bg-black/60 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)] transition-all"
        >
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/30">
              <Lightbulb className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-green-300 mb-2">
                What Drives Me
              </h3>
              <p className="text-sm text-slate-300">
                Solving hard problems, building elegant systems, and continuously
                learning.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="mt-10 grid grid-cols-3 gap-4"
      >
        {[
          { label: "Projects", value: "9+" },
          { label: "Technologies", value: `${profile.skills.length}+` },
          { label: "Users Impacted", value: "50+" },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-black/60 border border-green-500/20 rounded-xl p-4 text-center hover:shadow-[0_0_20px_rgba(34,197,94,0.25)] transition-all"
          >
            <div className="text-3xl font-bold text-green-400">
              {s.value}
            </div>
            <div className="text-sm text-slate-400 mt-1">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
