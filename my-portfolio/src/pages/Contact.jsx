import { profile } from "../data/profile";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Download, Send } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Open to internships, collaborations, and full-time roles. Let's build something amazing together!
        </p>
      </div>

      {/* Main Contact Card */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left - Primary Contact */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {/* Email Card */}
          <a
            href={`mailto:${profile.email}?subject=Opportunity from Portfolio`}
            className="block group bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl p-6 shadow-xl shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-300 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-indigo-100 mb-1">
                  Email Me
                </div>
                <div className="font-semibold text-lg break-all">
                  {profile.email}
                </div>
              </div>
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>

          {/* Phone Card */}
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center border border-indigo-100">
                <Phone className="w-7 h-7 text-indigo-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-500 mb-1">
                  Phone
                </div>
                <a
                  href={`tel:${profile.phone}`}
                  className="font-semibold text-lg text-slate-800 hover:text-indigo-600 transition-colors"
                >
                  {profile.phone}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - Social Links & Resume */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          {/* LinkedIn */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg hover:bg-blue-50 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <Linkedin className="w-7 h-7 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-slate-500 mb-1">
                LinkedIn
              </div>
              <div className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                Connect with me
              </div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-slate-400 hover:shadow-lg hover:bg-slate-50 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
              <Github className="w-7 h-7 text-slate-800" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-slate-500 mb-1">
                GitHub
              </div>
              <div className="font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">
                View my code
              </div>
            </div>
          </a>

          {/* Resume Download */}
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl p-6 hover:from-slate-900 hover:to-black shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <Download className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-slate-300 mb-1">
                Download
              </div>
              <div className="font-semibold text-lg">
                Resume / CV
              </div>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Quick Response Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 border border-green-200 rounded-full">
          <div className="relative">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
            <div className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping"></div>
          </div>
          <span className="text-sm font-semibold text-green-700">
            I typically respond within 24 hours
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
}