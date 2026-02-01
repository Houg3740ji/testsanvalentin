import logo from "@/assets/logo-lupu-agency.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <a 
          href="https://lupu.agency/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block transition-opacity hover:opacity-80"
        >
          <img 
            src={logo} 
            alt="Lupu Agency - Events, Photography, Film" 
            className="h-10 md:h-12 w-auto"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
