"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techIcons: { [key: string]: string } = {
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    Express: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Machine Learning": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    Pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    "API Integration": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    "AI/ML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    API: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  };

  const projects = [
    {
      title: "eCommerce Website",
      image: "/images/ecom.png.png",
      description:
        "Full-featured online store with user authentication, product management, shopping cart, and secure payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/swamyrayudu/Ecom_Mern",
      live: "https://ecom-mern-3.onrender.com/auth/login",
    },
    {
      title: "Food Search Calorie Calculator",
      image: "/images/blog.png.png",
      description:
        "Search foods and get detailed calorie information using a simple, user-friendly interface with nutritional data.",
      tech: ["React", "API Integration", "CSS"],
      github: "https://github.com/swamyrayudu/FITNESS_AND_BLOG_FRONTEND.git",
      live: null,
    },
    {
      title: "Blog Platform",
      image: "/images/fitness.png.png",
      description:
        "Simple blog platform to write, edit, and share posts with others. Features markdown support and user profiles.",
      tech: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/swamyrayudu/FITNESS_AND_BLOG_BACKEND.git",
      live: null,
    },
    {
      title: "Movie Revenue Prediction",
      image: "/images/movie.png",
      description:
        "Predicts box office revenue for movies using machine learning and data analysis on various movie features.",
      tech: ["Python", "Machine Learning", "Pandas"],
      github: "https://github.com/swamyrayudu/Movie-Revenue-prediction",
      live: null,
    },
    {
      title: "AI Chat Bot",
      image: "/images/ai.png",
      description:
        "Interactive AI-powered chat bot for answering questions and assisting users in real time with natural language processing.",
      tech: ["React", "AI/ML", "API"],
      github: "https://github.com/swamyrayudu/chat_bot_react",
      live: "https://chat-bot-ai-git-main-swamyrayudus-projects.vercel.app/",
    },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="bg-background px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base">
            A showcase of my recent work and development projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Image Container - Fixed aspect ratio */}
              <div className="relative w-full aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Icons */}
                <div className="flex items-center gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <div
                      key={tech}
                      className="group/tech relative"
                      title={tech}
                    >
                      <div
                        className={`w-6 h-6 flex items-center justify-center ${
                          tech === "Express" ? "bg-background rounded p-0.5" : ""
                        }`}
                      >
                        <img
                          src={techIcons[tech]}
                          alt={tech}
                          className="w-full h-full object-contain opacity-70 group-hover/tech:opacity-100 transition-opacity"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-secondary text-secondary-foreground text-xs font-medium rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-primary text-primary-foreground text-xs font-medium rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
