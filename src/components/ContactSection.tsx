"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      label: "Email",
      value: "swamyrayudu7288@gmail.com",
      href: "mailto:swamyrayudu7288@gmail.com",
    },
    {
      label: "Phone",
      value: "+91 7288819391",
      href: "tel:+917288819391",
    },
    {
      label: "Location",
      value: "Draksharama, Andhra Pradesh",
      href: null,
    },
  ];

  const socialLinks = [
    {
      href: "https://wa.me/7288819391",
      icon: FaWhatsapp,
      label: "WhatsApp",
    },
    {
      href: "https://www.instagram.com/swamyrayudu/",
      icon: FaInstagram,
      label: "Instagram",
    },
    {
      href: "https://github.com/swamyrayudu",
      icon: FaGithub,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/rayudu-veera-venkata-swamy/",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-background px-4 sm:px-8 py-20 max-w-full mx-auto"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's build something amazing together
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-8 sm:p-12"
        >
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-muted-foreground text-sm font-medium mb-2">
                  {info.label}
                </p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-foreground font-medium">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8"></div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label={link.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-7 h-7" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
