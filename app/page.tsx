'use client';

import { useAccount } from 'wagmi';
import Link from 'next/link';
import { BookOpen, Award, MessageCircle, Zap } from 'lucide-react';

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <div className="text-6xl mb-4">🦝</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to RandyAI
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your AI-powered blockchain training platform for water and wastewater
          operators. Learn, earn certificates, and advance your career.
        </p>
        {!isConnected && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm text-yellow-800">
              👆 Connect your wallet to get started
            </p>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <FeatureCard
          icon={<MessageCircle className="w-8 h-8 text-blue-500" />}
          title="AI Chat"
          description="Chat with Randy the Raccoon and learn about water treatment"
          href="/chat"
        />
        <FeatureCard
          icon={<BookOpen className="w-8 h-8 text-green-500" />}
          title="Courses"
          description="Browse and enroll in comprehensive training courses"
          href="/courses"
        />
        <FeatureCard
          icon={<Award className="w-8 h-8 text-purple-500" />}
          title="Certificates"
          description="Earn blockchain-verified NFT certificates"
          href="/certificates"
        />
        <FeatureCard
          icon={<Zap className="w-8 h-8 text-yellow-500" />}
          title="On Base"
          description="Built on Base L2 for fast, cheap transactions"
          href="#"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Step
            number={1}
            title="Connect Wallet"
            description="Connect your Coinbase Wallet to get started"
          />
          <Step
            number={2}
            title="Enroll in Courses"
            description="Browse courses and enroll in topics that interest you"
          />
          <Step
            number={3}
            title="Earn Certificates"
            description="Complete courses and receive NFT certificates on Base"
          />
        </div>
      </div>

      {isConnected && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Courses Available" value="12" />
          <StatCard label="Students" value="1,234" />
          <StatCard label="Certificates Issued" value="856" />
          <StatCard label="On Base L2" value="✓" />
        </div>
      )}
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 text-center">
      <div className="text-3xl font-bold text-blue-600 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
