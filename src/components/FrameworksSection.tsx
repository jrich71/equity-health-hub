import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Globe, FileText } from "lucide-react";

const frameworks = [
  {
    title: "A framework for considering the use of generative AI for health",
    authors: "de Vere Hunt IJ, Jin KX, Linos E",
    year: "2025",
    journal: "NPJ Digital Medicine",
    description:
      "Four overarching principles and four key categories of risk to guide the use of GenAI for health, with a focus on ensuring equitable global implementation",
    tags: ["Case Studies", "LMIC"],
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12095475/",
  },
  {
    title: "Ethics and Governance of Generative AI for Health",
    authors: "World Health Organization",
    year: "2024",
    journal: "WHO Publications",
    description:
      "Official WHO guidance on ethical deployment and governance of large language models and generative AI in healthcare.",
    tags: ["Ethics", "Policy", "WHO"],
    link: "https://www.who.int/publications/i/item/9789240084759",
  },
  {
    title: "The Ubuntu Way: Ensuring Ethical AI Integration in Health Research",
    authors: "Odero B, Nderitu D, Samuel G",
    year: "2024",
    journal: "Wellcome Open Research",
    description:
      "The Ubuntu framework has the potential to foster more responsible and contextually relevant AI health research practices in Africa",
    tags: ["Framework", "Digital Health"],
    link: "https://wellcomeopenresearch.org/articles/9-625",
  },
];

const FrameworksSection = () => {
  return (
    <section id="frameworks" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-primary mb-6">
            Equity-Based Implementation Frameworks
          </h2>
          <p className="text-lg text-muted-foreground">
            These frameworks help practitioners translate ethical intent into equitable implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frameworks.map((framework, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <CardHeader>
                <CardTitle className="text-xl font-sans text-primary mb-2">{framework.title}</CardTitle>
                <CardDescription className="font-semibold text-foreground/70">
                  {framework.authors} ({framework.year})
                </CardDescription>
                <CardDescription className="text-sm italic">{framework.journal}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">{framework.description}</p>
                <div className="flex flex-wrap gap-2">
                  {framework.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full group" asChild>
                  <a href={framework.link} target="_blank" rel="noopener noreferrer">
                    Learn More
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworksSection;
