import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Search, ChevronDown, Globe, ShoppingBag, Server, Cloud, Sparkles, Brain, LayoutGrid, Github, Palette, Mail } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { siteData, PageData } from '@/src/lib/services-data';

const iconMap = {
  Server,
  Globe,
  Brain,
  ShoppingBag,
  Palette,
  Terminal,
  Mail
};

export const Navbar = () => {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<PageData[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const term = searchTerm.toLowerCase().trim();
    if (term.length < 1) {
      setSearchResults([]);
      return;
    }

    const filtered = siteData.filter((page) =>
      page.title.toLowerCase().startsWith(term) ||
      page.keywords.some((keyword) => keyword.toLowerCase().startsWith(term))
    );
    setSearchResults(filtered);
  }, [searchTerm]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchTerm('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceLinks = [
    { name: 'Virtualization & Cloud', path: '/services/cloud' },
    { name: 'Precision Web & Ecom Development', path: '/services/web-dev' },
    { name: 'AI & Automation', path: '/services/ai-systems' },
    { name: 'Shopify, WordPress Integrations & App Development', path: '/services/shopify' },
    { name: 'Graphic & Web Design', path: '/services/design' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/15 shadow-[0_0_40px_rgba(177,197,255,0.08)] flex items-center h-20 md:h-24 px-4 md:px-8 max-w-full">
      {/* Left side: Logo */}
      <div className="flex-1 flex items-center justify-start">
        <Link to="/" className="flex items-center">
          <img 
            src={`${import.meta.env.BASE_URL}assets/icons/website-logo.png`} 
            alt="Vanguard Tech Ops" 
            className="h-12 sm:h-14 md:h-[72px] w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
          />
        </Link>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex gap-8 items-center justify-center">
        <Link 
          to="/" 
          className={cn(
            "font-headline tracking-[0.05em] uppercase text-sm transition-colors whitespace-nowrap",
            location.pathname === '/' ? "text-on-surface" : "text-on-surface/60 hover:text-on-surface"
          )}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={cn(
            "font-headline tracking-[0.05em] uppercase text-sm transition-colors whitespace-nowrap",
            location.pathname === '/about' ? "text-on-surface" : "text-on-surface/60 hover:text-on-surface"
          )}
        >
          about us
        </Link>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <Link 
            to="/services"
            className={cn(
              "font-headline tracking-[0.05em] uppercase text-sm transition-colors flex items-center gap-1 whitespace-nowrap",
              location.pathname.startsWith('/services') ? "text-on-surface" : "text-on-surface/60 hover:text-on-surface"
            )}
          >
            Services <ChevronDown className={cn("w-4 h-4 transition-transform", isServicesOpen && "rotate-180")} />
          </Link>
          
          <AnimatePresence>
            {isServicesOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-64 mt-2 bg-surface-container-low border border-outline-variant/20 shadow-2xl backdrop-blur-2xl rounded-sm overflow-hidden"
              >
                <div className="py-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-6 py-3 text-xs font-headline uppercase tracking-widest text-on-surface-variant hover:bg-primary-container/10 hover:text-primary transition-all"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="border-t border-outline-variant/10 mt-2 pt-2">
                    <Link
                      to="/services"
                      className="block px-6 py-3 text-[10px] font-headline uppercase tracking-[0.2em] text-primary/60 hover:text-on-surface"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link 
          to="/contact" 
          className={cn(
            "font-headline tracking-[0.05em] uppercase text-sm transition-colors whitespace-nowrap",
            location.pathname === '/contact' ? "text-on-surface" : "text-on-surface/60 hover:text-on-surface"
          )}
        >
          Contact
        </Link>
      </div>
      
      {/* Right side: Actions */}
      <div className="flex-1 flex items-center justify-end gap-6">
        <div ref={searchRef} className="hidden lg:flex items-center bg-surface-container-lowest border border-outline-variant/20 px-4 py-2 rounded-full relative">
          <Search className="text-on-surface-variant w-4 h-4 mr-2" />
          <input 
            className="bg-transparent border-none text-xs tracking-widest focus:outline-none w-32 placeholder:text-on-surface-variant/40" 
            placeholder="SYSTEM SEARCH" 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <AnimatePresence>
            {searchTerm.length >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full right-0 w-80 mt-3 bg-surface-container-low border border-outline-variant/20 shadow-2xl backdrop-blur-2xl rounded-xl overflow-hidden z-50"
              >
                {searchResults.length > 0 ? (
                searchResults.map((result) => {
                  const Icon = iconMap[result.icon];
                  return (
                    <Link
                      key={result.id}
                      to={result.path}
                      onClick={() => setSearchTerm('')}
                      className="flex items-center gap-4 px-6 py-4 hover:bg-primary-container/10 transition-colors border-b border-outline-variant/5 last:border-0"
                    >
                      <div className="p-2 rounded bg-background/50 border border-outline-variant/10">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-headline text-xs font-bold text-on-surface uppercase tracking-widest mb-0.5">{result.title}</h4>
                        <p className="text-[9px] text-on-surface-variant truncate">{result.description}</p>
                      </div>
                    </Link>
                  );
                })
                ) : (
                <div className="px-6 py-4 text-xs font-headline uppercase text-on-surface-variant/50">
                  No results found
                </div>
                )}              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <Link to="/contact" className="hidden md:block bg-gradient-to-br from-primary-container to-primary text-on-primary px-6 py-2.5 font-headline text-sm font-bold uppercase tracking-widest active:scale-95 transition-transform shadow-[0_0_15px_rgba(0,71,171,0.4)] whitespace-nowrap">
          Consult Now
        </Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden p-2 text-primary hover:bg-primary/10 transition-colors rounded-lg"
        >
          <Terminal className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-surface-container-low border-b border-outline-variant/20 shadow-2xl backdrop-blur-3xl overflow-y-auto max-h-[80vh] md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "font-headline text-lg font-bold uppercase tracking-widest p-4 rounded-lg transition-colors",
                    location.pathname === link.path ? "bg-primary/10 text-primary" : "text-on-surface/60 hover:bg-surface-container hover:text-on-surface"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-outline-variant/10">
                <p className="text-[10px] font-headline uppercase tracking-[0.2em] text-on-surface-variant/40 mb-4 px-4">Our Services</p>
                <div className="grid grid-cols-1 gap-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="px-4 py-3 text-xs font-headline uppercase tracking-widest text-on-surface-variant hover:text-on-surface"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link 
                to="/contact" 
                className="mt-4 bg-primary text-on-primary text-center py-4 font-headline font-bold uppercase tracking-[0.2em] rounded-sm shadow-[0_0_20px_rgba(0,71,171,0.3)]"
              >
                Launch Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};



export const Footer = () => {
  const techStack = [
    { name: 'WordPress', icon: <img src={`${import.meta.env.BASE_URL}assets/icons/wordpress.png`} alt="WordPress" className="w-6 h-6 object-contain brightness-0 invert group-hover/item:brightness-100 group-hover/item:invert-0 transition-all duration-300" /> },
    { name: 'Shopify', icon: <img src={`${import.meta.env.BASE_URL}assets/icons/shopify.png`} alt="Shopify" className="w-6 h-6 object-contain brightness-0 invert group-hover/item:brightness-100 group-hover/item:invert-0 transition-all duration-300" /> },
    { name: 'AWS', icon: <img src={`${import.meta.env.BASE_URL}assets/icons/aws.png`} alt="AWS" className="w-6 h-6 object-contain brightness-0 invert group-hover/item:brightness-100 group-hover/item:invert-0 transition-all duration-300" /> },
    { name: 'Microsoft Azure', icon: <img src={`${import.meta.env.BASE_URL}assets/icons/azure.png`} alt="Azure" className="w-6 h-6 object-contain brightness-0 invert group-hover/item:brightness-100 group-hover/item:invert-0 transition-all duration-300" /> },
    { name: 'Linux', icon: <img src={`${import.meta.env.BASE_URL}assets/icons/linux.png`} alt="Linux" className="w-6 h-6 object-contain brightness-0 invert group-hover/item:brightness-100 group-hover/item:invert-0 transition-all duration-300" /> },
    { name: 'Windows', icon: <img src={`${import.meta.env.BASE_URL}assets/icons/windows.png`} alt="Windows" className="w-6 h-6 object-contain brightness-0 invert group-hover/item:brightness-100 group-hover/item:invert-0 transition-all duration-300" /> },
    { name: 'Github', icon: <img src={`${import.meta.env.BASE_URL}assets/icons/github.png`} alt="Github" className="w-6 h-6 object-contain brightness-0 invert group-hover/item:brightness-100 group-hover/item:invert-0 transition-all duration-300" /> },
    { name: 'Google Gemini', icon: <img src={`${import.meta.env.BASE_URL}assets/icons/gemini.png`} alt="Gemini" className="w-6 h-6 object-contain brightness-0 invert group-hover/item:brightness-100 group-hover/item:invert-0 transition-all duration-300" /> },
    { name: 'Claude', icon: <img src={`${import.meta.env.BASE_URL}assets/icons/claude.png`} alt="Claude" className="w-6 h-6 object-contain brightness-0 invert group-hover/item:brightness-100 group-hover/item:invert-0 transition-all duration-300" /> },
  ];

  return (
    <footer className="w-full border-t border-outline-variant/15 bg-surface-container-lowest">
      {/* Tech Stack Section */}
      <div className="py-20 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface text-center mb-16 tracking-tight">
            Powering Your Digital Ecosystem
          </h2>

          <div className="relative overflow-hidden group">
            {/* Infinite Marquee Wrapper */}
            <div className="flex whitespace-nowrap overflow-hidden">
              <motion.div
                animate={{ x: [0, -1920] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex gap-12 items-center min-w-full"
              >
                {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-2 glass-card border border-outline-variant/10 transition-all duration-300 opacity-40 hover:opacity-100 group/item hover:border-primary-container hover:bg-primary-container/10 hover:shadow-[0_0_20px_rgba(0,71,171,0.4)] hover:scale-[1.05] transform-gpu will-change-transform"
                  >
                  <div className="flex items-center justify-center w-5 h-5 transition-transform duration-300 group-hover/item:scale-110">
                    {tech.icon}
                  </div>
                  <span className="font-headline text-[8px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover/item:text-white transition-colors duration-300 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
                ))}              </motion.div>
            </div>

            {/* Gradient Fades for Smooth Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>      
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>     
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 flex flex-col justify-center items-center px-12 gap-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <img
            src={`${import.meta.env.BASE_URL}assets/icons/website-logo.png`}
            alt="Vanguard Tech Ops"
            className="h-24 w-auto object-contain brightness-0 invert opacity-80"
          />
          <p className="font-body text-[10px] tracking-[0.1em] uppercase text-on-surface/30">Vanguard Tech Ops. Technical Authority Secured.</p>
        </div>
      </div>
    </footer>
  );
};
