import { Card } from "@/components/ui/card";
import { Target, Users, Zap, TrendingUp } from "lucide-react";
const About = () => {
  const features = [{
    icon: Target,
    title: "Strategic Approach",
    description: "We create data-driven strategies tailored to your business goals and target audience."
  }, {
    icon: Users,
    title: "Expert Team",
    description: "Our team of creative professionals brings years of experience in digital marketing."
  }, {
    icon: Zap,
    title: "Fast Execution",
    description: "Quick turnaround times without compromising on quality or creativity."
  }, {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Track record of successful campaigns that drive engagement and conversions."
  }];
  const stats = [{
    number: "150+",
    label: "Projects Completed"
  }, {
    number: "50+",
    label: "Happy Clients"
  }, {
    number: "95%",
    label: "Success Rate"
  }];
  return <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => <Card key={index} className="p-8 text-center bg-glass border-primary/20 hover-lift bg-slate-900">
              <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2 bg-slate-950 rounded-none">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-lg">{stat.label}</div>
            </Card>)}
        </div>

        {/* About Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gradient-primary bg-clip-text text-blue-500 md:text-5xl">
            About Wefore Media
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are a leading social media agency dedicated to helping businesses thrive in the digital world. 
            Our team of experts combines creativity with strategy to deliver impactful campaigns that drive results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => <Card key={index} className="p-6 hover-lift bg-card/50 backdrop-blur-sm border-border/50 group">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>)}
        </div>

        {/* Mission Section */}
        <Card className="p-8 md:p-12 bg-glass border-primary/20 shadow-soft">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 gradient-secondary bg-clip-text text-blue-500 md:text-3xl">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              To empower businesses with compelling digital narratives that resonate with their audience, 
              drive meaningful engagement, and create lasting connections. We believe every brand has a 
              unique story to tell, and we're here to help you tell it in the most impactful way possible.
            </p>
          </div>
        </Card>
      </div>
    </section>;
};
export default About;