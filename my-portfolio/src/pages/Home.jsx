import { profile } from "../data/profile";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SiLeetcode } from "react-icons/si";
import codolioIcon from "../assets/codolio.svg";
import { FaGithub } from "react-icons/fa";
import { Mail, MapPin, Download, ArrowRight, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <section
      className="
        min-h-[85vh] flex items-center py-16 px-4 sm:px-6
        bg-black relative rounded-3xl
        border border-emerald-400/30
        backdrop-blur-xl
        shadow-[0_0_30px_rgba(16,185,129,0.35)]
        hover:shadow-[0_0_60px_rgba(16,185,129,0.55)]
        transition-all duration-500
      "
    >
      <div className="w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Badge */}
          <span className="
            inline-block px-4 py-2 rounded-full text-sm font-semibold
            bg-emerald-400/10 text-emerald-400
            border border-emerald-400/30
          ">
            ✨ Available for work
          </span>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-extrabold">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          {/* Title */}
          <p className="text-xl text-slate-300">
            {profile.title}
          </p>

          {/* Intro */}
          <p className="text-slate-400 leading-relaxed">
            {profile.shortIntro}
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-4">

            <Link
              to="/projects"
              className="
                px-6 py-3 rounded-xl font-semibold flex items-center gap-2
                bg-emerald-500 text-black
                hover:bg-emerald-400 transition
              "
            >
              <Briefcase className="w-4 h-4" />
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="
                px-6 py-3 rounded-xl font-semibold
                border border-emerald-400/40 text-emerald-300
                hover:bg-emerald-400/10 transition
              "
            >
              Get in touch
            </Link>

            <a
              href={profile.resumeUrl}
              download
              className="
                px-6 py-3 rounded-xl font-semibold flex items-center gap-2
                border border-emerald-400/40 text-emerald-300
                hover:bg-emerald-400/10 transition
              "
            >
              <Download className="w-5 h-5" />
              Resume
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/sanket8050/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3 rounded-xl flex items-center gap-2 font-semibold
                bg-emerald-400/10 text-emerald-300
                border border-emerald-400/30 hover:bg-emerald-400/20
              "
            >
              <SiLeetcode size={26} />
              LeetCode
            </a>

            {/* Codolio */}
            <a
              href="https://codolio.com/profile/Albert8050"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3 rounded-xl flex items-center gap-2 font-semibold
                bg-emerald-400/10 text-emerald-300
                border border-emerald-400/30 hover:bg-emerald-400/20
              "
            >
              <img src={codolioIcon} alt="Codolio" className="w-12 h-12" />
              Codolio
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/sanket8050"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3 rounded-xl flex items-center gap-2 font-semibold
                bg-emerald-400/10 text-emerald-300
                border border-emerald-400/30 hover:bg-emerald-400/20
              "
            >
              <FaGithub size={22} />
              GitHub
            </a>
          </div>

          {/* INFO CARDS */}
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="bg-black/40 border border-emerald-400/20 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-emerald-400" />
                <span className="text-slate-300">{profile.location}</span>
              </div>
            </div>

            <div className="bg-black/40 border border-emerald-400/20 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Mail className="text-emerald-400" />
                <a
                  href={`mailto:${profile.email}`}
                  className="text-emerald-300 hover:underline truncate"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="
            bg-black/50 p-2 rounded-3xl
            border border-emerald-400/30
            shadow-[0_0_40px_rgba(16,185,129,0.4)]
          ">
            <img
              src="/profile.png"
              alt={profile.name}
              className="w-80 h-[420px] object-cover rounded-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
