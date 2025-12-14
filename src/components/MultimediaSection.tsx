import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

interface Multimedia {
  id: string;
  title: string;
  source: string;
  speaker: string | null;
  youtube_url: string;
  description: string;
}

const MultimediaSection = () => {
  const { data: multimedia, isLoading } = useQuery({
    queryKey: ["multimedia"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("multimedia")
        .select("*")
        .order("created_at", { ascending: true });
      
      if (error) throw error;
      return data as Multimedia[];
    },
  });

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
            {isLoading ? (
              Array.from({ length: 2 }).map((_, index) => (
                <Card key={index} className="border-border bg-card overflow-hidden">
                  <CardHeader>
                    <Skeleton className="h-10 w-10 rounded-lg mb-2" />
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="aspect-video w-full rounded-lg" />
                    <Skeleton className="h-16 w-full mt-4" />
                  </CardContent>
                </Card>
              ))
            ) : (
              multimedia?.map((item) => (
                <Card key={item.id} className="border-border bg-card overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Play className="w-5 h-5 text-accent" />
                      </div>
                      <CardTitle className="text-xl font-sans text-primary">
                        {item.title}
                      </CardTitle>
                    </div>
                    <CardDescription>
                      {item.source}{item.speaker ? ` • ${item.speaker}` : ''}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                      <iframe
                        width="100%"
                        height="100%"
                        src={item.youtube_url}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
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