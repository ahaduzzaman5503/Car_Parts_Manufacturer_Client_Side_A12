import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='container mx-auto py-15'>
            <div className='text-center py-10'>
                <h1 className='text-5xl font-bold text-green-500'>MILLIONS BUSINESS TRUST US</h1>
                <h1 className='text-3xl font-bold py-3'>We served Millions of Customers</h1>
            </div>
            <div>

            <div className="stats shadow container mx-auto grid gap-5 py-5">
  
                <div className="stat shadow-xl rounded-md border-green-500 ">
                
                    <div className="stat-title">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    </div>
                    <div className="stat-value text-primary">100K +</div>
                    <div className="text-2xl font-bold text-secondary">Happy Customers</div>
                </div>
                
                <div className="stat shadow-xl">

                    <div className="stat-title">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </div>
                    <div className="stat-value text-secondary">120M +</div>
                    <div className="text-2xl font-bold text-primary">Annual revenue</div>
                </div>

                <div className="stat shadow-xl">

                    <div className="stat-title">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    </div>
                    <div className="stat-value text-primary">50k +</div>
                    <div className="text-2xl font-bold text-secondary">Reviews</div>
                </div>

                <div className="stat shadow-xl">

                    <div className="stat-title">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                    </div>
                    <div className="stat-value text-secondary">72 +</div>
                    <div className="text-2xl font-bold text-primary">Countrys</div>
                </div>
            </div>
        
            </div>

            <div>
            <div className="flex w-full py-10">
                <div className="grid h-20 flex-grow card bg-blue-300 text-secondary text-2xl rounded-box place-items-center">Have any question about us to get a products request?</div>
                <div className="divider divider-horizontal"></div>
                <div className="grid  grid-cols-2 h-20 flex-grow card bg-green-300 rounded-box place-items-center"> 
                <button className="btn btn-active btn-primary">Request For Quote</button>
                <button className="btn btn-active btn-secondary">Contact Us</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;