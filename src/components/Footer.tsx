const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">
                AI for Global Health Equity
              </h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Curating frameworks, research, and voices advancing equity in global health AI.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#frameworks" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Frameworks
                  </a>
                </li>
                <li>
                  <a href="#research" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#people" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    People & Networks
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Mission</h4>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Our goal is to make complex equity concepts clear, credible, and connected to real-world action.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-sm text-primary-foreground/80">
              © {currentYear} AI for Global Health Equity. Building equity into the future of health AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
