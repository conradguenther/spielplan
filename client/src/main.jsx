import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/root"
import ErrorPage from './routes/error-page'
import Summary from "./routes/summary"
import Plan from "./routes/plan"
import Overview from "./routes/overview"
import Final from "./routes/final"

import "./style.css"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "plan",
        element: <Plan />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
      {
        path: "final",
        element: <Final />,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
