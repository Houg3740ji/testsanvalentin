import { useState } from "react";
import { Send, Mail, Phone, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("¡Mensaje enviado!", {
      description: "Nos pondremos en contacto contigo pronto."
    });
    
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Tienes dudas?
            </h2>
            <p className="text-muted-foreground">
              Una vez realizado el pago, nos pondremos en contacto contigo para organizar la sesión
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                name="nombre"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="pl-12 py-6 bg-background"
              />
            </div>
            
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                name="email"
                type="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-12 py-6 bg-background"
              />
            </div>
            
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                name="telefono"
                type="tel"
                placeholder="Tu teléfono"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="pl-12 py-6 bg-background"
              />
            </div>
            
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
              <Textarea
                name="mensaje"
                placeholder="Mensaje (opcional)"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                className="pl-12 pt-4 bg-background resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg"
              disabled={isSubmitting}
              className="w-full py-6"
            >
              <Send className="w-5 h-5 mr-2" />
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
