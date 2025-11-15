'use client';

import { OnchainKitProvider } from '@coinbase/onchainkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { base, baseSepolia } from 'wagmi/chains';
import { ReactNode } from 'react';
import { config } from '@/lib/wagmi';

const chain = process.env.NEXT_PUBLIC_NETWORK === 'base' ? base : baseSepolia;

type Props = { children: ReactNode };

const queryClient = new QueryClient();

export function OnchainProviders({ children }: Props) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
          chain={chain}
        >
          {children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
