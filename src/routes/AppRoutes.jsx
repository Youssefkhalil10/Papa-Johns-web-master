import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from '../components/Applayout'
import Home from '../Pages/Home'
import About from '../Pages/About'
import ScrollTop from './ScrollTop'
import Menu from '../Pages/Menu/Menu'
import LogIn from '../components/Register/LogIn'
import Register from '../components/Register/Register'



// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter([
    {
        path:'/',
        element: <Applayout/>,
        children:[
            {
                index:true,
                path:'/',
                element: <Home/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/menu',
                element: <Menu/>
            },
            {
                path:'/login',
                element: <LogIn/>
            },
            {
                path:'/signup',
                element: <Register/>
            },
        ]
    }
])

export default function AppRoutes() {
  return(
    <>
   
    <RouterProvider router={router}/>
    </>
  ); 
}
