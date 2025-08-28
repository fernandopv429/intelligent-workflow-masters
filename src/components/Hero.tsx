import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-ai-woman.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse delay-75"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse delay-150"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary-glow rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2 border border-border">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">AGENTES DE IA</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Sua equipe de <span className="gradient-text">IA para automação</span> de processos
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Construímos agentes de IA que automatizam tarefas repetitivas, liberando seu time para focar em estratégia, criatividade e no que realmente importa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Fale com um especialista
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-border hover:border-primary">
                Ver demonstração
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">70%</div>
                <div className="text-sm text-muted-foreground">Redução de tempo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">3x</div>
                <div className="text-sm text-muted-foreground">Mais produtividade</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">50%</div>
                <div className="text-sm text-muted-foreground">Menos custos</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img
              src={heroImage}
              alt="Agente de IA em ação"
              className="relative z-10 rounded-2xl shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;