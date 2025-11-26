
import { createRoot } from 'react-dom/client';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './Loaders/Loader.jsx';
import React, { Suspense } from 'react';
import Certifcations from './Pages/Certifcations.jsx';
import Skills from './Pages/Skills.jsx';
const Home = React.lazy(() => import("./Pages/Home.jsx"));
const About = React.lazy(() => import("./Pages/About.jsx"));
createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>


            <Home />

          </Suspense>
        }
      />
      <Route
        path="/about"
        element={

          <About />

        }
      />
      <Route
        path="/Certifcations"
        element={

          <Certifcations />

        }
      />
    {/* </Routes> */}
      <Route
        path="/Skills"
        element={

          <Skills />

        }
      />
    </Routes>

  </BrowserRouter>
);
