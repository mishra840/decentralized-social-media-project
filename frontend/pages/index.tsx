import WalletConnectButton from '@/components/WalletConnectButton';
import { useAccount } from 'wagmi';
import { useState } from 'react';
import PostComposer from '@/components/PostComposer';
import Feed from '@/components/Feed';

export default function Home() {
  const { address, isConnected } = useAccount();
  const [refresh, setRefresh] = useState(false);

  return (
    <main className="min-h-screen p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">📝 Decentralized Feed</h1>
        <WalletConnectButton />
      </div>

      {isConnected ? (
        <div>
          <p className="mb-4 text-sm text-gray-600">Connected Wallet: {address}</p>
          <PostComposer onPostCreated={() => setRefresh(!refresh)} />
          <Feed refreshTrigger={refresh} />
        </div>
      ) : (
        <p>Please connect your wallet to use the app.</p>
      )}
    </main>
  );
}

