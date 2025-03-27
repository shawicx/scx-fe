/*
 * @Author: shawicx d35f3153@proton.me
 * @Date: 2025-02-13 21:16:35
 * @LastEditors: shawicx d35f3153@proton.me
 * @LastEditTime: 2025-03-25 10:19:32
 * @Description: 
 */
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ParticlesBackground from "^/components/ParticlesBackground";
import Navigation from "^/components/Navigation";
import Home from "^/views/home";
import Experience from "^/views/experience";
import Projects from "^/views/projects";
import PageTransition from "^/components/PageTransition";

import './App.scss';

function AppRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home/></PageTransition>}/>
        <Route path="/experience" element={<PageTransition><Experience/></PageTransition>}/>
        <Route path="/projects" element={<PageTransition><Projects/></PageTransition>}/>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br">
      <Router>
        <ParticlesBackground/>
        <Navigation/>
        <AppRoutes/>
      </Router>
    </div>
  )
}

export default App
