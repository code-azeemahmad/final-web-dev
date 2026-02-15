import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'

import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'
import {githubInfoLoader} from './components/Github/Github'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   },
// ]);

// easy way to write (nesting inside route element)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>   
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />    
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} 
      />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


// <Route path='user/:userId' element={<User />} />  dynamic route, :userId is a placeholder for any value that will be passed in the URL. For example, if you navigate to /user/123, the User component will be rendered and you can access the userId parameter (which would be 123 in this case) within the User component using the useParams hook from react-router-dom. This allows you to create dynamic routes that can handle different values based on the URL.

/*
a loader is a function that runs automatically before a route's component is rendered. It is used for fetching the necessary data for a page, which eliminates the need for useEffect and ensures data is available as soon as the component mounts, preventing flickering or "loading..." states within the component itself. 
you can also pass fetch api inside loader
*/

