
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Layout,Home,About,Project,Post, SinglePost,Redirect, NoMatch} from './components';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route  element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home/>} />
          <Route path='about' element={<About/>} />
          
          <Route path='project' element={<Project/>} />
         
          <Route path='post/:slug' element={<SinglePost/>} />
          <Route path='post' element={<Post/>} />
          
          <Route path='external-link' element={<Redirect/>} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      
    </Router>
  )
}

export default App;
