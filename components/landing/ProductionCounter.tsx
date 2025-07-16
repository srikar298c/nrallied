'use client'
import React, { useState, useEffect, useRef } from 'react';

interface ProductionCounterProps {
  dailyCapacity: number; // in lakhs
  prefix?: string;
  suffix?: string;
}

const ProductionCounter: React.FC<ProductionCounterProps> = ({ 
  dailyCapacity, 
  prefix = '', 
  suffix = ' bottles'
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  
  // Convert lakhs to actual number
  const totalDaily = dailyCapacity * 100000;
  
  // Calculate production per second (assuming 24 hour production)
  const productionPerSecond = totalDaily / (24 * 60 * 60);
  
  useEffect(() => {
    const node = counterRef.current
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
  
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCount(prevCount => {
        const newCount = prevCount + productionPerSecond;
        return newCount > totalDaily ? 0 : newCount;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isVisible, productionPerSecond, totalDaily]);
  
  return (
    <div 
      ref={counterRef}
      className="bg-gradient-to-r from-[#F0F4F9] to-[#95D7FA] p-6 rounded-lg shadow-md text-center"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-2">Production Counter</h3>
      <div className="text-4xl font-bold bg-gradient-to-r from-[#F14472] via-[#AB64F2] to-[#F24C26] bg-clip-text text-transparent">
        {prefix}{Math.floor(count).toLocaleString()}{suffix}
      </div>
      <p className="text-gray-600 mt-2">Daily Capacity: {dailyCapacity} lakh{suffix}</p>
    </div>
  );
};

export default ProductionCounter;