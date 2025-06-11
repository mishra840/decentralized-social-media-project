import '@/styles/globals.css';
import type { AppProps } from 'next/app';

// import { WagmiConfig, createConfig } from 'wagmi';
// import { configureChains } from '@wagmi/core';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { createStorage } from '@wagmi/core';

import { createConfig, WagmiConfig } from 'wagmi';
import {configureChains} from '@wagmi/core';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';


import '@rainbow-me/rainbowkit/styles.css';

const chains = [mainnet, polygon, optimism, arbitrum];

const { publicClient } = configureChains(chains, [
  jsonRpcProvider({
    rpc: (chain) => ({
      http: `https://${chain.id}.rpc-url.com`, // Replace with actual RPC URLs
    }),
  }),
]);

const { connectors } = getDefaultWallets({
  appName: 'Decentralized Social Media',
  projectId: 'YOUR_PROJECT_ID', // Can be anything or removed
});


const wagmiConfig = createConfig({
  autoConnect: true, // ✅ Move autoConnect here
  connectors,
  publicClient,
  storage: createStorage({ key: 'wagmi.store' }),
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
