import React, { useRef } from 'react';
import Hero from '../components/Hero';
import Values from '../components/Values';
import JobList from '../components/JobList';

const Home: React.FC = () => {
  const jobsRef = useRef<HTMLDivElement>(null);

  const scrollToJobs = () => {
    jobsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pb-24">
      <Hero onScrollToJobs={scrollToJobs} />
      <Values />
      <div ref={jobsRef} className="pt-12 bg-slate-50">
        <JobList />
      </div>
    </div>
  );
};

export default Home;