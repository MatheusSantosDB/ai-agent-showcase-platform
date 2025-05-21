
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-apple-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl md:text-2xl font-bold text-apple-darkGray">
              <span className="text-apple-blue">AI</span>Portfolio
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('sobre')} className="nav-link">Sobre</button>
            <button onClick={() => scrollToSection('projetos')} className="nav-link">Projetos</button>
            <button onClick={() => scrollToSection('servicos')} className="nav-link">Serviços</button>
            <button onClick={() => scrollToSection('depoimentos')} className="nav-link">Depoimentos</button>
            <Button 
              onClick={() => scrollToSection('contato')} 
              className="bg-apple-blue hover:bg-apple-blue/90 text-white rounded-full px-6"
            >
              Contato
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-apple-darkGray focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('sobre')} className="py-2 text-apple-darkGray hover:text-apple-blue transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('projetos')} className="py-2 text-apple-darkGray hover:text-apple-blue transition-colors">Projetos</button>
              <button onClick={() => scrollToSection('servicos')} className="py-2 text-apple-darkGray hover:text-apple-blue transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('depoimentos')} className="py-2 text-apple-darkGray hover:text-apple-blue transition-colors">Depoimentos</button>
              <Button
                onClick={() => scrollToSection('contato')}
                className="bg-apple-blue hover:bg-apple-blue/90 text-white w-full rounded-full"
              >
                Contato
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
