
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projetos");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-apple-white to-apple-lightGray z-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute h-40 w-40 rounded-full bg-apple-blue/30 top-1/4 left-1/4 blur-3xl animate-pulse"></div>
          <div className="absolute h-60 w-60 rounded-full bg-blue-400/20 bottom-1/3 right-1/3 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute h-40 w-40 rounded-full bg-apple-blue/30 bottom-1/4 right-1/4 blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-apple-darkGray mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
            }`}
          >
            Inteligência Artificial que 
            <span className="text-apple-blue"> Transforma</span> Resultados
          </h1>
          
          <p 
            className={`text-xl md:text-2xl text-apple-graphite mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
            }`}
          >
            Desenvolvemos soluções de I.A. personalizadas para imobiliárias, telecomunicações e equipes de SDR, automatizando processos e impulsionando o crescimento.
          </p>
          
          <div 
            className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button 
              onClick={scrollToProjects}
              className="bg-apple-blue hover:bg-apple-blue/90 text-white px-8 py-6 rounded-full text-lg"
            >
              Ver Projetos
            </Button>
            
            <Button 
              onClick={() => {
                const contactSection = document.getElementById("contato");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              variant="outline" 
              className="border-apple-blue text-apple-blue hover:bg-apple-blue/10 px-8 py-6 rounded-full text-lg"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={() => {
            const aboutSection = document.getElementById("sobre");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="text-apple-graphite hover:text-apple-blue transition-colors focus:outline-none"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
