import React from 'react';

const RoleCard = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 font-sans">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] overflow-hidden border border-slate-100">
        
        {/* LEFT: Image Section (50% Width on Desktop) */}
        <div className="w-full md:w-1/2 relative bg-slate-100">
          <div className="aspect-[4/3] md:aspect-auto md:h-full w-full">
            <img 
              src="/images/lead_gen.jpg" 
              alt="Lead Generation Executive" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* RIGHT: Content Section (50% Width on Desktop) */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
          <div className="max-w-md">
            
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
              Lead Generation Executive
            </h2>
            
            {/* Description */}
            <p className="text-base text-slate-500 mb-8 leading-relaxed font-medium">
              Responsible for finding potential clients by researching businesses and collecting their contact details.
            </p>
            
            {/* Bullet Points */}
            <ul className="space-y-4">
              {[
                "Find businesses via Google & Maps",
                "Check if they have website/app",
                "Collect phone number & email",
                "Maintain data in Excel"
              ].map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[15px] text-slate-600 font-medium leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default RoleCard;
