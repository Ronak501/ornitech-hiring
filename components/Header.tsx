import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hexagon } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white transition-transform group-hover:scale-105 group-hover:bg-brand-500">
                <Hexagon size={20} className="fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Ornitech</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">About Us</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Life at Ornitech</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Benefits</a>
            {!isHome && (
              <Link 
                to="/" 
                className="inline-flex items-center justify-center rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-all"
              >
                View Openings
              </Link>
            )}
          </nav>
          {/* Mobile menu button placeholder */}
          <div className="md:hidden flex items-center">
            <button className="text-slate-500 hover:text-slate-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;