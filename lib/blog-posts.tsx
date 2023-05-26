import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { BlogPost } from "@/types/types";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "content");

export function getBlogPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allBlogData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    const blogPosts: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };

    return blogPosts;
  });

  return allBlogData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {

  const fullPath = path.join(postsDirectory, `${id}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);
  
  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);

  const contentHtml = processedContent.toString()

  const blogPostWithHTML: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
  };

  return blogPostWithHTML;
}
