import { profile } from "../data/profile";
import { Heart, Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black">
      
      {/* Subtle neon glow */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <div className="container mx-auto px-6 py-10">
        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-sm border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                SA
              </div>
              <span className="font-semibold text-slate-200">
                {profile.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 flex items-center justify-center md:justify-start gap-1.5">
              © {new Date().getFullYear()} • Built with
              <Heart className="w-4 h-4 text-emerald-400 fill-emerald-400" />
              React & Tailwind
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group p-3 rounded-xl border border-white/10 bg-white/5 hover:border-emerald-400/40 hover:bg-emerald-400/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-emerald-400 transition-colors" />
            </a>

            {/* GitHub */}
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group p-3 rounded-xl border border-white/10 bg-white/5 hover:border-emerald-400/40 hover:bg-emerald-400/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-slate-300 group-hover:text-emerald-400 transition-colors" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              className="group p-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 hover:bg-emerald-400/20 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.2)]"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-emerald-400" />
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-slate-500">
            Open to opportunities • Full-Stack & ML Developer • {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
