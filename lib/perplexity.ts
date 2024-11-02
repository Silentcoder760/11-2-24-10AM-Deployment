export interface PerplexityRequestBody {
  model: string;
  messages: Array<{
    role: string;
    content: string;
  }>;
  max_tokens: number;
  temperature: number;
}

const PERPLEXITY_API_KEY = process.env.NEXT_PUBLIC_PERPLEXITY_API_KEY;
const PERPLEXITY_API_URL = "https://api.perplexity.ai/chat/completions";

export async function callPerplexity(prompt: string) {
  if (!PERPLEXITY_API_KEY) {
    throw new Error("Missing Perplexity API key. Please check your environment variables.");
  }

  if (!prompt || typeof prompt !== 'string') {
    throw new Error("Invalid prompt provided");
  }

  const requestBody: PerplexityRequestBody = {
    model: "mixtral-8x7b-instruct",
    messages: [
      {
        role: "system",
        content: "You are a helpful AI assistant specializing in military transition guidance. Provide clear, accurate, and supportive responses to help veterans navigate their transition to civilian life."
      },
      { 
        role: "user", 
        content: prompt 
      }
    ],
    max_tokens: 1000,
    temperature: 0.7,
  };

  try {
    const response = await fetch(PERPLEXITY_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${PERPLEXITY_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API request failed (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    
    if (!data || !Array.isArray(data.choices)) {
      throw new Error('Invalid response format from API');
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Perplexity API error: ${error.message}`);
    }
    throw new Error('Failed to communicate with Perplexity API');
  }
}