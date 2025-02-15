export interface PracticeMetrics {
  revenue: number;
  patientGrowth: number;
  appointmentFillRate: number;
  treatmentAcceptanceRate: number;
}

export interface AIConsultantPrompt {
  metrics: PracticeMetrics;
  focusAreas: Array<'revenue' | 'operations' | 'patient-care' | 'marketing'>;
  timeframe?: 'daily' | 'weekly' | 'monthly' | 'yearly';
  question: string;
}

export interface AIResponse {
  insight: string;
  recommendations: string[];
}

export interface AIInsight {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  recommendations: string[];
  timestamp: string;
  status: 'active' | 'archived';
}