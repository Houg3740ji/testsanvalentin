import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import PriceSection from "@/components/PriceSection";
import PaymentSection from "@/components/PaymentSection";
import ContactForm from "@/components/ContactForm";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServiceSection />
        <PriceSection />
        <PaymentSection />
        <ContactForm />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
