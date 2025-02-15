import { useState } from 'react';
import { generateAIResponse } from '@/lib/api/deepseek';
import type { AIConsultantPrompt, AIInsight } from '@/lib/types/ai';

export const useAIConsultant = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateInsight = async (prompt: AIConsultantPrompt): Promise<AIInsight | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await generateAIResponse(prompt);
      
      // Parse and format the AI response into an insight
      const insight: AIInsight = {
        id: Date.now().toString(),
        title: 'AI-Generated Insight',
        description: response.insight,
        impact: determineImpact(prompt.metrics),
        recommendations: response.recommendations,
        timestamp: new Date().toISOString(),
        status: 'active'
      };

      return insight;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate insight');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    generateInsight,
    loading,
    error
  };
};

const determineImpact = (metrics: AIConsultantPrompt['metrics']): AIInsight['impact'] => {
  const { revenue, patientGrowth, appointmentFillRate, treatmentAcceptanceRate } = metrics;
  
  // Simple impact determination logic
  if (revenue > 100000 || patientGrowth > 20 || appointmentFillRate > 90 || treatmentAcceptanceRate > 85) {
    return 'high';
  } else if (revenue > 50000 || patientGrowth > 10 || appointmentFillRate > 75 || treatmentAcceptanceRate > 70) {
    return 'medium';
  }
  return 'low';
};