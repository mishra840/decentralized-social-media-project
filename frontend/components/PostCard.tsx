type Post = {
    id: number;
    content: string;
    wallet_address: string;
    timestamp: string;
  };
  
  export default function PostCard({ post }: { post: Post }) {
    return (
      <div className="border border-gray-300 rounded p-4 mb-3 bg-white">
        <p className="text-sm text-gray-600">From: {post.wallet_address}</p>
        <p className="mt-2">{post.content}</p>
        <p className="text-xs text-gray-400 mt-2">{new Date(post.timestamp).toLocaleString()}</p>
      </div>
    );
  };