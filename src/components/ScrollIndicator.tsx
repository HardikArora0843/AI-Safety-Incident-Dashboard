import { useState, useEffect } from 'react';

export default function ScrollIndicator() {
  const [scrollWidth, setScrollWidth] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      
      setScrollWidth(scrollPercent);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="scroll-indicator"
      style={{ width: `${scrollWidth}%` }}
    />
  );
}