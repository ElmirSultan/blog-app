import { getFormattedDate } from "@/lib/formatted-date";
import { BlogPost } from "@/types/types";
import Link from "next/link";

function BlogItem({ blog }: { blog: BlogPost }) {
  const publishDate = getFormattedDate(blog.date);

  return (
    <div className="border border-gray-400 p-4 rounded w-80">
      <h2 className="text-lg font-medium">
        <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
      </h2>

      <p className="text-sm italic pt-3">{publishDate}</p>
    </div>
  );
}

export default BlogItem;
