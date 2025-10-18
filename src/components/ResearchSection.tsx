import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const publications = [
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
  {
    title: "Development of an evidence- and consensus-based Digital Healthcare Equity Framework",
    authors: "Hatef E, et al.",
    year: "2024",
    journal: "JAMIA Open",
    description:
      "Helping determine that digital technologies are equitable at every phase of the digital healthcare lifecycle.",
    tags: ["Fairness", "Clinical AI"],
    link: "https://pubmed.ncbi.nlm.nih.gov/39553827/",
  },

  {
    title: "How to leverage implementation research for equity in global health",
    authors: "Alonge O",
    year: "2024",
    journal: "Global Health Research and Policy",
    description: "Explicit considerations for health equity as part of implementation research in global health.",
    tags: ["Community Engagement", "Design"],
    link: "https://ghrp.biomedcentral.com/articles/10.1186/s41256-024-00388-5",
  },
  {
    title: "Conceptual framework of equity-focused implementation research for health programs (EquIR)",
    authors: "Eslava-Schmalbach, J, et al.",
    year: "2019",
    journal: "International Journal for Equity in Health",
    description:
      "EquIR is a conceptual framework that aims to reduce or prevent the increase of existing inequalities during implementation.",
    tags: ["Framework", "Implementation Science"],
    link: "https://equityhealthj.biomedcentral.com/articles/10.1186/s12939-019-0984-4",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-primary mb-6">Research & Publications</h2>
          <p className="text-lg text-muted-foreground">
            Explore peer-reviewed studies that define and apply equity-based AI implementation frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {publications.map((pub, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardHeader>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-sans text-primary mb-2 leading-tight">{pub.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {pub.authors} ({pub.year})
                    </CardDescription>
                  </div>
                </div>
                <p className="text-xs font-medium text-accent">{pub.journal}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-foreground/80 leading-relaxed">{pub.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full group" asChild>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    Read Publication
                    <ExternalLink className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
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

export default ResearchSection;
