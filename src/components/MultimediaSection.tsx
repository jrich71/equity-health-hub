import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";

const MultimediaSection = () => {
  return (
    <section id="multimedia" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-primary mb-6">
            Multimedia
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch thought leaders discuss the intersection of AI, equity, and global implementation.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border-border bg-card overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Play className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-sans text-primary">
                    Equity-Based Implementation Science
                  </CardTitle>
                </div>
                <CardDescription>
                  Mass General Brigham • Dr. Brenda Miao
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/OQGnn-nZNk4?start=180"
                    title="Equity-Based Implementation Science"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
                  An in-depth discussion on integrating equity principles throughout the implementation research process, 
                  with practical examples from global health contexts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Play className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-sans text-primary">
                    AI in Healthcare: From Implementation to Impact at Scale | PD 19
                  </CardTitle>
                </div>
                <CardDescription>
                  World Health Summit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/9WF4DBQd8LA"
                    title="AI in Healthcare: From Implementation to Impact at Scale"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
                  A comprehensive panel discussion from the World Health Summit exploring AI implementation strategies and their impact on healthcare systems at scale.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground">
              More podcasts, webinars, and video resources coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultimediaSection;
