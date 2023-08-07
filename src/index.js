import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Index1 from './pages/index1';
import Index2 from './pages/index2';
import Index3 from './pages/index3';
import Index4 from './pages/index4';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Index1/>,
    errorElement:<h1>Error</h1>,

  },

  {
    path: "/html",
    element: <Index2/>,
    errorElement:<h1>Error</h1>,

  },

  {
    path: "/css",
    element: <Index3/>,
    errorElement:<h1>Error</h1>,

  },

  {
    path: "/js",
    element: <Index4/>,
    errorElement:<h1>Error</h1>,

  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

