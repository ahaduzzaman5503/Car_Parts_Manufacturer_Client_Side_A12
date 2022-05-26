import React from 'react';

const WhyUs = () => {
    return (
        <div>
            <div className='container mx-auto text-center mt-20'>
                <h1 className='text-5xl font-bold text-blue-500'>Why Chooce Us</h1>
            </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-20 '>
            <div className='grid grid-cols-2 border-2 p-5 shadow-lg rounded items-center'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>
            </div>
            <div>
                <h2 className='font-bold text-2xl'>Free Home Delivery</h2>
                <p>Provide free home delivery for all product over $100</p>
            </div>
        </div>
            <div className='grid grid-cols-2  border-2 p-5 shadow-lg rounded items-center'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            </div>
            <div>
                <h2 className='font-bold text-2xl'>Quality Products</h2>
                <p>Provide free home delivery for all product over $100</p>
            </div>
        </div>
            <div className='grid grid-cols-2 border-2 p-5 shadow-lg rounded items-center '>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-headset h-20 w-20 text-success" viewBox="0 0 16 16">
                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
            </svg>
           
            </div>
            <div>
                <h2 className='font-bold text-2xl'>Online Support</h2>
                <p>Provide free home delivery for all product over $100</p>
            </div>
        </div>
        </div>
        </div>
    );
};

export default WhyUs;