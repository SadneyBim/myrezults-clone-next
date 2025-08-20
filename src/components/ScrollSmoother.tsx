import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface ScrollSmootherProps {
  children: React.ReactNode;
}

export const ScrollSmootherWrapper = ({ children }: ScrollSmootherProps) => {
  const smoother = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    // Create ScrollSmoother instance
    smoother.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,      // Smoothness intensity
      effects: true,    // Enable data-speed effects
      smoothTouch: 0.1, // Smooth scrolling on touch devices
    });

    return () => {
      if (smoother.current) {
        smoother.current.kill();
      }
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
};