import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  wave: number;
  waveSpeed: number;
}

export default function BackgroundParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    };
    
    updateDimensions();
    
    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(document.body);
    
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;
    
    const particleCount = Math.min(40, Math.floor(dimensions.width * dimensions.height / 15000));
    const colors = isDark ? [
      'rgba(59, 130, 246, 0.3)',  // Blue
      'rgba(96, 165, 250, 0.3)',  // Light blue
      'rgba(147, 197, 253, 0.3)', // Lighter blue
      'rgba(59, 130, 246, 0.2)',  // Transparent blue
      'rgba(37, 99, 235, 0.3)'    // Dark blue
    ] : [
      'rgba(255, 255, 255, 0.4)', // White
      'rgba(224, 242, 254, 0.4)', // Light blue
      'rgba(186, 230, 253, 0.4)', // Sky blue
      'rgba(147, 197, 253, 0.4)', // Blue
      'rgba(191, 219, 254, 0.4)'  // Light blue
    ];
    
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 8 + 3,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: Math.random() * 0.5 + 0.2,
        opacity: 0.1 + Math.random() * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        wave: Math.random() * Math.PI * 2,
        waveSpeed: 0.02 + Math.random() * 0.03
      });
    }
    
    setParticles(newParticles);
  }, [dimensions, theme]);
  
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(p => {
          p.wave += p.waveSpeed;
          const waveOffset = Math.sin(p.wave) * 2;
          
          let newX = p.x + p.speedX + waveOffset;
          let newY = p.y + p.speedY;
          
          if (newY > dimensions.height) {
            newY = -10;
            newX = Math.random() * dimensions.width;
          }
          
          if (newX < 0) newX = dimensions.width;
          if (newX > dimensions.width) newX = 0;
          
          return {
            ...p,
            x: newX,
            y: newY
          };
        })
      );
      
      animationRef.current = requestAnimationFrame(animateParticles);
    };
    
    animationRef.current = requestAnimationFrame(animateParticles);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="particle absolute rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            background: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            transition: 'transform 0.3s ease-out',
            transform: `translate(${Math.sin(particle.wave) * 3}px, ${Math.cos(particle.wave) * 2}px)`
          }}
        />
      ))}
    </div>
  );
}