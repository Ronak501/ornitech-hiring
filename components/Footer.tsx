import React from 'react';
import { Hexagon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Hexagon size={24} className="text-brand-400 fill-current" />
              <span className="text-xl font-bold text-white tracking-tight">Ornitech</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Building the future of intelligent systems. Join us in our mission to simplify the complex.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">Our Values</a></li>
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">Newsroom</a></li>
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Careers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">Open Roles</a></li>
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">University Recruiting</a></li>
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">Benefits</a></li>
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">Interview Process</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm hover:text-brand-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Ornitech Inc. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 mt-2 md:mt-0">
            Designed with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;