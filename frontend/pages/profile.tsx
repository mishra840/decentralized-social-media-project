
import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';
import WalletConnectButton from '@/components/WalletConnectButton';

export default function Profile() {
  const { address, isConnected } = useAccount();
  const [profile, setProfile] = useState({
    username: '',
    bio: '',
    profile_pic_url: '',
  });

  useEffect(() => {
    if (isConnected) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${address}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) setProfile(data);
        });
    }
  }, [address, isConnected]);

  const saveProfile = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...profile, wallet_address: address }),
    });
    alert('Profile saved!');
  };

  if (!isConnected) {
    return (
      <main className="p-6">
        <WalletConnectButton />
        <p className="mt-4">Please connect your wallet.</p>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">👤 My Profile</h1>

      <input
        type="text"
        placeholder="Username"
        className="w-full mb-2 p-2 border rounded"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />

      <textarea
        placeholder="Bio"
        className="w-full mb-2 p-2 border rounded"
        value={profile.bio}
        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
      />

      <input
        type="text"
        placeholder="Profile Picture URL"
        className="w-full mb-2 p-2 border rounded"
        value={profile.profile_pic_url}
        onChange={(e) => setProfile({ ...profile, profile_pic_url: e.target.value })}
      />

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={saveProfile}
      >
        Save
      </button>
    </main>
  );
}