import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ContactUs from './Components/ContactUs.jsx'
import Home from './Components/Home.jsx'
import App from './App.jsx'
import './index.css'
import Error from './Components/Error.jsx'
import CountryDetail from './Components/CountryDetail.jsx'

const router = createBrowserRouter([
  {
    path:'/hello',
    element: <div>Hello world</div>
  },
  {
    path:'/',
    element: <App/>,
    // errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/contact',
        element:<ContactUs/>
      },
      {
        path:'/:country',
        element:<CountryDetail/>
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <RouterProvider router={router}/> 
    </>
  </StrictMode>,
)
