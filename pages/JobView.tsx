import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Briefcase, Calendar, Share2 } from 'lucide-react';
import { MOCK_JOBS } from '../constants';

const JobView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const job = MOCK_JOBS.find(j => j.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Job not found</h2>
        <p className="text-slate-600 mb-8">The position you are looking for might have been filled or removed.</p>
        <Link to="/" className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Job Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to careers
          </button>
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{job.title}</h1>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Briefcase size={18} className="text-slate-400" />
                  {job.department}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-slate-400" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-slate-400" />
                  {job.type}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-slate-400" />
                  Posted {new Date(job.postedAt).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-all">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </button>
              <Link 
                to={`/apply/${job.id}`}
                className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-8 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-all"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Job Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12">
        <div className="prose prose-slate prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">About the Role</h2>
          <p className="text-slate-600 leading-relaxed mb-8">{job.description}</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-10">What You'll Do</h2>
          <ul className="space-y-3 mb-8 text-slate-600">
            {job.responsibilities.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-10">What We're Looking For</h2>
          <ul className="space-y-3 mb-8 text-slate-600">
            {job.requirements.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-10">Benefits & Perks</h2>
          <ul className="space-y-3 mb-12 text-slate-600">
            {job.benefits.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50 p-8 rounded-2xl">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Ready to join us?</h3>
            <p className="text-slate-600 mt-1">Take the next step in your career at Ornitech.</p>
          </div>
          <Link 
            to={`/apply/${job.id}`}
            className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-all w-full sm:w-auto"
          >
            Apply for this job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobView;