import { useEffect, useState } from 'react';
import PostCard from './PostCard';

type Post = {
  id: number;
  content: string;
  wallet_address: string;
  timestamp: string;
};

export default function Feed({ refreshTrigger }: { refreshTrigger: any }) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
      .then((res) => res.json())
      .then(setPosts);
  }, [refreshTrigger]);

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
