import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Globe, FileText } from "lucide-react";

const frameworks = [
  {
    title: "EquIR Framework",
    subtitle: "Equity-Based Implementation Research",
    description: "A model for embedding equity in every phase of implementation research.",
    details: "These frameworks help practitioners translate ethical intent into equitable implementation.",
    icon: BookOpen,
    link: "https://implementationscience.biomedcentral.com/articles/10.1186/s13012-023-01333-z",
  },
  {
    title: "Digital Healthcare Equity Framework",
    subtitle: "Evidence- and Consensus-Based Guide",
    description: "A consensus-driven guide for addressing bias and access in digital health.",
    details: "Built through systematic review and expert consensus to identify key equity considerations.",
    icon: Globe,
    link: "https://www.nature.com/articles/s41746-023-00954-x",
  },
  {
    title: "WHO Guidance (2024)",
    subtitle: "Ethics and Governance of AI in Health",
    description: "Official WHO recommendations on governance of generative and LLM-based AI tools in health.",
    details: "Comprehensive policy guidance for ethical deployment of AI in healthcare settings.",
    icon: FileText,
    link: "https://www.who.int/publications/i/item/9789240084759",
  },
];

const FrameworksSection = () => {
  return (
    <section id="frameworks" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Equity-Based Implementation Frameworks
          </h2>
          <p className="text-lg text-muted-foreground">
            These frameworks help practitioners translate ethical intent into equitable implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frameworks.map((framework, index) => {
            const Icon = framework.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-serif text-primary mb-2">
                    {framework.title}
                  </CardTitle>
                  <CardDescription className="font-semibold text-foreground/70">
                    {framework.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/80 leading-relaxed">
                    {framework.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {framework.details}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group"
                    asChild
                  >
                    <a
                      href={framework.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FrameworksSection;
