import { env } from '@/lib/env';

interface MixtralResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export async function callMixtral(prompt: string): Promise<string> {
  if (!env.PERPLEXITY_API_KEY) {
    throw new Error('Perplexity API key is not configured');
  }

  try {
    const response = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.PERPLEXITY_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mixtral-8x7b-instruct",
        messages: [
          {
            role: "system",
            content: "You are a military transition assistant AI, helping veterans navigate their transition to civilian life. Provide clear, accurate, and supportive guidance."
          },
          {
            role: "user",
            content: prompt
          }
        ]
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.error?.message || 
        `API request failed with status ${response.status}`
      );
    }

    const data: MixtralResponse = await response.json();
    
    if (!data?.choices?.[0]?.message?.content) {
      throw new Error('Invalid response format from API');
    }

    return data.choices[0].message.content.trim();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Mixtral API error: ${error.message}`);
    }
    throw new Error('An unexpected error occurred while calling the Mixtral API');
  }
}