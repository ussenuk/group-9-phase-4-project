import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'
import Registration from './components/Registration.jsx'
import News from './components/News.jsx';
import StudentRegistration from './components/StudentRegistration.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />} />
      <Route path="inscription" element={<Registration />} />
      <Route path="news" element={<News />} />
      <Route path="StudentRegistration" element={<StudentRegistration />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)