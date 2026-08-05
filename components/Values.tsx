import React from 'react';
import { Lightbulb, Users, Zap, Heart } from 'lucide-react';

const Values: React.FC = () => {
  const values = [
    {
      icon: <Lightbulb className="h-6 w-6 text-brand-600" />,
      title: 'Innovate Fearlessly',
      description: 'We encourage bold ideas and aren\'t afraid to challenge the status quo to find better solutions.'
    },
    {
      icon: <Users className="h-6 w-6 text-brand-600" />,
      title: 'Collaborate Deeply',
      description: 'The best work happens together. We foster an environment of open communication and mutual respect.'
    },
    {
      icon: <Zap className="h-6 w-6 text-brand-600" />,
      title: 'Execute with Velocity',
      description: 'We bias towards action. We ship fast, learn quickly, and iterate continuously.'
    },
    {
      icon: <Heart className="h-6 w-6 text-brand-600" />,
      title: 'Care for the Craft',
      description: 'We take pride in the details. Quality is not an afterthought; it\'s built into everything we do.'
    }
  ];

  return (
    <section id="culture" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Why Ornitech?</h2>
          <p className="text-lg text-slate-600">
            We're building a culture where exceptional people can do their best work. Our values guide how we build our product and how we treat each other.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center rounded-xl bg-brand-50 p-3 mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;