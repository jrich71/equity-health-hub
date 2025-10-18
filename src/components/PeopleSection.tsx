import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Building2 } from "lucide-react";

const people = [
  {
    name: "Dr. Brenda Miao",
    role: "Research Scientist",
    affiliation: "Mass General Brigham",
    focus: "Equity-Based Implementation Research",
    type: "researcher",
  },
  {
    name: "Dr. Alain Labrique",
    role: "Director, Digital Health",
    affiliation: "Johns Hopkins Bloomberg School of Public Health",
    focus: "Digital Health Systems & mHealth",
    type: "researcher",
  },
  {
    name: "Dr. Jemima Agyeman",
    role: "Technical Officer",
    affiliation: "WHO Health AI Unit",
    focus: "AI Governance & Policy",
    type: "researcher",
  },
  {
    name: "World Health Organization (WHO)",
    role: "Global Health Authority",
    affiliation: "United Nations",
    focus: "AI Ethics & Governance Standards",
    type: "organization",
  },
  {
    name: "Digital Square",
    role: "Digital Health Initiative",
    affiliation: "PATH",
    focus: "Digital Health Equity & Innovation",
    type: "organization",
  },
  {
    name: "J-PAL",
    role: "Research Center",
    affiliation: "MIT",
    focus: "Evidence-Based Policy & Implementation",
    type: "organization",
  },
];

const PeopleSection = () => {
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
          {people.map((person, index) => (
            <Card
              key={index}
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
                  {person.name}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
