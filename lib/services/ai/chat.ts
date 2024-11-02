import { callMixtral } from './mixtral';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function generateChatResponse(message: string): Promise<string> {
  if (!message?.trim()) {
    throw new Error('Please enter a message');
  }

  try {
    const response = await callMixtral(message);
    if (!response) {
      throw new Error('No response received from the AI');
    }
    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to generate response');
  }
}