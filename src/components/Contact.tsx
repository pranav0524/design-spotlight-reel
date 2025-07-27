import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Instagram, MapPin, Clock, Users, CheckCircle, Send } from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };
  const contactInfo = [{
    icon: Phone,
    title: "Call Us",
    details: ["+91 9371525982", "+91 9356992477"],
    links: ["tel:+919371525982", "tel:+919356992477"]
  }, {
    icon: Mail,
    title: "Email",
    details: ["weforemedia@gmail.com"],
    links: ["mailto:weforemedia@gmail.com"]
  }, {
    icon: Instagram,
    title: "Instagram",
    details: ["@weforeofficial"],
    links: ["https://www.instagram.com/weforeofficial"]
  }, {
    icon: MapPin,
    title: "Location",
    details: ["Mumbai, India"],
    links: ["#"]
  }];
  const stats = [{
    icon: Clock,
    number: "24h",
    label: "Response Time"
  }, {
    icon: CheckCircle,
    number: "100%",
    label: "Client Satisfaction"
  }, {
    icon: Users,
    number: "50+",
    label: "Projects Done"
  }];
  return <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gradient-primary md:text-5xl">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your brand? Get in touch with us and let's create something amazing together. 
            We're here to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <h3 className="font-bold mb-6 text-gradient-secondary text-2xl">
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className="bg-background/50" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className="bg-background/50" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} className="bg-background/50" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} className="bg-background/50" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} className="bg-background/50 min-h-[120px]" required />
              </div>
              
              <Button type="submit" className="w-full gradient-primary text-white shadow-glow hover:shadow-glow-accent transition-smooth" size="lg">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 bg-glass border-primary/20">
              <h3 className="font-bold mb-6 text-gradient-secondary text-2xl">
                Get in touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We'd love to hear from you. Choose the most convenient way to reach out, 
                and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => <a key={detailIndex} href={info.links[detailIndex]} className="block text-muted-foreground hover:text-primary transition-smooth">
                            {detail}
                          </a>)}
                      </div>
                    </div>
                  </div>)}
              </div>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => <Card key={index} className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover-lift">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gradient-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;