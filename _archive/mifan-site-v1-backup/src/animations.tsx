import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AnimInit() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero-title', { y: 80, opacity: 0, duration: 1.2, ease: 'power4.out', delay: 0.15 });
    gsap.from('.hero-subtitle', { y: 40, opacity: 0, duration: 1.0, ease: 'power3.out', delay: 0.4 });
    gsap.from('.hero-cta', { y: 30, opacity: 0, duration: 0.8, ease: 'power2.out', delay: 0.7, scale: 0.95 });

    gsap.from('.product-card', {
      y: 60, opacity: 0, duration: 0.9, ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: { trigger: '.product-grid', start: 'top 85%', toggleActions: 'play none none none' }
    });

    gsap.from('.section-title', {
      y: 40, opacity: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: '.section-title', start: 'top 85%' }
    });

    gsap.from('.footer-link', {
      y: 20, opacity: 0, duration: 0.5, ease: 'power2.out',
      stagger: 0.04,
      scrollTrigger: { trigger: 'footer', start: 'top 95%' }
    });
  }, []);
  return null;
}