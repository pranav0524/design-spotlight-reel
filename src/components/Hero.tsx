import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-accent">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating spheres inspired by the reference designs */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full gradient-primary opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-accent opacity-30 blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full gradient-secondary opacity-25 blur-md animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full bg-primary opacity-20 blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-glass rounded-full border border-primary/20 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Premium Creative Agency</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="gradient-primary bg-clip-text text-transparent">
              Creative
            </span>
            <br />
            <span className="text-foreground">
              Excellence
            </span>
            <br />
            <span className="gradient-secondary bg-clip-text text-transparent">
              Delivered
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            We craft stunning visual experiences that captivate audiences and drive results. 
            From social media campaigns to brand storytelling, we bring your vision to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="gradient-primary text-white shadow-glow hover:shadow-glow-accent transition-smooth group px-8 py-6 text-lg"
              onClick={scrollToPortfolio}
            >
              <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              View Our Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-smooth px-8 py-6 text-lg"
            >
              Start Your Project
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground mb-4">Discover Our Portfolio</p>
            <Button 
              variant="ghost" 
              size="icon" 
              className="animate-bounce"
              onClick={scrollToPortfolio}
            >
              <ArrowDown className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;