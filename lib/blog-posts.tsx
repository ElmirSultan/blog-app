import path from "path";
import fs from "fs";
import matter from "gray-matter";
import remarkHtml from "remark-html";
import { remark } from "remark";

import { BlogPost } from "@/types/types";

const blogsDirectory = path.join(process.cwd(), "content");

export function getBlogsData() {
  const fileNames = fs.readdirSync(blogsDirectory);

  const blogsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    const blogData: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };

    return blogData;
  });

  return blogsData.sort((a, b) => (a.date > b.date ? 1 : -1));
}

export async function getBlogPost(id: string) {
  const fullPath = path.join(blogsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContent);

  const convertContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);

  const contentHtml = convertContent.toString();

  const blogWithHTML: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
  };

  return blogWithHTML;
}
