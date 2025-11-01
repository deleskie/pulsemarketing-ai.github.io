export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  readingTime: string;
  excerpt: string;
  tags: string[];
  content: string[];
  includeCompetitorDisclaimer?: boolean;
}

let cachedPosts: BlogPost[] | null = null;

export async function loadBlogPosts(): Promise<BlogPost[]> {
  if (cachedPosts) {
    return cachedPosts;
  }
  const module = await import('./blogPosts.data');
  cachedPosts = module.default;
  return cachedPosts;
}

export async function loadBlogPost(slug: string): Promise<BlogPost | undefined> {
  const posts = await loadBlogPosts();
  return posts.find((post) => post.slug === slug);
}
