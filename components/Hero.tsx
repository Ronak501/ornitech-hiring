import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onScrollToJobs: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToJobs }) => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32 border-b border-slate-200">
      {/* Decorative background elements */}
      <div className="absolute inset-y-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-50 opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-blue-50 opacity-50 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-800 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2"></span>
              We are actively hiring
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Do the best work of your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-600">career.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              At Ornitech, we're tackling complex problems to build intuitive solutions. Join a team of passionate builders, thinkers, and creators shaping the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onScrollToJobs}
                className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3.5 text-base font-medium text-white shadow-sm hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-all group"
              >
                View Open Roles
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <a 
                href="#culture" 
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-base font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-all"
              >
                Discover Our Culture
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 relative">
              <img 
                src="https://picsum.photos/800/600?random=1" 
                alt="Ornitech team collaborating" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-transparent mix-blend-multiply"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex -space-x-2">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/100/100?random=2" alt=""/>
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/100/100?random=3" alt=""/>
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/100/100?random=4" alt=""/>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">150+ Orni-techies</p>
                <p className="text-xs text-slate-500">Growing fast globally</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;