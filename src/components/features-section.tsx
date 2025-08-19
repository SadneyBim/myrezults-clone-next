import { 
  Zap, 
  Shield, 
  Wallet, 
  Heart, 
  MessageSquare, 
  FileText, 
  Lock, 
  Smartphone, 
  Bell 
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Beautifully designed for modern dating."
    },
    {
      icon: Shield,
      title: "ID Verification", 
      description: "Control name visibility on your Rezults."
    },
    {
      icon: Wallet,
      title: "Apple & Google Wallet Integration",
      description: "Rezults in your wallet. One tap away. Anytime."
    },
    {
      icon: Heart,
      title: "Smart Health",
      description: "Smart features to help you track your health."
    },
    {
      icon: MessageSquare,
      title: "Anonymous SMS",
      description: "Send a SMS requesting someone to get tested."
    },
    {
      icon: FileText,
      title: "Context is Power",
      description: "Share Rezults with a note. Not just metrics."
    },
    {
      icon: Lock,
      title: "Privacy at it's key",
      description: "Your data where you need. Protected."
    },
    {
      icon: Smartphone,
      title: "No app? No problem",
      description: "Rezults can be shared On and off the app."
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Helpful alerts. Right when you need them."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your health, your safety, your confidence
            <span className="gradient-text"> in app</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <div 
                key={feature.title}
                className="group p-6 rounded-2xl bg-card/10 backdrop-blur-sm border border-border/20 hover:border-primary/30 transition-all duration-500 hover:glow-primary hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};