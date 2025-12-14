import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Building2, ExternalLink } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

interface Person {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  focus: string;
  type: "researcher" | "organization";
  link: string | null;
}

const PeopleSection = () => {
  const { data: people, isLoading } = useQuery({
    queryKey: ["people_networks"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("people_networks")
        .select("*")
        .order("placement", { ascending: true });
      
      if (error) throw error;
      return data as Person[];
    },
  });

  return (
    <section id="people" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-primary mb-6">
            Key People & Networks
          </h2>
          <p className="text-lg text-muted-foreground">
            Meet the researchers and organizations shaping equity-driven implementation in global health AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="border-border bg-card">
                <CardHeader>
                  <Skeleton className="w-12 h-12 rounded-full mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-6 w-2/3" />
                </CardContent>
              </Card>
            ))
          ) : (
            people?.map((person) => (
              <Card
                key={person.id}
                className="hover:shadow-lg transition-all duration-300 border-border bg-card"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {person.type === "researcher" ? (
                      <Users className="w-6 h-6 text-primary" />
                    ) : (
                      <Building2 className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <CardTitle className="text-xl font-sans text-primary mb-2">
                    {person.link ? (
                      <a 
                        href={person.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors inline-flex items-center gap-2"
                      >
                        {person.name}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      person.name
                    )}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium">
                    {person.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Affiliation:</span>{" "}
                    {person.affiliation}
                  </p>
                  <div>
                    <Badge variant="secondary" className="text-xs">
                      {person.focus}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;