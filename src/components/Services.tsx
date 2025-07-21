import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Megaphone, 
  PenTool, 
  Video, 
  Image,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Social Media Management",
      description: "Complete social media management across all platforms. We curate and manage your social media presence to build engaged communities.",
      features: [
        "Content Planning",
        "Community Management", 
        "Analytics & Reporting",
        "Platform Optimization"
      ],
      color: "from-primary to-accent"
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Create engaging visuals, videos, and copy that resonates with your audience and drives meaningful engagement.",
      features: [
        "Copywriting",
        "Visual Design",
        "Brand Storytelling", 
        "Content Strategy"
      ],
      color: "from-accent to-primary-glow"
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing services to boost your social media engagement with compelling visual content.",
      features: [
        "Short-form Videos",
        "Motion Graphics",
        "Color Grading",
        "Audio Enhancement"
      ],
      color: "from-primary-glow to-accent"
    },
    {
      icon: Image,
      title: "Poster Design",
      description: "Stunning poster designs that grab attention on social media and effectively communicate your brand message.",
      features: [
        "Brand Guidelines",
        "Visual Identity",
        "Print Design",
        "Digital Assets"
      ],
      color: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions designed to elevate your brand and connect 
            with your audience across all social media platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover-lift bg-card/50 backdrop-blur-sm border-border/50 group h-full">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:shadow-glow transition-smooth`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                className="w-full border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-smooth group"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="p-8 md:p-12 bg-glass border-primary/20 shadow-glow text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-secondary bg-clip-text text-transparent">
            Ready to Transform Your Brand?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to create compelling content that drives results and grows your business.
          </p>
          <Button 
            size="lg" 
            className="gradient-primary text-white shadow-glow hover:shadow-glow-accent transition-smooth px-8 py-6 text-lg"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Services;