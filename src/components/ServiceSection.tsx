import { Camera, Heart, MapPin, Clock, Images, Sparkles } from "lucide-react";
const ServiceSection = () => {
  const features = [{
    icon: Camera,
    title: "Sesión profesional",
    description: "Sesión de fotos para parejas con un fotógrafo profesional experto en capturar momentos especiales"
  }, {
    icon: Heart,
    title: "Experiencia única",
    description: "Una experiencia pensada como regalo, creando recuerdos que durarán para siempre"
  }, {
    icon: MapPin,
    title: "En toda España",
    description: "Nuestro servicio está disponible en todas las ciudades importantes de España"
  }];
  const sessionIncludes = [{
    icon: Clock,
    text: "1 hora de sesión en tu ciudad"
  }, {
    icon: Images,
    text: "Durante la sesión se harán muchísimas fotografías, capturando cada gesto y momento de forma natural."
  }, {
    icon: Sparkles,
    text: "Elegís vuestras 10 favoritas, que se entregan editadas profesionalmente, con opción a más."
  }];
  return <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-8">
            ¿Qué incluye tu sesión?
          </h2>
          
          <ul className="max-w-2xl mx-auto space-y-4 text-left">
            {sessionIncludes.map((item, index) => <li key={index} className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border/50">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground text-lg leading-relaxed pt-1.5">{item.text}</span>
              </li>)}
          </ul>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default ServiceSection;