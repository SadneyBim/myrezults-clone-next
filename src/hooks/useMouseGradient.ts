import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useMouseGradient = () => {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gradient = gradientRef.current;
    if (!gradient) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Normalize mouse position to 0-1
      const xPercent = clientX / innerWidth;
      const yPercent = clientY / innerHeight;
      
      // Convert to hue values for dynamic colors
      const hue1 = Math.round(250 + (xPercent * 60)); // 250-310 range
      const hue2 = Math.round(280 + (yPercent * 80)); // 280-360 range
      
      // Create gradient based on mouse position
      const gradientValue = `radial-gradient(
        800px circle at ${clientX}px ${clientY}px,
        hsl(${hue1} 100% 70% / 0.15),
        hsl(${hue2} 100% 60% / 0.1),
        transparent 50%
      )`;
      
      gsap.to(gradient, {
        background: gradientValue,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return gradientRef;
};