import { profile } from "../data/profile";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, MapPin, Download, ArrowRight, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <section className="min-h-[85vh] flex items-center py-16">
      <div className="w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full text-sm font-semibold border border-indigo-100 shadow-sm">
              ✨ Available for work
            </span>
          </motion.div>
          
          {/* Name with gradient */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          
          {/* Title */}
          <p className="text-xl text-slate-600 leading-relaxed">
            {profile.title}
          </p>
          
          {/* Short Intro */}
          <p className="text-base text-slate-500 leading-relaxed">
            {profile.shortIntro}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/projects" 
              className="group px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-300 transition-all duration-300 flex items-center gap-2 font-semibold"
            >
              <Briefcase className="w-4 h-4" />
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-white border-2 border-indigo-200 text-indigo-700 rounded-xl hover:bg-indigo-50 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Get in touch
            </Link>
            
            <a 
              href={profile.resumeUrl} 
              download 
              className="px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex items-center gap-2 font-semibold"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-white rounded-xl p-4 border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center border border-indigo-100">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">Location</div>
                  <div className="text-sm font-semibold text-slate-800">{profile.location}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center border border-indigo-100">
                  <Mail className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">Email</div>
                  <a 
                    href={`mailto:${profile.email}`} 
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors truncate block"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div 
          initial={{ scale: 0.98, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.55 }} 
          className="flex justify-center"
        >
          <div className="relative">
            {/* Animated Background Blobs */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-indigo-300 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
            
            {/* Main Image Card */}
            <div className="relative bg-white rounded-3xl p-2 shadow-2xl shadow-indigo-200/50 border border-slate-100">
              <div className="w-80 h-96 md:w-96 md:h-[450px] rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative">
                <img 
                  src="/profile.png" 
                  alt={profile.name} 
                  className="w-100 h-125 object-cover"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback initials (shows if image fails) */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
                  
                </div>
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Floating Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 left-6 bg-white rounded-2xl shadow-xl shadow-slate-300/50 px-5 py-3 flex items-center gap-3 border border-slate-100"
            >
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-sm font-bold text-slate-800">Available for hire</span>
            </motion.div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}