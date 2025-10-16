import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TechConference from "./pages/TechConference.jsx"
import DesignWorkshop from './pages/DesignWorkshop.jsx';
import MarketingSeminar from './pages/MarketingSeminar.jsx';
import Conference1 from './pages/Conference1.jsx';
import Conference2 from './pages/Conference2.jsx';
import Conference3 from './pages/Conference3.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/techConference",
    element: <TechConference/>
  },
  {
    path: "/designWorkshop",
    element: <DesignWorkshop />
  },
  {
    path: "/marketingSeminar",
    element: <MarketingSeminar/>
  },
  {
    path: "/conference1",
    element: <Conference1 />
  },
  {
    path: "/conference2",
    element: <Conference2 />
  },
  {
    path: "/conference3",
    element: <Conference3 />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
