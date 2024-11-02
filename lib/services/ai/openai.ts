import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || 'dummy-key-for-static-export',
  dangerouslyAllowBrowser: true
});

export async function callOpenAI(prompt: string) {
  if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
    throw new Error("OpenAI API key not configured");
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "You are a military transition assistant AI, helping veterans navigate their transition to civilian life. Provide clear, accurate, and supportive guidance."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API error:", error);
    throw error;
  }
}