import React from 'react';
import { Card } from '@/components/ui/card';
import { useAIConsultant } from '@/hooks/use-ai-consultant';

interface PatientMetrics {
  totalPatients: number;
  newPatients: number;
  returnRate: number;
  satisfactionScore: number;
}

export interface PatientAnalyticsDashboardProps {
  metrics: PatientMetrics;
}

export const PatientAnalyticsDashboard: React.FC<PatientAnalyticsDashboardProps> = ({
  metrics,
}) => {
  const { generateInsight, loading, error } = useAIConsultant();

  const handleGenerateInsights = async () => {
    const insight = await generateInsight({
      metrics: {
        revenue: 0, // Will be calculated from patient data
        patientGrowth: (metrics.newPatients / metrics.totalPatients) * 100,
        appointmentFillRate: 0, // Will be added later
        treatmentAcceptanceRate: 0, // Will be added later
      },
      focusAreas: ['patient-care', 'operations'],
    });

    if (insight) {
      // Handle insight display
      console.log(insight);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Patient Analytics Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <h3 className="text-lg font-semibold">Total Patients</h3>
          <p className="text-3xl font-bold">{metrics.totalPatients}</p>
        </Card>
        
        <Card className="p-4">
          <h3 className="text-lg font-semibold">New Patients</h3>
          <p className="text-3xl font-bold">{metrics.newPatients}</p>
        </Card>
        
        <Card className="p-4">
          <h3 className="text-lg font-semibold">Return Rate</h3>
          <p className="text-3xl font-bold">{metrics.returnRate}%</p>
        </Card>
        
        <Card className="p-4">
          <h3 className="text-lg font-semibold">Satisfaction Score</h3>
          <p className="text-3xl font-bold">{metrics.satisfactionScore}/10</p>
        </Card>
      </div>

      <button
        onClick={handleGenerateInsights}
        disabled={loading}
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 disabled:opacity-50"
      >
        {loading ? 'Generating Insights...' : 'Generate AI Insights'}
      </button>

      {error && (
        <div className="text-red-500 mt-2">
          Error generating insights: {error}
        </div>
      )}
    </div>
  );
};
