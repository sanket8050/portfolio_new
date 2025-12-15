import { profile } from "../data/profile";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Download, Send } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Open to internships, collaborations, and full-time roles. Let’s build something impactful.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {/* EMAIL CARD — FIXED */}
          <a
            href={`mailto:${profile.email}?subject=Opportunity from Portfolio`}
            className="
              group block rounded-2xl p-[1px]
              bg-gradient-to-r from-green-400/60 to-emerald-500/60
              hover:shadow-[0_0_30px_rgba(34,197,94,0.35)]
              transition-all duration-300
            "
          >
            <div className="rounded-2xl bg-black/80 backdrop-blur-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-green-300 mb-1">Email Me</div>
                  <div className="font-semibold text-lg text-white break-all">
                    {profile.email}
                  </div>
                </div>
                <Send className="w-5 h-5 text-green-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </a>

          {/* PHONE */}
          <div className="bg-black/80 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6 hover:border-green-400/40 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center">
                <Phone className="w-7 h-7 text-green-400" />
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-1">Phone</div>
                <a
                  href={`tel:${profile.phone}`}
                  className="font-semibold text-lg text-white hover:text-green-400 transition-colors"
                >
                  {profile.phone}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          {/* LINKEDIN */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 bg-black/80 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6 hover:border-green-400/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center">
              <Linkedin className="w-7 h-7 text-green-400" />
            </div>
            <div>
              <div className="text-sm text-slate-400 mb-1">LinkedIn</div>
              <div className="font-semibold text-white group-hover:text-green-400 transition-colors">
                Connect with me
              </div>
            </div>
          </a>

          {/* GITHUB */}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 bg-black/80 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6 hover:border-green-400/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center">
              <Github className="w-7 h-7 text-green-400" />
            </div>
            <div>
              <div className="text-sm text-slate-400 mb-1">GitHub</div>
              <div className="font-semibold text-white group-hover:text-green-400 transition-colors">
                View my code
              </div>
            </div>
          </a>

          {/* RESUME */}
          <a
            href={profile.resumeUrl}
            download
            className="
              group flex items-center gap-4 rounded-2xl p-[1px]
              bg-gradient-to-r from-green-400/60 to-emerald-500/60
              hover:shadow-[0_0_30px_rgba(34,197,94,0.35)]
              transition-all duration-300
            "
          >
            <div className="flex w-full items-center gap-4 bg-black/80 backdrop-blur-xl rounded-2xl p-6">
              <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Download className="w-7 h-7 text-green-400" />
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-1">Download</div>
                <div className="font-semibold text-white">Resume / CV</div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>

      {/* RESPONSE BADGE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-center"
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-full">
          <div className="relative">
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
            <div className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping"></div>
          </div>
          <span className="text-sm font-semibold text-green-400">
            I typically respond within 24 hours
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
}
  