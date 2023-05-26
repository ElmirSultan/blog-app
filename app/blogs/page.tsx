import BlogItem from "@/components/BlogItem";
import { getBlogsData } from "@/lib/blog-posts";

function Blogs() {
  const blogs = getBlogsData();

  return (
    <>
      <section className="p-10">
        <h1 className="text-3xl font-medium pb-8">Blogs</h1>

        <div className="space-y-5">
          {blogs.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Blogs;
