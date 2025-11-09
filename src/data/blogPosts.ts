export interface BlogPostSEO {
  canonicalUrl?: string;
  canonicalSlug?: string;
  description?: string;
  keywords?: string[];
  authorName?: string;
  authorProfileUrl?: string;
  authorSameAs?: string[];
  publisherName?: string;
  publisherUrl?: string;
  publisherLogo?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

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
  seo?: BlogPostSEO;
}

let cachedPosts: BlogPost[] | null = null;

export async function loadBlogPosts(): Promise<BlogPost[]> {
  if (cachedPosts) {
    return cachedPosts;
  }
  const module = await import("./blogPosts.data");
  cachedPosts = module.default;
  return cachedPosts;
}

export async function loadBlogPost(
  slug: string,
): Promise<BlogPost | undefined> {
  const posts = await loadBlogPosts();
  return posts.find((post) => post.slug === slug);
}
