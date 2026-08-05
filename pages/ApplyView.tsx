import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, UploadCloud, CheckCircle2 } from 'lucide-react';
import { MOCK_JOBS } from '../constants';
import { ApplicationFormData } from '../types';
import emailjs from '@emailjs/browser';

const ApplyView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const job = MOCK_JOBS.find(j => j.id === id);

  const [formData, setFormData] = useState<ApplicationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    coverLetter: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Job not found</h2>
        <Link to="/" className="text-brand-600 hover:text-brand-700 font-medium">Back to all jobs</Link>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Setup EmailJS variables
      // You must replace these with your actual keys from emailjs.com
      const SERVICE_ID = 'YOUR_SERVICE_ID';
      const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
      const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        to_email: 'hr@ornitech.in',
        job_title: job ? job.title : 'General',
        first_name: formData.firstName,
        last_name: formData.lastName,
        from_email: formData.email,
        phone: formData.phone || 'N/A',
        linkedin: formData.linkedin || 'N/A',
        portfolio: formData.portfolio || 'N/A',
        cover_letter: formData.coverLetter || 'N/A',
        resume_name: file ? file.name : 'No resume attached (File attachments require premium tier or custom handling)'
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting application via EmailJS:", error);
      alert("Failed to submit application. Please check your EmailJS configuration and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-slate-900">Application Submitted!</h2>
            <p className="mt-2 text-sm text-slate-600">
              Thank you for applying for the <span className="font-semibold">{job.title}</span> role. We've received your application and our team will review it shortly.
            </p>
          </div>
          <div className="mt-8">
            <Link
              to="/"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
            >
              Return to Careers Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to job description
        </button>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-900 px-8 py-10 text-white">
            <h1 className="text-2xl font-bold mb-2">Apply for {job.title}</h1>
            <p className="text-slate-300">{job.location} • {job.department} • {job.type}</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Resume Upload Section */}
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-4">Resume/CV <span className="text-red-500">*</span></h3>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-slate-300 px-6 py-10 hover:bg-slate-50 transition-colors cursor-pointer">
                <div className="text-center">
                  <UploadCloud className="mx-auto h-12 w-12 text-slate-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-slate-600 justify-center">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-brand-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-brand-600 focus-within:ring-offset-2 hover:text-brand-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf,.doc,.docx" onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          setFile(e.target.files[0]);
                        }
                      }} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-slate-500">PDF, DOC, DOCX up to 10MB</p>
                  {file && <p className="mt-2 text-sm font-medium text-brand-600">Selected: {file.name}</p>}
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-slate-900">First name <span className="text-red-500">*</span></label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6 px-3"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-slate-900">Last name <span className="text-red-500">*</span></label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6 px-3"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-900">Email address <span className="text-red-500">*</span></label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6 px-3"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium leading-6 text-slate-900">Phone number</label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6 px-3"
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Links */}
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-4">Links</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium leading-6 text-slate-900">LinkedIn Profile</label>
                  <div className="mt-2">
                    <input
                      type="url"
                      name="linkedin"
                      id="linkedin"
                      placeholder="https://linkedin.com/in/..."
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6 px-3"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium leading-6 text-slate-900">Portfolio / Website</label>
                  <div className="mt-2">
                    <input
                      type="url"
                      name="portfolio"
                      id="portfolio"
                      placeholder="https://..."
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6 px-3"
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Additional Info */}
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-4">Additional Information</h3>
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium leading-6 text-slate-900">Cover Letter</label>
                <div className="mt-2">
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={5}
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6 px-3"
                    placeholder="Tell us why you'd be a great fit for this role..."
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-end gap-x-6">
              <button type="button" onClick={() => navigate(-1)} className="text-sm font-semibold leading-6 text-slate-900 hover:text-slate-700">
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`rounded-md bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyView;