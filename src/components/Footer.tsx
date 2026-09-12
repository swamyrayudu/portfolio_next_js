"use client";

const Footer = () => {
  return (
    <footer className="grid-background border-t border-border/50 py-10 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-foreground">RVV Swamy</p>
          <p className="text-xs text-muted-foreground mt-0.5">Full-Stack Developer · Draksharama, AP</p>
        </div>

        <p className="text-xs font-mono text-muted-foreground text-center">
          Built with{" "}
          <span className="text-foreground font-medium">Next.js</span>,{" "}
          <span className="text-foreground font-medium">Tailwind CSS</span> &{" "}
          <span className="text-foreground font-medium">Framer Motion</span>
        </p>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
