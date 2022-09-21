import React,{useState, useEffect} from 'react'
import sanityClient from '../client.js'
// import imageUrlBuilder from '@sanity/image-url'

// const builder = imageUrlBuilder(sanityClient)

// function urlFor(source) {
//   return builder.image(source)
// }
const Home = () => {
  const[landingData, setLandingData] = useState(null)

  useEffect(()=>{
    sanityClient
    // .delete({query: '*[_type == "landing"][0...2]'})
      .fetch(`*[_type == "landing"]{
        introduction,
        image{
          asset->{
            _id,
            url
          }
        }
      }`)
      .then((data) =>setLandingData(data[0]))
      .catch(console.error)
  },[])

  if(!landingData){
    return <div>Loading ...</div>
  }
  
  return (
    
    <main className="container mx-auto   flex flex-col items-center sm:flex-row xs: flex-row justify-between mt-10  ">
      
        <div className="bg-slate-200 h-max flex-auto w-64 flex flex-col justify-center items-center sm:max-h-fit xs:  mb-20 text-4xl">
          
            <h1 className="xl:text-4xl md:text-2xl lg:text-3xl sm:text-lg text-black-100 text-bold text-center  cursive ">{landingData.introduction}</h1>
           
          
        </div>
       
            <div className='flex-auto w-4/5 xs:w-full'>
            <img src={landingData.image.asset.url} alt="" className='object-cover w-full h-max' />
          </div>

       
        
      
      
    </main>    
  )
}

export default Home