
import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

const AboutSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  
  const features = [
    {
      title: "Personalização Completa",
      description: "Cada agente de IA é desenvolvido exclusivamente para suas necessidades específicas"
    },
    {
      title: "Tecnologia de Ponta",
      description: "Utilizamos os mais recentes avanços em NLP e machine learning para resultados excepcionais"
    },
    {
      title: "Foco em Resultados",
      description: "Nossos agentes são projetados para impactar positivamente seus indicadores de negócio"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-apple-lightGray">
      <div className="section-container" ref={ref}>
        <h2 className={`section-title transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          Nossa Proposta
        </h2>
        
        <p className={`section-subtitle transition-all duration-700 delay-100 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          Desenvolvemos agentes de inteligência artificial que automatizam processos, 
          aumentam a eficiência e geram resultados mensuráveis para o seu negócio.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-2xl shadow-md card-highlight transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="h-12 w-12 rounded-full bg-apple-blue/10 flex items-center justify-center mb-4">
                <span className="text-apple-blue font-bold text-lg">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-apple-darkGray">{feature.title}</h3>
              <p className="text-apple-graphite">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
