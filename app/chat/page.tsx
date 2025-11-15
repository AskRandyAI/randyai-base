import { ChatInterface } from '@/components/ChatInterface';

export default function ChatPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Chat with Randy 🦝
        </h1>
        <p className="text-gray-600">
          Your AI study buddy for water and wastewater operations
        </p>
      </div>
      <ChatInterface />
    </div>
  );
}

