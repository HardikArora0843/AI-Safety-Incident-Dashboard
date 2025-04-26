import { useState, useEffect } from 'react';
import { AlertCircle, AlertTriangle } from 'lucide-react';

interface SummaryCardsProps {
  openCount: number;
  highCount: number;
}

export default function SummaryCards({ openCount, highCount }: SummaryCardsProps) {
  const [counters, setCounters] = useState({ open: 0, high: 0 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        open: prev.open < openCount ? prev.open + 1 : openCount,
        high: prev.high < highCount ? prev.high + 1 : highCount
      }));
    }, 100);
    
    if (counters.open === openCount && counters.high === highCount) {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [counters, openCount, highCount]);

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6 sm:mb-8 perspective-container">
      <div 
        className="card-3d rounded-2xl bg-gradient-to-br from-blue-600/70 to-indigo-700/70 shadow-xl p-3 sm:p-6 flex flex-col items-center justify-center border-2 border-blue-400/30 transition-transform duration-300 animate-scale-in glass"
      >
        <div className="card-inner">
          <div className="card-content flex flex-col items-center">
            <AlertCircle className="text-blue-200 h-6 w-6 sm:h-8 sm:w-8 mb-2 animate-float" strokeWidth={1.5} />
            <span className="text-white text-lg sm:text-3xl font-bold">{counters.open}</span>
            <span className="text-blue-100 text-xs sm:text-base mt-1">Total Incidents</span>
          </div>
        </div>
      </div>
      <div 
        className="card-3d rounded-2xl bg-gradient-to-br from-rose-600/70 to-rose-700/70 shadow-xl p-3 sm:p-6 flex flex-col items-center justify-center border-2 border-rose-400/30 transition-transform duration-300 animate-scale-in glass"
        style={{ animationDelay: "150ms" }}
      >
        <div className="card-inner">
          <div className="card-content flex flex-col items-center">
            <AlertTriangle className="text-rose-200 h-6 w-6 sm:h-8 sm:w-8 mb-2 animate-float" strokeWidth={1.5} />
            <span className="text-white text-lg sm:text-3xl font-bold">{counters.high}</span>
            <span className="text-rose-100 text-xs sm:text-base mt-1">High Severity</span>
          </div>
        </div>
      </div>
    </div>
  );
}