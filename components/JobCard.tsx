import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Briefcase, ChevronRight } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Link 
      to={`/job/${job.id}`}
      className="block group bg-white rounded-xl border border-slate-200 p-6 hover:border-brand-300 hover:shadow-md transition-all duration-200"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
              {job.department}
            </span>
            <span className="text-xs text-slate-500">Posted {new Date(job.postedAt).toLocaleDateString()}</span>
          </div>
          <h3 className="text-xl font-semibold text-slate-900 group-hover:text-brand-600 transition-colors mb-3">
            {job.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1.5">
              <MapPin size={16} className="text-slate-400" />
              {job.location}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={16} className="text-slate-400" />
              {job.type}
            </div>
            <div className="flex items-center gap-1.5">
              <Briefcase size={16} className="text-slate-400" />
              {job.department}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end sm:justify-start mt-4 sm:mt-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
            <ChevronRight size={20} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;