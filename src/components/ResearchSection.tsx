import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

interface Publication {
  id: string;
  title: string;
  authors: string;
  year: string;
  journal: string;
  description: string;
  tags: string[];
  link: string;
}

const ResearchSection = () => {
  const { data: publications, isLoading } = useQuery({
    queryKey: ["publications"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("publications")
        .select("*")
        .order("created_at", { ascending: true });
      
      if (error) throw error;
      return data as Publication[];
    },
  });

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
          {isLoading ? (
            Array.from({ length: 2 }).map((_, index) => (
              <Card key={index} className="border-border bg-card">
                <CardHeader>
                  <Skeleton className="h-10 w-10 rounded-lg mb-3" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-8 w-full" />
                </CardContent>
              </Card>
            ))
          ) : (
            publications?.map((pub) => (
              <Card key={pub.id} className="hover:shadow-lg transition-all duration-300 border-border bg-card">
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
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;