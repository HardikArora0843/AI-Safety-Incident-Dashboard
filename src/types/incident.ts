export type Severity = "Low" | "Medium" | "High";

export interface Incident {
  id: number;
  title: string;
  description: string;
  severity: Severity;
  reported_at: string;
}

export const severityStyles = {
  Low: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700",
  Medium: "bg-orange-100 text-orange-800 dark:bg-orange-900/80 dark:text-orange-200 border-orange-300 dark:border-orange-700",
  High: "bg-rose-100 text-rose-800 dark:bg-rose-900/80 dark:text-rose-200 border-rose-300 dark:border-rose-700",
};

export const severityColors = {
  Low: "from-emerald-400 to-emerald-600",
  Medium: "from-orange-400 to-orange-600",
  High: "from-rose-400 to-rose-600",
};