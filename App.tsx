import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import JobView from './pages/JobView';
import ApplyView from './pages/ApplyView';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/job/:id" element={<JobView />} />
            <Route path="/apply/:id" element={<ApplyView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}