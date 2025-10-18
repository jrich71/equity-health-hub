import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-[#0077B5]",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "#",
      color: "hover:text-foreground",
    },
    {
      name: "Google Scholar",
      icon: BookOpen,
      href: "#",
      color: "hover:text-accent",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-primary mb-6">
            Contact
          </h2>
          <p className="text-lg text-muted-foreground">
            Interested in contributing or collaborating? Reach out to start the conversation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-border bg-card">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <CardTitle className="text-2xl font-sans text-primary">
                  Get in Touch
                </CardTitle>
              </div>
              <CardDescription>
                Share your ideas, questions, or collaboration opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your interest or inquiry..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Connect on social platforms
                </p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-secondary rounded-lg flex items-center justify-center transition-colors ${link.color}`}
                        aria-label={link.name}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
