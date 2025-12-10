// Edit this file to change text, links, projects, skills etc.
// NOTE: I avoided adding the portfolio URL from your resume file.

export const profile = {
  name: "Sanket Adsare",
  title: "Full-Stack & Machine Learning Developer",
  location: "Pune, India",
  email: "sanketadsare5@gmail.com",
  phone: "+91-8010788050",
  resumeUrl: "/Sanket_Adsare_resume.pdf", // put your resume PDF into public/resume.pdf
  linkedin: "https://www.linkedin.com/in/sanket-adsare-573659257/", // from resume. :contentReference[oaicite:1]{index=1}
  github: "https://github.com/sanket8050", // from resume. :contentReference[oaicite:2]{index=2}
  shortIntro:
    "I build scalable web applications and ML-powered tools. I enjoy turning data into products and building intuitive UI/UX with React and Tailwind.",
  projects: [
    {
      id: "equinox",
      title: "Equinox",
      subtitle: "Smart Expense & Organisation Tracker",
      description:
        "Group expense tracker with splitting & dashboards. Built with Next.js (TypeScript), Prisma and PostgreSQL.",
      tech: ["Next.js", "TypeScript", "Prisma", "Postgres", "Tailwind"],
      repo: "https://github.com/sanket8050/equinox", // from resume. :contentReference[oaicite:4]{index=4}
      live: "https://sanket8050-equinox.vercel.app",
    },
    {
      id: "statusly",
      title: "Statusly",
      subtitle: "Live Shop Availability & Menu Tracking (Ongoing)",
      description:
        "Full-stack MERN app for real-time shop status and menus. Responsive React frontend with Tailwind and real-time updates.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      repo: "https://github.com/sanket8050/projects-react/tree/main/Statusly%5Bv2%5D", // add GitHub link if you want
      live: "", // add live link (do NOT add portfolio link from the resume)
    },
    {
      id: "ezchange",
      title: "EzChange",
      subtitle: "Book Exchange Platform",
      description:
        "Platform for students to exchange books. Designed responsive UI and onboarding flows for 50+ pilot users.",
      tech: ["Next.js", "PostgreSQL", "Tailwind"],
      repo: "https://github.com/sanket8050/EzChange", // example from resume; replace if needed. :contentReference[oaicite:3]{index=3}
      live: "",
    },
    
    {
      id: "razorpay",
      title: "Razorpay Integration (E-commerce)",
      subtitle: "Payment gateway integration demo",
      description:
        "Prototype integrating Razorpay with React + Node.js enabling secure payment flows and responsive checkout.",
      tech: ["React", "Node.js", "MongoDB", "Razorpay"],
      repo: "https://github.com/sanket8050/projects-react/tree/main/razorpay-mern%20p2", // from resume. :contentReference[oaicite:5]{index=5}
      live: "",
    },
  ],
  skills: [
    "C++",
    "Python",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "git",
    "github",
    "SQL",
    "MongoDB",
    "Postman",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "TailwindCSS",
    
  ],
};
