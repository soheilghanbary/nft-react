import { usePosts } from "hooks/usePosts";

export default function Blog() {
  const { posts, isLoading } = usePosts();
  if (isLoading) return <p>loading...</p>;

  return (
    <ul className="grid grid-cols-2 gap-4">
      {posts.map((post: any) => (
        <li
          key={post.id}
          className="bg-secondary shadow-lg rounded-lg p-4 text-sm flex flex-col gap-4"
        >
          <h2>{post.title}</h2>
          <p className="text-xs">{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
