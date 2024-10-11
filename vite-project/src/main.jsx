import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';

// pages 
import App from './App.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Error404 from './pages/errors/404.jsx';
import Singin from './pages/Singin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "singin",
        element: <Singin />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
