import { fullBlogType } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";


async function blogData(slug:string) {
  const query = `*[_type == "blog" && slug.current=='${slug}']
  {
    "currentslug":slug.current,
    title,
      content,
      titleImage
  }[0]`;

  const data = await client.fetch(query);
  return data;
}

async function BlogAritcle({ params}: { params: { slug: string }; }) {
  const data: fullBlogType = await blogData(params.slug);
  return (
    <div >
      <h1 className="mt-8">
        <span className="block mb-10 text-center text-primary font-semibold uppercase tracking-wide ">
          Hamza Qureshi - Blogs
        </span>
        <span className="mt-2 block font-bold text-3xl sm:text-4xl text-center tracking-tight leading-8">
          {data.title}
        </span>
      </h1>
      <Image
        src={urlFor(data.titleImage).url()}
        alt="Title Image"
        priority // Render fastly
        height={800}
        width={800}
        className="rounded-lg mt-8 border"
      />
      <div className="mt-16 mb-20 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}

export default BlogAritcle;