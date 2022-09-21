import React, {useState, useEffect} from 'react'
import sanityClient from '../client.js'
import { Link } from 'react-router-dom'

const Post = () => {

  const [postData, setPostData] = useState(null)

  useEffect(()=>{
    sanityClient
      .fetch(`*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`)
      .then((data) =>setPostData(data))
      .catch(console.error)
  },[])
  
  return (
    <main className='bg-slate-300 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center cursive'>GG Blog Posts</h1>
        <h2 className='text-lg text-gray-700 flex justify-center mb-12'>Let's talk...</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {postData && postData.map((post,index)=>(
          <article key={index}>
          <Link to={`/post/${post.slug.current}`}>
          
            <span className='block h-64 relative rounded shadow-xl leading-snug bg-white transition ease-in-out duration-700 hover:drop-shadow-2xl hover:-translate-y-2'>
            {post.mainImage && <img src={post.mainImage.asset.url} 
              alt={post.mainImage.alt} 
              className='w-full h-full rounded-r object-cover absolute'
              />}
              <span className='block relative h-full flex justify-end items-end pr-2 pb-2'>
                <h3 className='text-gray-800 text-lg md:text-md font-bold py-4 bg-red-700 text-red-100 bg-opacity-75'>{post.title}</h3>
              </span>
            </span>
          </Link>
        </article>
        ))}
          
        </div>
      </section>
    </main>
  )
}

export default Post
