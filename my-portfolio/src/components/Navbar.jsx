import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import { Download } from "lucide-react";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Skills", to: "/skills" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const loc = useLocation();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-indigo-200 group-hover:shadow-xl group-hover:shadow-indigo-300 transition-all duration-300">
             SA
            </div>
            {/* Animated border on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
          </div>
          <div className="hidden sm:block">
            <div className="text-slate-800 font-bold text-sm group-hover:text-indigo-600 transition-colors">
              {profile.name}
            </div>
            <div className="text-xs text-slate-500 hidden md:block">
              {profile.title.split(" ")[0]} Developer
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const isActive = loc.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-4 py-2 text-sm font-medium transition-colors"
              >
                <span
                  className={`relative z-10 ${
                    isActive
                      ? "text-indigo-600"
                      : "text-slate-600 hover:text-indigo-600"
                  }`}
                >
                  {l.name}
                </span>
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-indigo-50 rounded-lg border border-indigo-100"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}

          {/* Resume Button */}
          <a
            href={profile.resumeUrl}
            download
            className="ml-4 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm font-semibold shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>

          {/* Theme toggle (desktop) */}
          <div className="ml-3">
            {/* <ThemeToggle /> */}
          </div>
        </nav>

        {/* Mobile Menu + Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {/* <ThemeToggle /> */}
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}