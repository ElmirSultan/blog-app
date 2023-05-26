import { getBlogPostsData, getPostData } from "@/lib/blog-posts";
import { getFormattedDate } from "@/lib/get-formatted-date";
import Link from "next/link";

import { notFound } from "next/navigation";

async function Blog({ params: { blogId } }: { params: { blogId: string } }) {
  const blogs = getBlogPostsData();
  if (!blogs.find((blog) => blog.id === blogId)) notFound();

  const { date, title, contentHtml, id } = await getPostData(blogId);
  const publishDate = getFormattedDate(date);

  return (
    <section className="mx-auto prose prose-lg dark:prose-invert p-8 prose-p:text-black prose-h1:mb-0">
      <h1>{title}</h1>
      <p>{publishDate}</p>

      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/blogs">Back</Link>
        </p>
      </article>
    </section>
  );
}

export default Blog;
