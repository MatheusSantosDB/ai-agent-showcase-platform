
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "../hooks/useInView";

const testimonials = [
  {
    id: 1,
    text: "O agente de IA para qualificação de leads revolucionou nossa imobiliária. Economizamos tempo valioso dos corretores e aumentamos significativamente nossas vendas.",
    name: "Ana Silva",
    position: "Diretora Comercial, Imobiliária Prime",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    text: "Nossa equipe de SDR conseguiu focar no que realmente importa: conversas de qualidade com leads promissores. O agente automatiza todas as tarefas repetitivas com precisão surpreendente.",
    name: "Ricardo Mendes",
    position: "Gerente de Vendas, TechSolutions",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    text: "Reduzimos drasticamente o volume de chamadas para nossa equipe de suporte técnico, mantendo a satisfação do cliente em alta. O agente resolve a maioria dos problemas técnicos simples de forma autônoma.",
    name: "Marcos Gomes",
    position: "Diretor de Operações, TeleconectBR",
    image: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideTrackRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (slideTrackRef.current) {
      slideTrackRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <section id="depoimentos" className="py-20 bg-apple-lightGray">
      <div className="section-container" ref={ref}>
        <h2 className={`section-title transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          O Que Dizem Nossos Clientes
        </h2>
        
        <div 
          className={`mt-12 relative transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="overflow-hidden relative rounded-2xl">
            <div 
              ref={slideTrackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full"
                  style={{ flex: `0 0 ${100 / testimonials.length}%` }}
                >
                  <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md mx-4 md:mx-16">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="mb-6 md:mb-0 md:mr-8">
                        <div className="h-20 w-20 rounded-full overflow-hidden bg-gray-200">
                          <img 
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <blockquote>
                          <p className="text-lg md:text-xl italic mb-4 text-apple-darkGray">
                            "{testimonial.text}"
                          </p>
                          <footer>
                            <p className="font-bold text-apple-darkGray">{testimonial.name}</p>
                            <p className="text-apple-graphite">{testimonial.position}</p>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white text-apple-darkGray hover:bg-apple-blue hover:text-white transition-colors shadow-md"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index ? 'w-8 bg-apple-blue' : 'w-2 bg-apple-graphite/30'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white text-apple-darkGray hover:bg-apple-blue hover:text-white transition-colors shadow-md"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
