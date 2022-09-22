import React, {useState, useEffect} from 'react'
import sanityClient from '../client.js'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
  return builder.image(source)
}

const About = () => {

  const[author, setAuthor] = useState(null)

  useEffect(()=>{
    sanityClient.fetch(`*[_type == "author"]{
      name, 
      bio,
      "authorImage":image.asset->url
    }`)
    .then(data=>setAuthor(data[0]))
    .catch(console.error)
  },[])
  if(!author){
    return <div>Loading ...</div>
  }

  return (
    <main className='relative'>
     
      <div className='p-10 lg:pt-48 container mx-auto relative'>
        <section className='bg-slate-600 rounded-lg shadow-2xl lg:flex-cols p-20'>
          <div className='xs:flex-row sm:flex flex-cols '>
          <img src={urlFor(author.authorImage).url()} alt='' className='rounded w-32 h-32 lg:w-64 lg:h-64
          ' />
          <div className='text-lg flex flex-col justify-center pl-2'>
            <h1 className='cursive text-xl text-green-200 mb-4'>Hi, my name is Gheti Gradin and among the things I like the most are good coffee and ... web development  </h1>
          </div>
          </div>
          <div className='prose lg:prose-xl text-white cursive'><BlockContent blocks={author.bio} projectId='dsjze66r'
            dataset='production'/></div>
        </section>
      </div>
    </main>
  )
}

export default About