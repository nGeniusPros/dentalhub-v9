import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { PatientAnalyticsDashboard } from '../PatientAnalyticsDashboard';
import { useAIConsultant } from '@/hooks/use-ai-consultant';

// Mock the useAIConsultant hook
jest.mock('@/hooks/use-ai-consultant');

describe('PatientAnalyticsDashboard', () => {
  const mockMetrics = {
    totalPatients: 1000,
    newPatients: 50,
    returnRate: 75,
    satisfactionScore: 8.5,
  };

  beforeEach(() => {
    // Reset mock before each test
    (useAIConsultant as jest.Mock).mockReset();
  });

  it('renders all metric cards', () => {
    (useAIConsultant as jest.Mock).mockReturnValue({
      generateInsight: jest.fn(),
      loading: false,
      error: null,
    });

    render(<PatientAnalyticsDashboard metrics={mockMetrics} />);

    expect(screen.getByText('Total Patients')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();

    expect(screen.getByText('New Patients')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();

    expect(screen.getByText('Return Rate')).toBeInTheDocument();
    expect(screen.getByText('75%')).toBeInTheDocument();

    expect(screen.getByText('Satisfaction Score')).toBeInTheDocument();
    expect(screen.getByText('8.5/10')).toBeInTheDocument();
  });

  it('handles generate insights button click', async () => {
    const mockGenerateInsight = jest.fn().mockResolvedValue({
      id: '1',
      title: 'Test Insight',
      description: 'Test Description',
      impact: 'high',
      recommendations: ['Test Recommendation'],
    });

    (useAIConsultant as jest.Mock).mockReturnValue({
      generateInsight: mockGenerateInsight,
      loading: false,
      error: null,
    });

    render(<PatientAnalyticsDashboard metrics={mockMetrics} />);

    const button = screen.getByText('Generate AI Insights');
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockGenerateInsight).toHaveBeenCalledWith({
        metrics: {
          revenue: 0,
          patientGrowth: 5, // (50/1000) * 100
          appointmentFillRate: 0,
          treatmentAcceptanceRate: 0,
        },
        focusAreas: ['patient-care', 'operations'],
      });
    });
  });

  it('displays loading state', () => {
    (useAIConsultant as jest.Mock).mockReturnValue({
      generateInsight: jest.fn(),
      loading: true,
      error: null,
    });

    render(<PatientAnalyticsDashboard metrics={mockMetrics} />);

    expect(screen.getByText('Generating Insights...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('displays error message', () => {
    const errorMessage = 'Failed to generate insights';
    (useAIConsultant as jest.Mock).mockReturnValue({
      generateInsight: jest.fn(),
      loading: false,
      error: errorMessage,
    });

    render(<PatientAnalyticsDashboard metrics={mockMetrics} />);

    expect(screen.getByText(`Error generating insights: ${errorMessage}`)).toBeInTheDocument();
  });
});
