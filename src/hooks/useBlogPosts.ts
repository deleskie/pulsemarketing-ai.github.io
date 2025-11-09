import { useEffect, useState } from "react";
import type { BlogPost } from "../data/blogPosts";
import { loadBlogPosts } from "../data/blogPosts";

interface UseBlogPostsResult {
  posts: BlogPost[] | null;
  loading: boolean;
  error: Error | null;
}

export function useBlogPosts(): UseBlogPostsResult {
  const [posts, setPosts] = useState<BlogPost[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let active = true;
    loadBlogPosts()
      .then((data) => {
        if (active) {
          setPosts(data);
        }
      })
      .catch((err) => {
        if (active) {
          setError(
            err instanceof Error ? err : new Error("Failed to load posts"),
          );
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return {
    posts,
    error,
    loading: !posts && !error,
  };
}
