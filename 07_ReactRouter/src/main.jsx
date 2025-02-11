import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Lay from './Lay.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/Contact.jsx'

// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Lay/>,
//       children: [
//         {
//           path: "",
//           element: <Home />
//         },
//         {
//           path: "about",
//           element: <About />
//         },
//         {
//           path: "contact",
//           element: <Contact />
//         }
//       ]
//     }
//   ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Lay />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router}/>
  </StrictMode>,
)
