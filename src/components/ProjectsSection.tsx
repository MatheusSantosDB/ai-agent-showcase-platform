
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "../hooks/useInView";

// Project data
const projects = [
  {
    id: 1,
    title: "Agente Imobiliário Inteligente",
    subtitle: "Qualificação 24/7",
    sector: "Imobiliárias",
    image: "/placeholder.svg",
    description: "Automatize a triagem inicial de leads, agende visitas e forneça informações instantâneas sobre imóveis, liberando seus corretores para focar no fechamento.",
    challenge: "Corretores gastavam em média 15 horas por semana respondendo perguntas repetitivas e qualificando leads com baixo potencial de conversão.",
    solution: [
      "Entender linguagem natural para responder dúvidas sobre imóveis (preço, localização, características).",
      "Coletar informações do lead (orçamento, tipo de imóvel desejado, urgência).",
      "Agendar visitas diretamente na agenda dos corretores.",
      "Segmentar e priorizar leads para a equipe de vendas."
    ],
    results: [
      "Redução de 70% no tempo gasto com triagem manual de leads.",
      "Aumento de 25% na taxa de agendamento de visitas.",
      "Disponibilidade para atendimento ao cliente 24/7."
    ],
    technologies: "NLP, Machine Learning, Integração com CRM."
  },
  {
    id: 2,
    title: "Assistente de Vendas SDR",
    subtitle: "Automação inteligente de follow-up",
    sector: "Equipes de SDR",
    image: "/placeholder.svg",
    description: "Automatize sequências de follow-up, qualifique leads e identifique oportunidades de vendas com precisão para maximizar a eficiência da sua equipe comercial.",
    challenge: "SDRs dedicavam até 60% de seu tempo em tarefas manuais de acompanhamento e organização de leads, em vez de conversas de valor com potenciais clientes.",
    solution: [
      "Automatizar sequências de emails e mensagens de follow-up personalizadas.",
      "Analisar respostas de prospects e identificar sinais de interesse.",
      "Priorizar leads com maior probabilidade de conversão.",
      "Integração com CRMs e plataformas de comunicação existentes."
    ],
    results: [
      "Aumento de 40% na produtividade dos SDRs.",
      "Crescimento de 30% na taxa de conversão de leads para oportunidades.",
      "Redução de 50% no tempo de resposta para novos leads."
    ],
    technologies: "Processamento de Linguagem Natural, Integração com CRM/Email, Análise preditiva."
  },
  {
    id: 3,
    title: "Agente de Suporte Telecom",
    subtitle: "Resolução instantânea de problemas",
    sector: "Telecomunicações",
    image: "/placeholder.svg",
    description: "Solucione problemas técnicos comuns, responda dúvidas sobre serviços e reduza o volume de chamadas para o suporte humano com atendimento automatizado de alta qualidade.",
    challenge: "Alto volume de chamadas para problemas técnicos simples e repetitivos, resultando em longos tempos de espera e baixa satisfação do cliente.",
    solution: [
      "Diagnosticar problemas técnicos comuns através de perguntas direcionadas.",
      "Guiar clientes por procedimentos de resolução de problemas em tempo real.",
      "Escalar para suporte humano quando necessário, com contexto completo.",
      "Aprender continuamente com novas interações para melhorar resoluções futuras."
    ],
    results: [
      "Redução de 65% nas chamadas para suporte técnico nível 1.",
      "Aumento de 35% na taxa de resolução no primeiro contato.",
      "Melhoria de 28% nos índices de satisfação do cliente."
    ],
    technologies: "Chatbots avançados, Árvores de decisão dinâmicas, Machine Learning."
  }
];

const ProjectsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1, once: true });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const slideRef = useRef<HTMLDivElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };
  
  const openProjectDetails = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
  useEffect(() => {
    if (slidesContainerRef.current) {
      const slideWidth = slidesContainerRef.current.offsetWidth;
      if (slideRef.current) {
        slideRef.current.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      }
    }
  }, [currentSlide]);

  return (
    <section id="projetos" className="py-20 bg-apple-white">
      <div className="section-container" ref={ref}>
        <h2 className={`section-title transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          Projetos em Destaque
        </h2>
        
        <p className={`section-subtitle transition-all duration-700 delay-100 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          Conheça alguns dos nossos agentes de I.A. que estão transformando negócios em diferentes setores
        </p>
        
        <div 
          className={`relative mt-12 transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="overflow-hidden" ref={slidesContainerRef}>
            <div 
              ref={slideRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ width: `${projects.length * 100}%` }}
            >
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="w-full px-4" 
                  style={{ flex: `0 0 ${100 / projects.length}%` }}
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full card-highlight">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 text-xs rounded-full bg-apple-blue/10 text-apple-blue">
                          {project.sector}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-1 text-apple-darkGray">{project.title}</h3>
                      <h4 className="text-lg text-apple-blue mb-3">{project.subtitle}</h4>
                      <p className="text-apple-graphite mb-6 line-clamp-3">{project.description}</p>
                      <Button 
                        onClick={() => openProjectDetails(project)}
                        className="bg-apple-blue hover:bg-apple-blue/90 text-white w-full"
                      >
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-apple-lightGray text-apple-darkGray hover:bg-apple-blue hover:text-white transition-colors"
              aria-label="Projeto anterior"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index ? 'w-8 bg-apple-blue' : 'w-2 bg-apple-graphite/30'
                  }`}
                  aria-label={`Ir para projeto ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-apple-lightGray text-apple-darkGray hover:bg-apple-blue hover:text-white transition-colors"
              aria-label="Próximo projeto"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Project Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-apple-blue text-lg">
                  {selectedProject.subtitle}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <div className="h-56 bg-gray-200 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">O Desafio</h3>
                  <p className="text-apple-graphite">{selectedProject.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Nossa Solução</h3>
                  <ul className="list-disc pl-5 space-y-2 text-apple-graphite">
                    {selectedProject.solution.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Resultados</h3>
                  <ul className="list-disc pl-5 space-y-2 text-apple-graphite">
                    {selectedProject.results.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Tecnologias</h3>
                  <p className="text-apple-graphite">{selectedProject.technologies}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
