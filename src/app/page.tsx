'use client'
import Image from 'next/image';
import Navbar from './components/Navbar';
import { client, urlFor } from './lib/sanity';
import { log } from 'console';
import { simpleBlogCard } from './lib/interface';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
async function getData() {
  // sanity query to fetch data
  const query=`*[_type == "blog"]| order(_createdAt desc){
    title,
      smallDescription,
      "currentSlug":slug.current,
      titleImage
  }`;

  const data = await client.fetch(query);
  return data;
  
}

export default async function Home() {
  const data:simpleBlogCard[] = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
     {
      data.map((data,idx)=>
        <Card key={idx} className='mt-14'>
          <Image src={urlFor(data.titleImage).url()} alt="Image" width={300} height={300} className="rounded-t-lg h-[200px] object-cover" />
          <CardContent className="mt-5">
            <h1 className="text-lg line-clamp-2">{data.title}</h1>
            <p className="text-sm mt-2 line-clamp-3 text-gray-600 dark:text-gray-300">{data.description}</p>
            <Button asChild className="w-full mt-3">
            <Link href={`/blog/${data.currentSlug}`}>Read More</Link>
          </Button>
          </CardContent>
         
        </Card>
       
      )
     }
    </div>
  )
}