import { useQuery } from '@tanstack/react-query';
import {fetchPosts} from '../../../packages/services/react-query/usePostsQuery'

const Posts = () => {
    const {data, isLoading, error} =   useQuery({
      queryKey: ['posts'],
      queryFn: fetchPosts
    });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!data) return null;

  return (
    <div>
      {data.map((post: any) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
