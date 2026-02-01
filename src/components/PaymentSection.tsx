import { CreditCard, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const STRIPE_LINK = "https://buy.stripe.com/bJeeVdfGTgbdbrb5XXao80V";

const PaymentSection = () => {
  return (
    <section id="pago" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reserva tu sesión ahora
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Paga de forma segura y reserva tu sesión de fotos de San Valentín
          </p>
          
          <a 
            href={STRIPE_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full md:w-auto"
          >
            <Button 
              size="lg" 
              className="w-full md:w-auto text-lg px-12 py-7 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Pagar 150 € de forma segura
            </Button>
          </a>
          
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Pago seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>Encriptado SSL</span>
            </div>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Procesado por Stripe, la plataforma de pagos más segura del mundo
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
