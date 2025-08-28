import React from 'react';
import { TrendingUp, DollarSign, Rocket, Shield, Clock, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumente a Produtividade",
      description: "Automatize tarefas manuais e demoradas, permitindo que sua equipe use o tempo de forma mais estratégica e eficiente.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: DollarSign,
      title: "Reduza Custos Operacionais",
      description: "Otimize fluxos de trabalho e minimize erros humanos, resultando em uma operação mais enxuta e lucrativa.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Rocket,
      title: "Impulsione o Crescimento",
      description: "Escalamos suas operações de marketing, vendas e atendimento ao cliente para que seu negócio cresça de forma rápida e sustentável.",
      gradient: "from-accent to-secondary"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Por que escolher <span className="gradient-text">nossa automação</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme sua empresa com soluções de IA que realmente fazem a diferença nos seus resultados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="relative group card-gradient rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${benefit.gradient} mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Additional stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">500+</div>
            <div className="text-muted-foreground">Empresas atendidas</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">2M+</div>
            <div className="text-muted-foreground">Horas economizadas</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">99.9%</div>
            <div className="text-muted-foreground">Uptime garantido</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">24/7</div>
            <div className="text-muted-foreground">Suporte técnico</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;