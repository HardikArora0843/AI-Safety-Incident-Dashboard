import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-lg border-2 border-white/20 shadow-lg hover:scale-110 transition-all duration-300 group z-50"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-300 group-hover:text-yellow-200 transition-colors" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 group-hover:text-slate-900 transition-colors" />
      )}
    </button>
  );
}