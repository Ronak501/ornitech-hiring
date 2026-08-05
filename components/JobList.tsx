import React, { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { MOCK_JOBS, DEPARTMENTS, LOCATIONS } from '../constants';
import JobCard from './JobCard';

const JobList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            job.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
      const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
      
      return matchesSearch && matchesDepartment && matchesLocation;
    });
  }, [searchQuery, selectedDepartment, selectedLocation]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDepartment('All');
    setSelectedLocation('All');
  };

  const hasActiveFilters = searchQuery !== '' || selectedDepartment !== 'All' || selectedLocation !== 'All';

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8 -mt-12 relative z-20">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-lg border-0 py-3 pl-10 pr-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6"
              placeholder="Search for roles, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 md:w-auto">
            <select
              className="block w-full sm:w-48 rounded-lg border-0 py-3 pl-3 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-brand-600 sm:text-sm sm:leading-6 bg-white"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              {DEPARTMENTS.map(dept => (
                <option key={dept} value={dept}>{dept === 'All' ? 'All Departments' : dept}</option>
              ))}
            </select>

            <select
              className="block w-full sm:w-48 rounded-lg border-0 py-3 pl-3 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-brand-600 sm:text-sm sm:leading-6 bg-white"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              {LOCATIONS.map(loc => (
                <option key={loc} value={loc}>{loc === 'All' ? 'All Locations' : loc}</option>
              ))}
            </select>
          </div>
        </div>

        {hasActiveFilters && (
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-slate-500">Active filters:</span>
            <button 
              onClick={clearFilters}
              className="inline-flex items-center gap-1 text-sm text-brand-600 hover:text-brand-700 font-medium"
            >
              Clear all <X size={14} />
            </button>
          </div>
        )}
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Open Positions</h2>
        <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
          {filteredJobs.length} {filteredJobs.length === 1 ? 'role' : 'roles'}
        </span>
      </div>

      {filteredJobs.length > 0 ? (
        <div className="space-y-4">
          {filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 border-dashed">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 mb-4">
            <Search className="h-6 w-6 text-slate-400" />
          </div>
          <h3 className="mt-2 text-sm font-semibold text-slate-900">No jobs found</h3>
          <p className="mt-1 text-sm text-slate-500">We couldn't find any roles matching your current filters.</p>
          <div className="mt-6">
            <button
              onClick={clearFilters}
              className="inline-flex items-center rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Clear filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobList;