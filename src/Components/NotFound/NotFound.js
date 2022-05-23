import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../Assets/all_products/4O4_Not_found_page.webp';

const NotFound = () => {
    return (
        <div>
           <div className='text-center text-3xl text-red-500 font-bold py-5'>
               <h1>4O4 Page Not Found</h1>
               <h1>Don`t Cry!</h1>
                        <button class="btn btn-success font-bold text-2xl mt-5 "><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg> <Link to="/home">Go to Home</Link></button>

           </div>
           <div className='container mx-auto text-center'>
           <img src={notFound} className="w-full h-96 rounded mb-5" alt='4O4 Not Found' />
           </div>
        </div>
    );
};

export default NotFound;