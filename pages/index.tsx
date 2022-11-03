import Head from 'next/head'
import Image from 'next/image'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'

import Header from '../components/Header'
import Banner from '../components/Banner'
import Link from 'next/link'

interface Props {
  posts: [Post]
}


export default function Home({ posts }: Props) {

  // console.log(posts)
  return (
    <div className='max-w-7xl mx-auto'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
        {posts.map((item) => (
          <Link
            key={item._id}
            href={`/post/${item.slug.current}`}
          >
            <div className='border rounded-lg group cursor-pointer overflow-hidden'>
              <img
                className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out'
                src={urlFor(item.mainImage).url()}
                alt=''
              />

              <div className='flex justify-between p-5 bg-white'>
                <div>
                  <p className='text-lg font-bold'>{item.title}</p>
                  <p className='text-xs'>{item._description} by {item.author.name}</p>
                </div>

                <img
                  className='h-12 w-12 rounded-full'
                  src={urlFor(item.author.image).url()}
                  alt=''
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}


export async function getStaticProps() {
  const query = `*[_type == 'post']{
      _id,
      title,
      description,
      mainImage,
      slug,
      author -> {
      name,
      image
    }
  }`

  const posts = await sanityClient.fetch(query);

  console.log("posts:", posts)

  return{
    props: {
      posts
    }
  }
}