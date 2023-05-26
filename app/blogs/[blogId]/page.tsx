import { getBlogPost, getBlogsData } from "@/lib/blog-posts";
import { getFormattedDate } from "@/lib/formatted-date";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    blogId: string;
  };
};

export async function generateMetadata({ params: { blogId } }: Props) {
  const blogs = getBlogsData();

  const blog = blogs.find((blog) => blog.id === blogId);

  if (!blog) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: blog.title,
    description: `Created for ${blog.title}`,
  };
}

export default async function Blog({ params: { blogId } }: Props) {
  const blogs = getBlogsData();

  if (!blogs.find((blog) => blog.id === blogId)) notFound();

  const blog = await getBlogPost(blogId);
  const formattedDate = getFormattedDate(blog.date);

  return (
    <>
      <section className="p-10 prose max-w-full">
        <div className="pb-2">
          <h1 className="mb-0 pb-1">{blog.title}</h1>
          <h6>{formattedDate}</h6>
        </div>

        <article dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />

        <p>
          <Link href="/">Back to Home</Link>
        </p>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  const blogs = getBlogsData();

  return blogs.map((blog) => ({
    blogId: blog.id,
  }));
}
