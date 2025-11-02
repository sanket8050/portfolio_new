import { profile } from "../data/profile";
import { Heart, Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-50 to-indigo-50 border-t border-slate-200 mt-20">
      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Brand & Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-xs">
                SA
              </div>
              <span className="font-bold text-slate-800">{profile.name}</span>
            </div>
            <p className="text-sm text-slate-600 flex items-center justify-center md:justify-start gap-1.5">
              © {new Date().getFullYear()} • Built with 
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> 
              using React & Tailwind
            </p>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-slate-600 group-hover:text-blue-600 transition-colors" />
              <span className="text-sm font-medium text-slate-600 group-hover:text-blue-600 transition-colors hidden sm:inline">
                LinkedIn
              </span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-slate-600 group-hover:text-slate-900 transition-colors" />
              <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors hidden sm:inline">
                GitHub
              </span>
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">
                Email
              </span>
            </a>
          </div>
        </div>

        {/* Bottom - Additional Info */}
        <div className="mt-6 pt-6 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-500">
            Open to opportunities • Full-Stack & ML Developer • Based in {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}