import sanityClient from '@sanity/client'


export default sanityClient({
  projectId:'dsjze66r',
  dataset:'production',
  apiVersion:'2022-08-10',
  useCdn:true,
  token:process.env.SANITY_TOKEN
})