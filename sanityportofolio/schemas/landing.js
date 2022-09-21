
export default{
  name:'landing',
  title:'Landing',
  type:'document',
  fields:[
    {
      name:'introduction',
      type:'string'
    },
    
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ]
}