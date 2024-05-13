import React from "react";
import ReactDOM  from "react-dom/client";
import "../index.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from './components/About'
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Menu from "./components/RestMenu";
import Profile from "./components/ProfileClass";

const AppLayout = () => {
    return (
      <>
        <Header />
        <Outlet/>
        <Footer/>
      </>
    )
  }

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>,
        children:[
          {
            path:'profile',
            element:<Profile/>
          }
        ]
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/restaurant/:id',
        element:<Menu/>
      }
    ]
  },
])
  
  const root = ReactDOM.createRoot(document.getElementById("root"))
  root.render(<RouterProvider router={appRouter}/>); 
  