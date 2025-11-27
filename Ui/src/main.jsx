import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Loader from './Loaders/Loader.jsx';
import Certifcations from './Pages/Certifcations.jsx';
import Skills from './Pages/Skills.jsx';
import Resume from './Pages/Resume.jsx';
import { ThemeProvider } from './ThemeProvider.jsx';
import MainNavbar from './Components/MainNavbar.jsx';
import Portfolio from './Pages/Portfolio.jsx';

const Home = React.lazy(() => import("./Pages/Home.jsx"));
const About = React.lazy(() => import("./Pages/About.jsx"));

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider> {/* Wrap the whole app here */}
        <MainNavbar /> {/* Navbar can now access theme */}
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
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/certifications"
            element={<Certifcations />}
          />
          <Route
            path="/resume"
            element={<Resume />}
          />
          <Route
            path="/skills"
            element={<Skills />}
          />
          <Route
            path="/portfolio"
            element={<Portfolio />}
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
