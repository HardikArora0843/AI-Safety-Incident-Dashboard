import { useState, useEffect } from 'react';
import { type Severity } from '../types/incident';
import { AlertCircle, FileText, AlertTriangle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface IncidentFormProps {
  onSubmit: (incident: { title: string; description: string; severity: Severity }) => void;
  onCancel: () => void;
}

export default function IncidentForm({ onSubmit, onCancel }: IncidentFormProps) {
  const [newIncident, setNewIncident] = useState<{ title: string; description: string; severity: Severity }>({
    title: "",
    description: "",
    severity: "Medium",
  });
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({});
  const [animateIn, setAnimateIn] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const validateForm = () => {
    const errs: { title?: string; description?: string } = {};
    if (!newIncident.title.trim()) errs.title = "Title is required";
    if (!newIncident.description.trim()) errs.description = "Description is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(newIncident);
  };

  return (
    <div className={`perspective-container transition-all duration-500 ${animateIn ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'}`}>
      <form 
        onSubmit={handleSubmit} 
        className={`mb-8 sm:mb-10 rounded-2xl ${
          isDark 
            ? 'bg-white/10 border-blue-400/30' 
            : 'bg-white/80 border-blue-300'
        } backdrop-blur-lg shadow-xl p-4 sm:p-8 space-y-3 sm:space-y-5 border-2 card-3d relative z-10 glass`}
      >
        <div className="card-inner">
          <div className="card-content">
            <h2 className={`text-lg sm:text-xl font-bold mb-4 flex items-center ${isDark ? 'text-white' : 'text-slate-800'}`}>
              <AlertCircle className="mr-2 text-blue-300" size={20} />
              Report New Incident
            </h2>
            
            <div>
              <label className={`block text-xs sm:text-sm font-semibold mb-1 flex items-center ${isDark ? 'text-white' : 'text-slate-700'}`} htmlFor="title">
                <FileText className="mr-2 text-blue-300" size={16} />
                Title
              </label>
              <input
                id="title"
                className={`w-full rounded-xl border-2 px-2 py-2 sm:px-4 sm:py-2 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs sm:text-base transition-all duration-300 focus:border-blue-400 ${
                  isDark 
                    ? 'bg-white/5 text-white border-slate-500/50' 
                    : 'bg-white/80 text-slate-800 border-slate-300'
                }`}
                value={newIncident.title}
                onChange={(e) => setNewIncident({ ...newIncident, title: e.target.value })}
                required
                aria-invalid={!!errors.title}
                aria-describedby="title-error"
              />
              {errors.title && (
                <div id="title-error" className="text-rose-400 text-xs mt-1 flex items-center">
                  <AlertTriangle className="mr-1" size={12} />
                  {errors.title}
                </div>
              )}
            </div>
            
            <div>
              <label className={`block text-xs sm:text-sm font-semibold mb-1 flex items-center ${isDark ? 'text-white' : 'text-slate-700'}`} htmlFor="description">
                <FileText className="mr-2 text-blue-300" size={16} />
                Description
              </label>
              <textarea
                id="description"
                className={`w-full rounded-xl border-2 px-2 py-2 sm:px-4 sm:py-2 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs sm:text-base transition-all duration-300 focus:border-blue-400 ${
                  isDark 
                    ? 'bg-white/5 text-white border-slate-500/50' 
                    : 'bg-white/80 text-slate-800 border-slate-300'
                }`}
                value={newIncident.description}
                onChange={(e) => setNewIncident({ ...newIncident, description: e.target.value })}
                rows={3}
                required
                aria-invalid={!!errors.description}
                aria-describedby="description-error"
              />
              {errors.description && (
                <div id="description-error" className="text-rose-400 text-xs mt-1 flex items-center">
                  <AlertTriangle className="mr-1" size={12} />
                  {errors.description}
                </div>
              )}
            </div>
            
            <div>
              <label className={`block text-xs sm:text-sm font-semibold mb-1 flex items-center ${isDark ? 'text-white' : 'text-slate-700'}`} htmlFor="severity">
                <AlertCircle className="mr-2 text-blue-300" size={16} />
                Severity
              </label>
              <select
                id="severity"
                className={`w-full rounded-xl border-2 px-2 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs sm:text-base transition-all duration-300 focus:border-blue-400 ${
                  isDark 
                    ? 'bg-white/5 text-white border-slate-500/50' 
                    : 'bg-white/80 text-slate-800 border-slate-300'
                }`}
                value={newIncident.severity}
                onChange={(e) => setNewIncident({ ...newIncident, severity: e.target.value as Severity })}
              >
                <option value="Low" className={isDark ? "bg-slate-800 text-white" : "bg-white text-slate-800"}>Low</option>
                <option value="Medium" className={isDark ? "bg-slate-800 text-white" : "bg-white text-slate-800"}>Medium</option>
                <option value="High" className={isDark ? "bg-slate-800 text-white" : "bg-white text-slate-800"}>High</option>
              </select>
            </div>
            
            <div className="flex gap-3 mt-5">
              <button
                type="submit"
                className="flex-1 py-2 sm:py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold shadow-lg hover:scale-105 hover:from-blue-600 hover:to-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 border-2 border-blue-400/30 text-xs sm:text-base relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400/0 via-blue-400/40 to-blue-400/0 skew-x-[-30deg] translate-x-[-100%] group-hover:translate-x-[100%] transition-all ease-in-out duration-1000"></span>
                Submit Report
              </button>
              
              <button
                type="button"
                onClick={onCancel}
                className={`px-4 py-2 sm:py-3 rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 border-2 text-xs sm:text-base ${
                  isDark 
                    ? 'bg-slate-700/50 text-white border-slate-500/30 hover:bg-slate-600/50' 
                    : 'bg-slate-200 text-slate-700 border-slate-300 hover:bg-slate-300'
                }`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}