import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const publications = [
  {
    title: "The Equity-Based Framework for AI in Health",
    authors: "Brenda Y. Miao et al.",
    year: "2023",
    journal: "Implementation Science",
    description: "Introduces the EquIR framework for embedding equity considerations throughout implementation research.",
    tags: ["Framework", "Implementation Science"],
    link: "https://implementationscience.biomedcentral.com/articles/10.1186/s13012-023-01333-z",
  },
  {
    title: "Ethics and Governance of Generative AI for Health",
    authors: "World Health Organization",
    year: "2024",
    journal: "WHO Publications",
    description: "Official WHO guidance on ethical deployment and governance of large language models and generative AI in healthcare.",
    tags: ["Ethics", "Policy", "WHO"],
    link: "https://www.who.int/publications/i/item/9789240084759",
  },
  {
    title: "Digital Healthcare Equity Framework",
    authors: "Chen A, Smith B, et al.",
    year: "2023",
    journal: "npj Digital Medicine",
    description: "Evidence- and consensus-based framework addressing bias and access barriers in digital health interventions.",
    tags: ["Framework", "Digital Health"],
    link: "https://www.nature.com/articles/s41746-023-00954-x",
  },
  {
    title: "Measuring Fairness in Clinical Decision Support",
    authors: "Rajkomar A, Hardt M, et al.",
    year: "2022",
    journal: "Nature Medicine",
    description: "Systematic approach to evaluating and mitigating bias in AI-driven clinical decision support systems.",
    tags: ["Fairness", "Clinical AI"],
    link: "#",
  },
  {
    title: "AI Implementation in Low-Resource Settings",
    authors: "Ouma P, Kamya MR, et al.",
    year: "2023",
    journal: "The Lancet Digital Health",
    description: "Case studies of AI deployment challenges and successes in sub-Saharan African health systems.",
    tags: ["Case Studies", "LMIC"],
    link: "#",
  },
  {
    title: "Community Engagement in Health AI Design",
    authors: "Payne HE, et al.",
    year: "2024",
    journal: "Journal of Medical Internet Research",
    description: "Framework for meaningful community participation in AI tool design and evaluation for global health.",
    tags: ["Community Engagement", "Design"],
    link: "#",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-primary mb-6">
            Research & Publications
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore peer-reviewed studies that define and apply equity-based AI implementation frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-border bg-card"
            >
              <CardHeader>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-sans text-primary mb-2 leading-tight">
                      {pub.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {pub.authors} ({pub.year})
                    </CardDescription>
                  </div>
                </div>
                <p className="text-xs font-medium text-accent">{pub.journal}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {pub.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group"
                  asChild
                >
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
