import { getFormattedDate } from "@/lib/get-formatted-date";
import { BlogPost } from "@/types/types";
import Link from "next/link";

function BlogItem({ blog }: { blog: BlogPost }) {
  const { date } = blog;

  const formattedDate = getFormattedDate(date);

  return (
    <>
      <div className="blog-item text-white">
        <h2 className="text-xl font-medium underline">
          <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
        </h2>
        <p>{formattedDate}</p>
      </div>
    </>
  );
}

export default BlogItem;
