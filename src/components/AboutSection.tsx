"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "B.Tech in Artificial Intelligence and Data Science",
      institution: "Kakinada Institute of Engineering and Technology",
      duration: "2023 – 2027",
      location: "Kakinada",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Modern GRC Junior College",
      duration: "2021 – 2023",
      score: "84%",
      location: "Ramachandrapuram",
    },
  ];

  const experience = [
    {
      role: "Full Stack Developer",
      company: "Innov2Grow",
      duration: "Dec 2025 – Present",
      location: "Bengaluru, Karnataka (Remote)",
      responsibilities: [
        "Worked as a Full Stack Developer Intern at Innov2Grow LLP under the Innkaro ecosystem, developing real product features using React, Tailwind, and Express.js",
        "Built and integrated backend APIs with PostgreSQL/Supabase, ensuring smooth data flow across the application",
        "Collaborated with teams on UI development, debugging, and code optimization for production readiness",
        "Gained hands-on experience in startup-level workflows, deployment, and writing maintainable full-stack code",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "K-HUB (KIET)",
      duration: "Aug 2025 – Present",
      location: "Kakinada",
      responsibilities: [
        "Working on the Local Hunt Project, a full-stack web application connecting offline stores with customers",
        "Focused on backend development using Next.js, Express.js, PostgreSQL, Drizzle ORM, and BetterAuth",
        "Built and optimized RESTful APIs for product catalog, orders, and location-based search",
        "Designed scalable database schemas in PostgreSQL for efficient data management",
      ],
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left - Profile Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col items-center justify-center"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden mb-6 group">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl p-[3px] transition-all duration-300 group-hover:from-primary/30 group-hover:via-primary/20">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-background">
                  <img
                    src="/images/IMG_20250626_072109.jpg"
                    alt="RVV Swamy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Subtle outer glow */}
              <div className="absolute inset-0 rounded-2xl shadow-lg shadow-primary/5"></div>
            </div>

            {/* Quick Info - Centered */}
            <div className="text-center w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Rayudu Veera Venkata Swamy
              </h3>
              <p className="text-primary/80 font-medium mb-4">
                Full-Stack Developer
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Draksharama, Andhra Pradesh
              </div>
            </div>
          </motion.div>

          {/* Right - Experience & Education with Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="w-full sm:w-auto mb-6 backdrop-blur-xl bg-muted/40 border border-primary/10 shadow-lg">
                <TabsTrigger value="experience" className="flex items-center gap-2 data-[state=active]:bg-background/80 data-[state=active]:backdrop-blur-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="flex items-center gap-2 data-[state=active]:bg-background/80 data-[state=active]:backdrop-blur-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  Education
                </TabsTrigger>
              </TabsList>

              {/* Experience Tab Content */}
              <TabsContent value="experience" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                    Professional Experience
                  </h3>
                </div>

                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-5 sm:p-6 border border-border"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-card-foreground mb-1">
                          {exp.role}
                        </h4>
                        <p className="text-primary/70 font-medium text-sm sm:text-base">
                          {exp.company} • {exp.location}
                        </p>
                      </div>
                      <span className="text-muted-foreground text-sm mt-2 sm:mt-0 inline-flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {exp.duration}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-muted-foreground text-sm"
                        >
                          <span className="text-primary/60 mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                </motion.div>
              </TabsContent>

              {/* Education Tab Content */}
              <TabsContent value="education" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                    Education
                  </h3>
                </div>

                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-5 sm:p-6 border border-border"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex-1">
                          <h4 className="text-base sm:text-lg font-bold text-card-foreground mb-2">
                            {edu.degree}
                          </h4>
                          <p className="text-primary/70 font-medium text-sm sm:text-base mb-1">
                            {edu.institution}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {edu.location}
                          </p>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:text-right">
                          <span className="text-muted-foreground text-sm inline-flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {edu.duration}
                          </span>
                          {edu.score && (
                            <p className="text-primary/70 font-medium text-sm mt-2">
                              {edu.score}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
