import { useState } from 'react';
import { useAccount } from 'wagmi';

export default function PostComposer({ onPostCreated }: { onPostCreated: () => void }) {
  const [content, setContent] = useState('');
  const { address } = useAccount();

  const submitPost = async () => {
    if (!content || !address) return;

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, wallet_address: address }),
    });

    setContent('');
    onPostCreated(); // Refresh feed
  };

  return (
    <div className="mb-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        maxLength={280}
        className="w-full border border-gray-300 rounded p-2"
        placeholder="What's happening?"
      />
      <button
        onClick={submitPost}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Post
      </button>
    </div>
  );
}