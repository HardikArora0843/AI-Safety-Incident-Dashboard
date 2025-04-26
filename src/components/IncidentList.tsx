import { useRef, useEffect } from 'react';
import { Incident } from '../types/incident';
import IncidentCard from './IncidentCard';

interface IncidentListProps {
  incidents: Incident[];
  expandedIncident: number | null;
  setExpandedIncident: (id: number | null) => void;
}

export default function IncidentList({ 
  incidents, 
  expandedIncident, 
  setExpandedIncident 
}: IncidentListProps) {
  const listRef = useRef<HTMLDivElement>(null);
  
  // Smooth scroll when incidents are filtered
  useEffect(() => {
    if (listRef.current && incidents.length > 0) {
      // Add a small delay to make sure all cards are rendered
      const timer = setTimeout(() => {
        listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [incidents.length]);

  if (incidents.length === 0) {
    return (
      <div 
        className="rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border-2 border-slate-500/50 p-6 sm:p-8 text-center animate-fade-in glass"
        ref={listRef}
      >
        <p className="text-white text-lg">No incidents match your filters</p>
        <p className="text-blue-200 text-sm mt-2">Try changing your filter criteria</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:gap-8 perspective-container" ref={listRef}>
      {incidents.map((incident, index) => (
        <IncidentCard
          key={incident.id}
          incident={incident}
          isExpanded={expandedIncident === incident.id}
          toggleExpand={() => setExpandedIncident(expandedIncident === incident.id ? null : incident.id)}
          animationDelay={index * 100}
        />
      ))}
    </div>
  );
}