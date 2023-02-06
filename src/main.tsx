import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Error from "./components/layout/error";

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
//
//
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "contacts/:contactId",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/*<RouterProvider router={router} />*/}
    <App />
  </React.StrictMode>
)
