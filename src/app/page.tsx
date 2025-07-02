
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white dark:bg-gray-900 sticky top-0 z-10 transition-colors duration-300">
        <div className="text-2xl font-bold tracking-tight">RVV Swamy</div>
        <div className="flex items-center">
          <ul className="flex gap-6 text-lg">
            <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a></li>
            <li><a href="#blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</a></li>
            <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>

      {/* About Me */}
      <section id="about" className="flex flex-col md:flex-row items-center gap-8 px-8 py-16 max-w-5xl mx-auto animate-fade-in h-[600px]">
        <div className="flex-shrink-0">
          <div className="w-40 h-40 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden shadow-md">
            {/* Placeholder for photo */}
            <span className="text-5xl text-gray-400 dark:text-gray-500">🙂</span>
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Hi, I'm RVV Swamy</h1>
          <p className="text-lg mb-2">MERN Stack Web Developer | AI & Data Science Enthusiast</p>
          <p className="mb-2">B.Tech in Computer Science & Engineering (AI & DS Specialization)</p>
          <p className="text-gray-700 dark:text-gray-300">I'm passionate about building modern web applications and exploring the world of Artificial Intelligence and Data Science. I love solving real-world problems with code and learning new technologies.</p>
          <div className="flex gap-4 mt-4">
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-blue-700 dark:hover:text-blue-400 text-2xl"><svg width="24" height="24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z"/></svg></a>
            <a href="https://github.com/your-github" target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-gray-800 dark:hover:text-gray-200 text-2xl"><svg width="24" height="24" fill="currentColor"><path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576 4.765-1.587 8.2-6.086 8.2-11.385 0-6.63-5.37-12-12-12z"/></svg></a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 py-16 max-w-5xl mx-auto animate-fade-in-up h-[600px]">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Frontend</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>React.js</li>
              <li>Next.js</li>
              <li>HTML5, CSS3, JavaScript (ES6+)</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Backend & Databases</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">AI & Data Science</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Python (NumPy, Pandas, scikit-learn)</li>
              <li>Machine Learning Basics</li>
              <li>Data Analysis</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Tools</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Figma (Basics)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-16 max-w-5xl mx-auto animate-fade-in-up h-[620px]">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 flex flex-col items-center hover:scale-105 transition-transform">
            <div className="w-full h-32 bg-gray-100 dark:bg-gray-800 rounded mb-4 flex items-center justify-center">
              {/* Placeholder for project image */}
              <span className="text-4xl text-gray-300 dark:text-gray-500">🛒</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">eCommerce Website</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">A full-featured online store with user authentication, product management, and a shopping cart.</p>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Project</a>
          </div>
          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 flex flex-col items-center hover:scale-105 transition-transform">
            <div className="w-full h-32 bg-gray-100 dark:bg-gray-800 rounded mb-4 flex items-center justify-center">
              <span className="text-4xl text-gray-300 dark:text-gray-500">🍎</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Food Search Calorie Calculator</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">Search foods and get calorie information using a simple, user-friendly interface.</p>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Project</a>
          </div>
          {/* Project 3 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 flex flex-col items-center hover:scale-105 transition-transform">
            <div className="w-full h-32 bg-gray-100 dark:bg-gray-800 rounded mb-4 flex items-center justify-center">
              <span className="text-4xl text-gray-300 dark:text-gray-500">✍️</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Blog Platform</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">A simple blog platform to write, edit, and share posts with others.</p>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Project</a>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="px-8 py-16 max-w-5xl mx-auto animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-6">Blog</h2>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 text-gray-700 dark:text-gray-300">
          <p>Coming soon: I’ll share articles about web development, AI, and my learning journey here!</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-16 max-w-5xl mx-auto animate-fade-in-up">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="border border-gray-300 dark:border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-gray-100" required />
            <input type="email" placeholder="Your Email" className="border border-gray-300 dark:border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-gray-100" required />
            <textarea placeholder="Your Message" className="border border-gray-300 dark:border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-gray-100" rows={4} required></textarea>
            <button type="submit" className="bg-blue-600 dark:bg-blue-700 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 dark:hover:bg-blue-800 transition">Send</button>
          </form>
          <div className="flex flex-col gap-4 justify-center">
            <div>
              <span className="font-semibold">Email:</span> <a href="mailto:swamy@email.com" className="text-blue-600 dark:text-blue-400 hover:underline">swamy@email.com</a>
            </div>
            <div>
              <span className="font-semibold">Phone:</span> <a href="tel:+911234567890" className="text-blue-600 dark:text-blue-400 hover:underline">+91 12345 67890</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 dark:text-gray-400 py-6 mt-8">
        &copy; {new Date().getFullYear()} RVV Swamy. All rights reserved.
      </footer>
    </main>
  );
}
