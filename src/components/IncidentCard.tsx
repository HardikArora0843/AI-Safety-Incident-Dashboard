import { useState, useEffect } from 'react';
import { ChevronDown, AlertCircle, Calendar, Clock } from 'lucide-react';
import { Incident, severityStyles } from '../types/incident';
import { useTheme } from '../context/ThemeContext';

interface IncidentCardProps {
  incident: Incident;
  isExpanded: boolean;
  toggleExpand: () => void;
  animationDelay: number;
}

export default function IncidentCard({ 
  incident, 
  isExpanded, 
  toggleExpand,
  animationDelay 
}: IncidentCardProps) {
  const [mounted, setMounted] = useState(false);
  const [hover, setHover] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date);
  };
  
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div
      className={`card-3d rounded-2xl ${
        isDark 
          ? 'bg-white/10 border-slate-500/50' 
          : 'bg-white/80 border-slate-200'
      } backdrop-blur-lg shadow-xl border-2 p-4 sm:p-6 transition-all hover:scale-[1.015] hover:shadow-2xl group glass transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
      style={{ 
        transitionDelay: `${animationDelay}ms`,
        transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="card-inner">
        <div className="card-content">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className={`text-base sm:text-xl font-bold ${isDark ? 'text-white group-hover:text-blue-300' : 'text-slate-800 group-hover:text-blue-600'} transition-colors flex items-start`}>
                <AlertCircle className={`mr-2 mt-1 ${incident.severity === 'High' ? 'text-rose-400' : incident.severity === 'Medium' ? 'text-orange-400' : 'text-emerald-400'}`} size={16} />
                <span>{incident.title}</span>
              </h3>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3">
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border-2 font-semibold text-xs shadow-sm transition-all duration-300 animate-badge-glow ${severityStyles[incident.severity]}`}
                  aria-label={`Severity: ${incident.severity}`}
                >
                  {incident.severity}
                </span>
                <span className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'} flex items-center`}>
                  <Calendar className="mr-1" size={12} />
                  {formatDate(incident.reported_at)}
                </span>
                <span className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'} flex items-center`}>
                  <Clock className="mr-1" size={12} />
                  {formatTime(incident.reported_at)}
                </span>
              </div>
            </div>
            <button
              className={`mt-2 sm:mt-0 px-3 sm:px-4 py-1 sm:py-2 rounded-xl ${
                isDark
                  ? 'bg-white/20 text-white border-white/30'
                  : 'bg-blue-500 text-white border-blue-400'
              } font-semibold shadow transition-all flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-blue-400 border text-xs sm:text-base hover:scale-105`}
              onClick={toggleExpand}
              aria-expanded={isExpanded}
              aria-controls={`incident-desc-${incident.id}`}
            >
              View Details
              <ChevronDown
                className={`ml-1 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                size={16}
              />
            </button>
          </div>
          {isExpanded && (
            <div
              id={`incident-desc-${incident.id}`}
              className={`mt-4 border-t ${isDark ? 'border-slate-500 text-slate-200' : 'border-slate-300 text-slate-700'} pt-3 animate-expand-in`}
            >
              <p className="leading-relaxed">{incident.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}