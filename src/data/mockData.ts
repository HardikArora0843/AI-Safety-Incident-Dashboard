import { Incident } from '../types/incident';

export const mockData: Incident[] = [
  {
    id: 1,
    title: "Autonomous Vehicle Misinterpretation",
    description: "An autonomous delivery drone misinterpreted a stop sign covered by graffiti and proceeded through a pedestrian crossing without yielding. No injuries occurred, but the event triggered a full review of the computer vision models and urban environment edge cases.",
    severity: "High",
    reported_at: "2025-04-10T11:45:00Z",
  },
  {
    id: 2,
    title: "Voice Assistant Privacy Breach",
    description: "A voice assistant device mistakenly recorded and transmitted private conversations after mishearing its wake word. A firmware update has been deployed to improve wake word detection and limit recording buffering times.",
    severity: "Medium",
    reported_at: "2025-03-28T17:00:00Z",
  },
  {
    id: 3,
    title: "Incorrect Medical Diagnosis by AI Tool",
    description: "An AI-powered diagnostic assistant recommended incorrect treatment plans for rare diseases due to a gap in its training data. The system has been temporarily suspended for critical dataset augmentation and model validation.",
    severity: "High",
    reported_at: "2025-03-18T08:30:00Z",
  },
];
