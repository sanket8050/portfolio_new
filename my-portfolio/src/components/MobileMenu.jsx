import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "../data/profile";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Home, User, Code, Briefcase, Mail } from "lucide-react";

const menuLinks = [
  { name: "Home", to: "/", icon: Home },
  { name: "About", to: "/about", icon: User },
  { name: "Skills", to: "/skills", icon: Code },
  { name: "Projects", to: "/projects", icon: Briefcase },
  { name: "Contact", to: "/contact", icon: Mail },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  return (
    <div>
      {/* Menu Toggle Button */}
      <button
        onClick={() => setOpen((s) => !s)}
        aria-label="Toggle menu"
        className="relative w-10 h-10 rounded-lg bg-white border-2 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 flex items-center justify-center"
      >
        {open ? (
          <X className="w-5 h-5 text-slate-700" />
        ) : (
          <Menu className="w-5 h-5 text-slate-700" />
        )}
      </button>

      {/* Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed right-4 top-20 w-72 bg-white border-2 border-slate-200 rounded-2xl shadow-2xl shadow-slate-300/50 z-50 overflow-hidden"
            >
              {/* Menu Header */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm text-white flex items-center justify-center font-bold text-sm">
                    SA
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">
                      {profile.name}
                    </div>
                    <div className="text-indigo-100 text-xs">
                      {profile.title.split(" ")[0]} Dev
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Links */}
              <div className="p-3">
                {menuLinks.map((link) => {
                  const isActive = loc.pathname === link.to;
                  const Icon = link.icon;

                  return (
                    <Link
                      key={link.to}
                      onClick={() => setOpen(false)}
                      to={link.to}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 mb-1 ${
                        isActive
                          ? "bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100"
                          : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{link.name}</span>
                      {isActive && (
                        <div className="ml-auto w-2 h-2 rounded-full bg-indigo-600"></div>
                      )}
                    </Link>
                  );
                })}

                {/* Divider */}
                <div className="my-3 border-t border-slate-200"></div>

                {/* Resume Download */}
                <a
                  href={profile.resumeUrl}
                  download
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-indigo-200 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>

              {/* Footer */}
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-200">
                <p className="text-xs text-slate-500 text-center">
                  {profile.location}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}