"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="bg-background border-t border-border text-center text-muted-foreground py-6"
    >
      &copy; {new Date().getFullYear()}{" "}
      <span className="text-primary font-semibold">RVV Swamy.</span> All rights reserved.
    </motion.footer>
  );
};

export default Footer;
