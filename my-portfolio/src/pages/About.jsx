import { motion } from "framer-motion";
import { profile } from "../data/profile";
import ThemeToggle from "../components/ThemeToggle";
import { GraduationCap, Code, Briefcase, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6"
    >
      {/* Header */}
      <div className="mb-12">
          
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
          <p className="text-lg">
            I'm <span className="font-semibold text-indigo-600">{profile.name}</span>, 
            a <span className="font-semibold">{profile.title}</span> based in {profile.location}.
          </p>
          <p>
            I focus on building production-quality web applications and ML prototypes — from 
            designing data pipelines and models to deploying results as consumer-grade experiences. 
            My work bridges the gap between powerful backend systems and intuitive user interfaces.
          </p>
          <p>
            I'm passionate about creating scalable solutions that solve real-world problems, 
            whether it's building full-stack applications with modern frameworks or implementing 
            machine learning models for data-driven insights.
          </p>
        </div>
      </div>

      {/* Info Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100 transition-all duration-300 group"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center border border-indigo-100 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-slate-800 mb-2">Education</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pursuing Engineering with focus on Computer Science. 
                Relevant coursework includes Data Structures & Algorithms, 
                Machine Learning, Database Management Systems, and Computer Vision.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100 transition-all duration-300 group"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center border border-purple-100 group-hover:scale-110 transition-transform">
              <Briefcase className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-slate-800 mb-2">Experience</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Worked on ML-based MRI analysis projects, developed multiple 
                full-stack prototypes, and built data analytics tools. 
                Experienced with end-to-end product development.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Technical Skills Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 group"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center border border-blue-100 group-hover:scale-110 transition-transform">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-slate-800 mb-2">Technical Focus</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Specializing in React, Next.js, Node.js for web development. 
                Proficient in Python, TensorFlow, and PyTorch for machine learning. 
                Strong foundation in data structures and algorithms.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Interests Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-100 transition-all duration-300 group"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center border border-amber-100 group-hover:scale-110 transition-transform">
              <Lightbulb className="w-6 h-6 text-amber-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-slate-800 mb-2">What Drives Me</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Passionate about turning complex data into actionable insights 
                and building intuitive user experiences. Love solving challenging 
                problems and learning new technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats or Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 grid grid-cols-3 gap-4"
      >
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 text-center border border-indigo-100">
          <div className="text-3xl font-bold text-indigo-600">9+</div>
          <div className="text-sm text-slate-600 mt-1">Projects</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 text-center border border-purple-100">
          <div className="text-3xl font-bold text-purple-600">{profile.skills.length}+</div>
          <div className="text-sm text-slate-600 mt-1">Technologies</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 text-center border border-blue-100">
          <div className="text-3xl font-bold text-blue-600">50+</div>
          <div className="text-sm text-slate-600 mt-1">Users Reached</div>
        </div>
      </motion.div>
    </motion.section>
  );
}