import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      position: "CEO",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "Nossos processos de marketing eram lentos e ineficientes. Com a automação, conseguimos dobrar o número de leads e reduzir nosso tempo de resposta em 70%."
    },
    {
      name: "Ana Costa",
      position: "Diretora Comercial",
      company: "SalesMax",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "A qualificação automática de leads revolucionou nossa equipe de vendas. Agora focamos apenas nos prospects com maior potencial de conversão."
    },
    {
      name: "Roberto Santos",
      position: "CTO",
      company: "Innovation Labs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "Implementamos agentes de IA para atendimento ao cliente e nossa satisfação aumentou 85%. O suporte 24/7 foi um diferencial competitivo real."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            O que nossos <span className="gradient-text">clientes dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de empresas que transformaram seus resultados com nossa automação inteligente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-gradient rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                  <p className="text-primary text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-8">Empresas que confiam em nossas soluções</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {[
              "TechCorp", "SalesMax", "Innovation Labs", "DataFlow", "AutoSys", "CloudNext"
            ].map((company, index) => (
              <div key={index} className="text-2xl font-bold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;