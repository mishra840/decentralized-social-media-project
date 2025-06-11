import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import WalletConnectButton from '@/components/WalletConnectButton';

export default function PostPage() {
  const { query } = useRouter();
  const postId = query.id as string;
  const { address, isConnected } = useAccount();

  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (postId) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`)
        .then((res) => res.json())
        .then(setPost);

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/comment`)
        .then((res) => res.json())
        .then(setComments);
    }
  }, [postId]);

  const submitComment = async () => {
    if (!comment || !address) return;
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/comment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ wallet_address: address, content: comment }),
    });
    setComment('');
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/comment`);
    setComments(await res.json());
  };

  const likePost = async () => {
    if (!address) return;
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ wallet_address: address }),
    });
    alert('Liked!');
  };

  if (!isConnected) {
    return (
      <main className="p-6">
        <WalletConnectButton />
        <p className="mt-4">Please connect your wallet.</p>
      </main>
    );
  }

  if (!post) return <p className="p-6">Loading...</p>;

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-2">📝 Post Detail</h1>
      <div className="border p-4 rounded bg-white">
        <p>{post.content}</p>
        <p className="text-sm text-gray-500">{post.wallet_address}</p>
        <button
          className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
          onClick={likePost}
        >
          Like ❤️
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">💬 Comments</h2>
        {comments.map((c: any, i) => (
          <div key={i} className="border p-2 rounded mb-2 bg-white">
            <p className="text-sm text-gray-600">{c.wallet_address}</p>
            <p>{c.content}</p>
          </div>
        ))}
        <textarea
          placeholder="Write a comment..."
          className="w-full p-2 border rounded mt-2"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
          onClick={submitComment}
        >
          Comment
        </button>
      </div>
    </main>
  );
}