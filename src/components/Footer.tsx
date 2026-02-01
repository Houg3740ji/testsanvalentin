import { Heart } from "lucide-react";
import logo from "@/assets/logo-lupu-agency.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <a 
              href="https://lupu.agency/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block transition-opacity hover:opacity-80"
            >
              <img 
                src={logo} 
                alt="Lupu Agency" 
                className="h-10 w-auto invert"
              />
            </a>
            
            <div className="flex items-center gap-6 text-sm">
              <a 
                href="https://lupu.agency/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                Web principal
              </a>
              <a 
                href="https://lupu.agency/aviso-legal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                Aviso legal
              </a>
              <a 
                href="https://lupu.agency/privacidad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                Privacidad
              </a>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 pt-8 text-center">
            <p className="text-sm text-secondary-foreground/80 flex items-center justify-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> por Lupu Agency
            </p>
            <p className="text-xs text-secondary-foreground/60 mt-2">
              © {new Date().getFullYear()} Nicoleta Lupu Agency. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
