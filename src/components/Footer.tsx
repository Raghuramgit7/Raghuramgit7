import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="md:col-span-1">
            <div className="text-xl font-bold mb-4 flex items-center">
              <span className="text-primary-400">R</span>
              <span className="text-primary-500">G</span>
              <span className="text-primary-400">N</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              Software Engineer specializing in cloud computing, scalable system design, and backend development.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          {/* Column 2: Sitemap */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Sitemap</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-slate-400 hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-slate-400 hover:text-white transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-400">
                <i className="fas fa-envelope mr-2 text-primary-500"></i>
                raghuram0311@gmail.com
              </li>
              <li className="flex items-center text-slate-400">
                <i className="fas fa-phone mr-2 text-primary-500"></i>
                (971) 901-7661
              </li>
              <li className="flex items-center text-slate-400">
                <i className="fas fa-map-marker-alt mr-2 text-primary-500"></i>
                Portland, Oregon
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe to my newsletter for the latest updates.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-slate-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary-500 w-full" 
              />
              <button 
                type="submit" 
                className="bg-primary-600 px-4 py-2 rounded-r-lg hover:bg-primary-700 transition-colors"
                aria-label="Subscribe"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Raghuram Gudemaranahalli Nataraja. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm mt-2 md:mt-0">
            Designed with <i className="fas fa-heart text-primary-500"></i> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
