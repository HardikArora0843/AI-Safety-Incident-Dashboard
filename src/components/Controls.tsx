import { Filter, Plus, ArrowUpDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ControlsProps {
  severityFilter: string;
  setSeverityFilter: (filter: string) => void;
  sortOrder: "newest" | "oldest";
  setSortOrder: (order: "newest" | "oldest") => void;
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

export default function Controls({
  severityFilter,
  setSeverityFilter,
  sortOrder,
  setSortOrder,
  showForm,
  setShowForm
}: ControlsProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
      <div className="flex gap-2 w-full sm:w-auto">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Filter size={16} className={isDark ? "text-gray-400" : "text-slate-500"} />
          </div>
          <select
            className={`rounded-xl border-2 ${
              isDark 
                ? "border-slate-500 bg-white/10 text-gray-100" 
                : "border-slate-300 bg-white text-slate-800"
            } pl-10 pr-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all shadow-md text-xs sm:text-base w-full glass`}
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
            aria-label="Filter by severity"
          >
            <option value="All" className={isDark ? "bg-slate-800 text-white" : "bg-white text-slate-800"}>All Severities</option>
            <option value="Low" className={isDark ? "bg-slate-800 text-white" : "bg-white text-slate-800"}>Low</option>
            <option value="Medium" className={isDark ? "bg-slate-800 text-white" : "bg-white text-slate-800"}>Medium</option>
            <option value="High" className={isDark ? "bg-slate-800 text-white" : "bg-white text-slate-800"}>High</option>
          </select>
        </div>
        
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <ArrowUpDown size={16} className={isDark ? "text-gray-400" : "text-slate-500"} />
          </div>
          <select
            className={`rounded-xl border-2 ${
              isDark 
                ? "border-slate-500 bg-white/10 text-gray-100" 
                : "border-slate-300 bg-white text-slate-800"
            } pl-10 pr-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all shadow-md text-xs sm:text-base w-full glass`}
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
            aria-label="Sort by date"
          >
            <option value="newest" className={isDark ? "bg-slate-800 text-white" : "bg-white text-slate-800"}>Newest First</option>
            <option value="oldest" className={isDark ? "bg-slate-800 text-white" : "bg-white text-slate-800"}>Oldest First</option>
          </select>
        </div>
      </div>
      
      <button
        className="w-full sm:w-auto ml-0 sm:ml-auto px-4 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold shadow-lg hover:scale-105 hover:from-blue-600 hover:to-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center sm:justify-start gap-2 border-2 border-blue-400/30 text-xs sm:text-base relative overflow-hidden group"
        onClick={() => setShowForm((v) => !v)}
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400/0 via-blue-400/40 to-blue-400/0 skew-x-[-30deg] translate-x-[-100%] group-hover:translate-x-[100%] transition-all ease-in-out duration-1000"></span>
        <Plus className="h-4 w-4 text-white" />
        {showForm ? "Cancel" : "Report New Incident"}
      </button>
    </div>
  );
}