import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

interface Framework {
  id: string;
  title: string;
  authors: string;
  year: string;
  journal: string;
  description: string;
  tags: string[];
  link: string;
}

const FrameworksSection = () => {
  const { data: frameworks, isLoading } = useQuery({
    queryKey: ["frameworks"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("frameworks")
        .select("*")
        .order("created_at", { ascending: true });
      
      if (error) throw error;
      return data as Framework[];
    },
  });

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
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="border-border bg-card">
                <CardHeader>
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-8 w-full" />
                </CardContent>
              </Card>
            ))
          ) : (
            frameworks?.map((framework) => (
              <Card
                key={framework.id}
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
                      <span key={tagIndex} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
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
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FrameworksSection;