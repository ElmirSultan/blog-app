import BlogItem from "@/components/BlogItem";
import { getBlogPostsData } from "@/lib/blog-posts";
import React from "react";

function Blogs() {
  const blogPosts = getBlogPostsData();

  return (
    <>
      <section className="blogs mx-auto">

        <div>
          {blogPosts.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>

      </section>
    </>
  );
}

export default Blogs;
