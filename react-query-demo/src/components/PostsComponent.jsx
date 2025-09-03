// src/components/PostsComponent.jsx
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export default function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5,         // Keep cached data for 5 minutes
    staleTime: 1000 * 30,             // Data considered fresh for 30 seconds
    refetchOnWindowFocus: true,       // Refetch when window regains focus
    keepPreviousData: true,           // Keep old data while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Posts</h2>
      <button
        onClick={() => refetch()}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Refetch Posts
      </button>
      <ul className="list-disc pl-5">
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="mb-2">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
