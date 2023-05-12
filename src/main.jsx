import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import AboutUs from './components/AboutUs.jsx';
import HeroSection from './components/HeroSection.jsx';
import Error from './components/Error.jsx';

const appRouter = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      errorElement:<Error/>,
      children:[
        {
          path:'/',
          element:<HeroSection/>
        },
        {
          path:'/about',
          element:<AboutUs/>
        }
      ]
    }

  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);
