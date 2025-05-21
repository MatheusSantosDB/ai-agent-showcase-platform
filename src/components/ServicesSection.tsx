
import { useInView } from "../hooks/useInView";

const services = [
  {
    icon: "🔍",
    title: "Análise de Necessidades",
    description: "Mapeamos seus processos e identificamos oportunidades para implementação de agentes de IA que trarão resultados concretos."
  },
  {
    icon: "⚙️",
    title: "Desenvolvimento Personalizado",
    description: "Criamos agentes de inteligência artificial completamente sob medida para seus objetivos e desafios específicos."
  },
  {
    icon: "🚀",
    title: "Implementação e Treinamento",
    description: "Integramos os agentes aos seus sistemas e capacitamos sua equipe para obter o máximo benefício da solução."
  },
  {
    icon: "📊",
    title: "Suporte Contínuo",
    description: "Oferecemos monitoramento constante, ajustes e evolução contínua dos agentes para garantir resultados crescentes."
  }
];

const ServicesSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-apple-lightGray/50 to-apple-white">
      <div className="section-container" ref={ref}>
        <h2 className={`section-title transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          Como Funciona
        </h2>
        
        <p className={`section-subtitle transition-all duration-700 delay-100 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          Nossa abordagem para desenvolvimento de agentes de IA personalizados para o seu negócio
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`flex transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-apple-blue/10 flex items-center justify-center mr-4">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-apple-darkGray">
                  {service.title}
                </h3>
                <p className="text-apple-graphite">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
