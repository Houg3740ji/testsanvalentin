import { Camera, Heart, MapPin } from "lucide-react";

const ServiceSection = () => {
  const features = [
    {
      icon: Camera,
      title: "Sesión profesional",
      description: "Sesión de fotos para parejas con un fotógrafo profesional experto en capturar momentos especiales"
    },
    {
      icon: Heart,
      title: "Experiencia única",
      description: "Una experiencia pensada como regalo, creando recuerdos que durarán para siempre"
    },
    {
      icon: MapPin,
      title: "En toda España",
      description: "Nuestro servicio está disponible en cualquier ciudad de España"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Qué incluye tu sesión?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Todo lo que necesitas para inmortalizar vuestro amor
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-background border border-border/50 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
