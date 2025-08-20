import { Button } from "@/components/ui/button";
import { GlowingStar } from "@/components/ui/glowing-star";
import phoneMockup from "@/assets/phone-mockup.png";
import qrCode from "@/assets/qr-code.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Stars */}
      <div className="absolute top-20 left-20 animate-float">
        <GlowingStar size="sm" />
      </div>
      <div className="absolute top-32 right-32 animate-float-delayed">
        <GlowingStar size="md" variant="secondary" />
      </div>
      <div className="absolute bottom-40 left-32 animate-float-slow">
        <GlowingStar size="lg" />
      </div>
      <div className="absolute bottom-20 right-20 animate-float">
        <GlowingStar size="sm" variant="secondary" />
      </div>

      {/* QR Code - Top Right */}
      <div className="absolute top-8 right-8 bg-card/10 backdrop-blur-sm rounded-2xl p-4 border border-border/20">
        <img 
          src={qrCode} 
          alt="QR Code to download Zults App" 
          className="w-16 h-16 mb-2"
        />
        <p className="text-xs text-muted-foreground text-center max-w-[120px]">
          Scan to download the Zults App on your phone
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-border/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">New</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">STI results,</span>
            <br />
            <span className="gradient-text">Reimagined.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Turn your STI results into Rezults.
          </p>

          {/* Mobile Mockup */}
          <div className="relative mb-12">
            <div className="relative inline-block">
              <img 
                src={phoneMockup} 
                alt="Zults App Interface" 
                className="w-64 md:w-80 mx-auto animate-float transition-glow hover:glow-primary"
              />
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl scale-110 -z-10"></div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-card hover:bg-muted text-foreground border border-border/20 backdrop-blur-sm transition-glow hover:glow-primary"
            >
              Download Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border/20 bg-card/10 backdrop-blur-sm hover:bg-muted transition-glow hover:glow-secondary"
            >
              Download Now
            </Button>
          </div>

          {/* Call to Action */}
          <p className="text-sm text-muted-foreground">
            Get started today
          </p>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none"></div>
    </section>
  );
};