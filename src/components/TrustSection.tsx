import { Award, Users, MapPin } from "lucide-react";

const TrustSection = () => {
  const trustPoints = [
    {
      icon: Award,
      title: "Servicio profesional",
      description: "Fotógrafos con +10 años de experiencia en bodas y parejas"
    },
    {
      icon: Users,
      title: "Atención personalizada",
      description: "Te acompañamos en todo el proceso para crear la sesión perfecta"
    },
    {
      icon: MapPin,
      title: "Toda España",
      description: "Disponible en Madrid, Barcelona, Valencia, Sevilla, Zaragoza, Málaga, Bilbao, Córdoba y A Coruña"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
