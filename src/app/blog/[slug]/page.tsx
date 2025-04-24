import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/strapi";
import Image from "next/image";
import { notFound } from "next/navigation";
import { marked } from "marked";


// --- Generate Static Paths ---
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.attributes.slug,
  }));
}

// --- Calculate Reading Time ---
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// --- Page Component ---
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

  const {slug} = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const {
    title,
    content,
    publishedAt,
    publisheddate,
    featuredimage,
    author,
    category,
  } = post.attributes;

  const readingTime = calculateReadingTime(content);
  const htmlContent = marked(content);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 rounded-2xl">
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto flex flex-col min-h-screen">
          <header className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              {title}
            </h1>
            <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-8">
              <span>
                {new Date(publisheddate || publishedAt).toLocaleDateString()}
              </span>
              {author?.data?.attributes?.name && (
                <>
                  <span className="mx-2">•</span>
                  <span>{author.data.attributes.name}</span>
                </>
              )}
              {category?.data?.attributes?.name && (
                <>
                  <span className="mx-2">•</span>
                  <span>{category.data.attributes.name}</span>
                </>
              )}
              <span className="mx-2">•</span>
              <span>{readingTime} min read</span>
            </div>

            {featuredimage?.data?.attributes?.url && (
              <div className="relative h-[500px] w-full mb-12 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${featuredimage.data.attributes.url}`}
                  alt={featuredimage.data.attributes.alternativeText || title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </header>

          <div
            className="flex-grow bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 prose dark:prose-invert max-w-none prose-lg"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Published on{" "}
                {new Date(publisheddate || publishedAt).toLocaleDateString()}
              </div>
              {category?.data?.attributes?.name && (
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {category.data.attributes.name}
                </span>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
