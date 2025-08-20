import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

export const FAQSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const faqs = [
    {
      question: "What is Zults?",
      answer: "Zults is a secure digital platform that lets you access, store, and share your verified STI test results in a safe, stigma-free way. It transforms your latest STI results into a clear, easy-to-understand and communicate 'Rezults', giving you control over your sexual health conversations."
    },
    {
      question: "How does Zults work?",
      answer: "Connect your healthcare provider or testing service, and Zults securely pulls in your verified STI results. Once verified, your 'Rezults' is created and ready to share digitally, anonymously, or even to be added to your Apple or Google Wallet."
    },
    {
      question: "Is Zults free to use?",
      answer: "Absolutely. Zults is compliant with medical device standards, uses end-to-end encryption, and adheres to strict data privacy protocols. You have full control over who sees your Rezults and how they're shared."
    },
    {
      question: "Is my personal information secure with Zults?",
      answer: "Zults is a smart sexual health technology app designed to facilitate the communication of STI (Sexually Transmitted Infection) results between individuals. It aims to remove the awkwardness from sexual health conversations by allowing users to securely send, request and receive STI results."
    },
    {
      question: "Which providers are compatible with Zults?",
      answer: "Zults connects with a growing number of labs, clinics, and telehealth platforms. If your provider isn't listed, you can request integration, and the Zults team will reach out to them to explore a possible integration."
    },
    {
      question: "Can I share my Rezults with someone who doesn't have the Zults app?",
      answer: "Yes! Your Rezults can be shared via a secure link or added to your Google or Apple Wallet, making it quick, easy, and convenient to share. Even someone without the app downloaded can view your shared Rezults."
    },
    {
      question: "I received an anonymous SMS; what is it?",
      answer: "A Zults App verified user can choose to send a partner / potential partner an SMS that prompts them to get tested. If you wish block any further SMS', you can contact us on contact@myrezults.com or directly click on 'STOP' on the SMS."
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const faqItems = container.querySelectorAll('.faq-item');
    
    // Set initial state - items hidden and positioned to the right
    gsap.set(faqItems, {
      opacity: 0,
      x: 100,
      scale: 0.95
    });

    // Animate each FAQ item when it enters viewport
    faqItems.forEach((item, index) => {
      gsap.to(item, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.15, // Stagger the animations
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-card/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="faq-item bg-card/10 backdrop-blur-sm rounded-xl border border-border/20 px-6 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};