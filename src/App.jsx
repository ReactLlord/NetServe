import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Nav';
import { HelmetProvider } from "react-helmet-async";
export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}