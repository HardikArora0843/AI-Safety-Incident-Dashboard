import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import SummaryCards from './SummaryCards';
import Controls from './Controls';
import IncidentForm from './IncidentForm';
import IncidentList from './IncidentList';
import { type Incident } from '../types/incident';
import { mockData } from '../data/mockData';
import BackgroundParticles from './BackgroundParticles';
import ScrollIndicator from './ScrollIndicator';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export default function App() {
  const [incidents, setIncidents] = useState<Incident[]>(mockData);
  const [severityFilter, setSeverityFilter] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [expandedIncident, setExpandedIncident] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const { theme } = useTheme();

  const filteredIncidents = incidents.filter((incident) =>
    severityFilter === "All" ? true : incident.severity === severityFilter
  );
  
  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  const handleAddIncident = (newIncident: Omit<Incident, 'id' | 'reported_at'>) => {
    const newEntry: Incident = {
      id: incidents.length + 1,
      reported_at: new Date().toISOString(),
      ...newIncident,
    };
    setIncidents([newEntry, ...incidents]);
    setShowForm(false);
  };

  const openCount = incidents.length;
  const highCount = incidents.filter((i) => i.severity === "High").length;

  return (
    <div className={`min-h-screen animated-gradient ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white' 
        : 'bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 text-slate-800'
    } transition-colors font-sans relative overflow-hidden`}>
      <ThemeToggle />
      <ScrollIndicator />
      <BackgroundParticles />
      
      <div className="max-w-4xl mx-auto py-6 sm:py-10 px-2 sm:px-4 relative z-10">
        <HeroSection />
        
        <SummaryCards openCount={openCount} highCount={highCount} />
        
        <Controls 
          severityFilter={severityFilter}
          setSeverityFilter={setSeverityFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          showForm={showForm}
          setShowForm={setShowForm}
        />
        
        {showForm && (
          <IncidentForm 
            onSubmit={handleAddIncident}
            onCancel={() => setShowForm(false)}
          />
        )}
        
        <IncidentList 
          incidents={sortedIncidents}
          expandedIncident={expandedIncident}
          setExpandedIncident={setExpandedIncident}
        />
      </div>
    </div>
  );
}