import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@kapilRepo/packages/services/react-query/usePostsQuery";

export default function Posts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  isLoading && <div>Loading...</div>;
  error && <div>Error: {error.message}</div>;
  !data && <div>No data</div>;
  return (
    <div>
      {data && data.map((post: postComp) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
