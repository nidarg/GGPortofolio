import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom';

const Redirect = () => {
  const location = useLocation()
  const{project:{link}} = location.state

  useEffect(() => {
    if(link){
      window.location.replace(link);
    }
    
  }, [link])

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return <div>
    <h3>Redirecting...</h3>
  </div>
}

export default Redirect