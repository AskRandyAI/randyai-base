import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message, conversationId } = await request.json();
    
    const chatbotId = process.env.NEXT_PUBLIC_CHATBASE_AGENT_ID;
    const apiKey = process.env.NEXT_PUBLIC_CHATBASE_API_KEY;

    if (!chatbotId || !apiKey) {
      return NextResponse.json(
        { error: 'Chatbase credentials not configured' },
        { status: 500 }
      );
    }

    console.log('Calling Chatbase API...');
    
    // Fix: Properly type the request body
    const requestBody: {
      chatbotId: string;
      messages: Array<{ content: string; role: string }>;
      stream: boolean;
      conversationId?: string;
    } = {
      chatbotId: chatbotId,
      messages: [
        {
          content: message,
          role: 'user',
        },
      ],
      stream: false,
    };

    // Add conversationId if it exists
    if (conversationId) {
      requestBody.conversationId = conversationId;
    }

    console.log('Request:', JSON.stringify(requestBody, null, 2));
    
    const response = await fetch('https://www.chatbase.co/api/v1/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    const responseText = await response.text();
    console.log('Chatbase status:', response.status);
    console.log('Chatbase response:', responseText);

    if (!response.ok) {
      console.error('Chatbase error');
      return NextResponse.json(
        { error: `Chatbase error: ${responseText}` },
        { status: response.status }
      );
    }

    const data = JSON.parse(responseText);
    
    return NextResponse.json({
      text: data.text,
      conversationId: data.conversationId,
    });
  } catch (error: any) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
