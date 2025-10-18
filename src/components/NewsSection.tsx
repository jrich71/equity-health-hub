import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";

const newsItems = [
  {
    title: "WHO launches pilot on equitable AI evaluation in Africa",
    date: "March 2024",
    category: "Policy",
    description: "New initiative to assess generative AI tools in African healthcare systems with focus on equity and access.",
    link: "#",
  },
  {
    title: "NIH announces $50M funding for health equity AI research",
    date: "February 2024",
    category: "Funding",
    description: "Major investment in research addressing algorithmic bias and equitable deployment in underserved communities.",
    link: "#",
  },
  {
    title: "Digital Square releases equity assessment toolkit",
    date: "January 2024",
    category: "Resources",
    description: "Open-source toolkit helping implementers assess digital health equity at every project stage.",
    link: "#",
  },
  {
    title: "Lancet Commission publishes AI equity recommendations",
    date: "December 2023",
    category: "Research",
    description: "Comprehensive guidance on embedding equity principles in AI development and implementation globally.",
    link: "#",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            News & Updates
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay current on the latest research, funding calls, and policy developments in AI equity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-border bg-card group cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-xl font-serif text-primary mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-foreground/80 leading-relaxed mb-4">
                  {item.description}
                </CardDescription>
                <a
                  href={item.link}
                  className="text-sm font-medium text-accent hover:underline inline-flex items-center group"
                >
                  Read more
                  <ExternalLink className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
