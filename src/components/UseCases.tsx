import React from 'react';
import { MessageSquare, BarChart3, Users, FileText, ShoppingCart, Calendar } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: ShoppingCart,
      title: "Vendas",
      description: "Automatize a qualificação de leads e o envio de propostas.",
      features: ["Qualificação automática", "Follow-up inteligente", "Geração de propostas"],
      color: "primary"
    },
    {
      icon: BarChart3,
      title: "Marketing",
      description: "Gere conteúdo e gerencie suas campanhas de forma automática.",
      features: ["Criação de conteúdo", "Gestão de campanhas", "Análise de resultados"],
      color: "secondary"
    },
    {
      icon: MessageSquare,
      title: "Atendimento",
      description: "Crie chatbots inteligentes para responder 24/7.",
      features: ["Atendimento 24/7", "Respostas inteligentes", "Escalabilidade"],
      color: "accent"
    },
    {
      icon: FileText,
      title: "Dados e Análise",
      description: "Extraia informações de documentos e crie relatórios em segundos.",
      features: ["Extração de dados", "Relatórios automáticos", "Insights inteligentes"],
      color: "primary"
    }
  ];

  return (
    <section id="como-funciona" className="py-24 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Onde a <span className="gradient-text">automação inteligente</span> pode transformar seu negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra como nossos agentes de IA podem revolucionar diferentes áreas da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="group card-gradient rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2"
              >
                <div className={`inline-flex p-3 rounded-xl bg-${useCase.color} mb-6 group-hover:animate-pulse`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {useCase.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {useCase.description}
                </p>

                <ul className="space-y-2">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Process Steps */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Como <span className="gradient-text">implementamos</span> sua solução
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Análise", desc: "Entendemos seus processos atuais" },
              { step: "02", title: "Planejamento", desc: "Criamos a estratégia de automação" },
              { step: "03", title: "Desenvolvimento", desc: "Construímos seus agentes de IA" },
              { step: "04", title: "Implementação", desc: "Colocamos tudo em funcionamento" }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;