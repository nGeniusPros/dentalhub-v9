import { AIConsultantPrompt } from '../types/ai';

// Create a mock response generator for development
const generateMockResponse = (prompt: AIConsultantPrompt) => {
  const responses = [
    {
      insight: "Based on your current metrics, there's an opportunity to improve treatment acceptance rates through enhanced patient education and communication.",
      recommendations: [
        "Implement visual treatment planning tools",
        "Develop patient education materials",
        "Train staff on communication techniques"
      ]
    },
    {
      insight: "Your appointment fill rate indicates potential scheduling optimization opportunities.",
      recommendations: [
        "Review scheduling templates",
        "Implement automated reminders",
        "Develop a cancellation recovery strategy"
      ]
    }
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
};

export const generateAIResponse = async (prompt: AIConsultantPrompt) => {
  if (process.env.NODE_ENV === 'development' && !process.env.DEEPSEEK_API_KEY) {
    return generateMockResponse(prompt);
  }

  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: 'You are an AI dental practice consultant. Analyze practice data and provide insights and recommendations.'
          },
          {
            role: 'user',
            content: formatPrompt(prompt)
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      throw new Error(`DeepSeek API error: ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;

    try {
      return JSON.parse(content);
    } catch {
      // If the response isn't valid JSON, return a formatted error message
      return {
        insight: "Error processing AI response",
        recommendations: [
          "Please try again later",
          "Contact support if the issue persists"
        ]
      };
    }
  } catch (error) {
    console.error('AI Consultant Error:', error);
    return {
      insight: "Error generating AI response",
      recommendations: [
        "Please try again later",
        "Check your internet connection",
        "Contact support if the issue persists"
      ]
    };
  }
};

const formatPrompt = (prompt: AIConsultantPrompt): string => {
  return `
    Analyze the following dental practice data and provide insights and recommendations:
    
    Practice Metrics:
    - Monthly Revenue: ${prompt.metrics.revenue}
    - Patient Growth: ${prompt.metrics.patientGrowth}
    - Appointment Fill Rate: ${prompt.metrics.appointmentFillRate}
    - Treatment Acceptance Rate: ${prompt.metrics.treatmentAcceptanceRate}
    
    Focus Areas: ${prompt.focusAreas.join(', ')}
    
    Please provide a response in the following JSON format:
    {
      "insight": "A clear, actionable insight based on the data",
      "recommendations": [
        "Specific recommendation 1",
        "Specific recommendation 2",
        "Specific recommendation 3"
      ]
    }
  `;
};
