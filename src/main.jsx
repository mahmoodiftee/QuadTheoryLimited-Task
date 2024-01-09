import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='max-w-7xl font-sans py-10 flex justify-center mx-auto min-h-screen'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
