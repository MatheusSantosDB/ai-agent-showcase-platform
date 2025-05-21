
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "../hooks/useInView";

const ContactSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contato" className="py-20 bg-apple-white">
      <div className="section-container" ref={ref}>
        <h2 className={`section-title transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          Vamos Conversar Sobre Seu Próximo Projeto
        </h2>
        
        <p className={`section-subtitle transition-all duration-700 delay-100 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          Pronto para transformar sua empresa com inteligência artificial? 
          Entre em contato para uma consultoria personalizada.
        </p>
        
        <div className={`mt-12 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                className="border-apple-graphite/30 focus:border-apple-blue h-12"
                required
              />
            </div>
            
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border-apple-graphite/30 focus:border-apple-blue h-12"
                required
              />
            </div>
            
            <div>
              <Input
                name="phone"
                placeholder="Telefone (opcional)"
                value={formData.phone}
                onChange={handleChange}
                className="border-apple-graphite/30 focus:border-apple-blue h-12"
              />
            </div>
            
            <div>
              <Textarea
                name="message"
                placeholder="Mensagem"
                value={formData.message}
                onChange={handleChange}
                className="border-apple-graphite/30 focus:border-apple-blue min-h-[120px]"
                required
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-apple-blue hover:bg-apple-blue/90 text-white py-6 text-lg rounded-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-apple-graphite">
              Prefere email? Entre em contato diretamente em{" "}
              <a href="mailto:contato@agentesia.com" className="text-apple-blue hover:underline">
                contato@agentesia.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
