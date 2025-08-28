import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg animate-glow"></div>
            <span className="text-xl font-bold gradient-text">AutomateAI</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solucoes" className="text-foreground hover:text-primary transition-colors">
              Soluções
            </a>
            <a href="#como-funciona" className="text-foreground hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Login
            </Button>
            <Button variant="cta">
              Teste Grátis
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;