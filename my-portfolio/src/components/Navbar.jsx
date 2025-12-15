import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import MobileMenu from "./MobileMenu";
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
      className="
        sticky top-0 z-50
        bg-black/70 backdrop-blur-xl
        border-b border-white/10
        shadow-[0_10px_30px_-10px_rgba(0,255,170,0.15)]
      "
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div
              className="
                w-10 h-10 rounded-xl
                bg-black border border-white/10
                text-green-400 font-bold
                flex items-center justify-center
                shadow-[0_0_20px_rgba(0,255,170,0.35)]
                group-hover:shadow-[0_0_28px_rgba(0,255,170,0.6)]
                transition-all
              "
            >
              SA
            </div>
          </div>

          <div className="hidden sm:block">
            <div className="text-white font-semibold text-sm">
              {profile.name}
            </div>
            <div className="text-xs text-white/50">
              Full-Stack Developer
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {links.map((l) => {
            const isActive = loc.pathname === l.to;

            return (
              <Link
                key={l.to}
                to={l.to}
                className="
                  relative px-4 py-2 rounded-lg
                  text-sm font-medium
                  transition-all
                "
              >
                <span
                  className={`
                    relative z-10
                    ${isActive
                      ? "text-green-400"
                      : "text-white/70 hover:text-green-300"}
                  `}
                >
                  {l.name}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="
                      absolute inset-0 rounded-lg
                      bg-green-500/10
                      border border-green-500/20
                      shadow-[0_0_20px_rgba(0,255,170,0.35)]
                    "
                    transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}

          {/* Resume Button */}
          <a
            href={profile.resumeUrl}
            download
            className="
              ml-4 px-4 py-2 rounded-lg
              bg-green-500/15
              border border-green-500/30
              text-green-400 text-sm font-semibold
              shadow-[0_0_20px_rgba(0,255,170,0.35)]
              hover:bg-green-500/25
              hover:shadow-[0_0_30px_rgba(0,255,170,0.6)]
              transition-all flex items-center gap-2
            "
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}
