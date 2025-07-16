'use client'
import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return 'translate3d(0, 50px, 0)';
      case 'down':
        return 'translate3d(0, -50px, 0)';
      case 'left':
        return 'translate3d(50px, 0, 0)';
      case 'right':
        return 'translate3d(-50px, 0, 0)';
      default:
        return 'translate3d(0, 50px, 0)';
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ${className}`}
      style={{
        transform: isVisible ? 'translate3d(0, 0, 0)' : getTransform(),
        opacity: isVisible ? 1 : 0,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;