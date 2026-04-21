import React from 'react';
import RoleCard from '../components/RoleCard';

const Careers = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Join InfozaTech
        </h1>
        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
          We are looking for passionate individuals to join our team and build scalable startup solutions.
        </p>
      </div>

      {/* Role Card Section */}
      <RoleCard />
      
    </div>
  );
};

export default Careers;
