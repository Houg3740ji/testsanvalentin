import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-couple.jpg";

const HeroSection = () => {
  const scrollToPayment = () => {
    document.getElementById("pago")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Pareja romántica" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-accent/80 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Edición especial San Valentín</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            El regalo perfecto para{" "}
            <span className="text-primary">San Valentín</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Sesión de fotos profesional para parejas, capturando vuestro amor de forma natural y auténtica
          </p>
          
          <Button 
            size="lg" 
            onClick={scrollToPayment}
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Heart className="w-5 h-5 mr-2" />
            Regala una sesión
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
