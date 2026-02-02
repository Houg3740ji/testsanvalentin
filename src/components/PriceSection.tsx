import { Check, Heart, Sparkles } from "lucide-react";

const PriceSection = () => {
  const included = [
    "Sesión de fotos profesional para parejas",
    "Fotógrafo con experiencia en bodas y parejas",
    "Selección de las mejores fotografías",
    "Edición profesional incluida",
    "Entrega digital en alta resolución"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          {/* Highlighted Message */}
          <div className="text-center mb-8">
            <p className="font-sans text-xl md:text-2xl font-medium text-foreground italic">
              "Sorprende a tu pareja con algo que solo será vuestro."
            </p>
          </div>
          
          <div className="relative bg-card rounded-3xl p-8 md:p-10 border border-border shadow-xl">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Edición San Valentín
              </div>
            </div>
            
            <div className="text-center pt-4">
              <p className="text-muted-foreground mb-2">Precio único</p>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="font-sans text-5xl md:text-6xl font-bold text-foreground">150</span>
                <span className="text-2xl text-muted-foreground">€</span>
              </div>
              <p className="text-sm text-muted-foreground">Pago único • Sin costes adicionales</p>
            </div>
            
            <div className="my-8 border-t border-border" />
            
            <ul className="space-y-4">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 rounded-xl bg-accent/50 text-center">
              <Heart className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">
                Regalo perfecto para sorprender a tu pareja este 14 de febrero
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
