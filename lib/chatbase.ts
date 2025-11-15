export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function sendMessageToRandy(
  message: string,
  conversationId?: string
): Promise<{ response: string; conversationId: string }> {
  try {
    console.log('Sending message to Randy via API route...');
    
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        conversationId,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API error:', errorData);
      throw new Error(errorData.error || 'Failed to get response');
    }

    const data = await response.json();
    console.log('Received response from Randy');
    
    return {
      response: data.text || 'Sorry, I could not process that.',
      conversationId: data.conversationId || conversationId || '',
    };
  } catch (error: any) {
    console.error('Error calling chat API:', error);
    throw new Error(error.message || 'Failed to connect to Randy');
  }
}
