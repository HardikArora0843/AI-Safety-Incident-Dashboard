import { useState, useEffect } from 'react';
import { AlertTriangle, Shield, Zap } from 'lucide-react';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative mb-6 sm:mb-10 perspective-container">
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-900/70 via-blue-900/60 to-indigo-800/80 blur-xl opacity-80 transform transition-all duration-700 ${loaded ? 'scale-100' : 'scale-90'}`}></div>
      <div 
        className={`card-3d relative z-10 px-2 sm:px-8 py-6 sm:py-8 rounded-3xl bg-white/10 glass shadow-2xl border border-white/30 flex flex-col items-center justify-center text-center transform transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
      >
        <div className="card-inner">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Shield className="text-blue-300 h-6 w-6 sm:h-8 sm:w-8 animate-float" strokeWidth={1.5} />
            <AlertTriangle className="text-orange-300 h-5 w-5 sm:h-7 sm:w-7 animate-float" style={{animationDelay: "0.5s"}} strokeWidth={1.5} />
            <Zap className="text-indigo-300 h-5 w-5 sm:h-7 sm:w-7 animate-float" style={{animationDelay: "1s"}} strokeWidth={1.5} />
          </div>
          <div className="card-content">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200 mb-2 relative shimmer">
              AI Safety Incident Dashboard
            </h1>
            <p className="text-sm sm:text-lg text-blue-100 font-medium">
              Monitor and resolve AI safety incidents in real time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}