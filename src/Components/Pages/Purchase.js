import React from 'react';

const Purchase = () => {
    return (
        <div className='flex justify-around container mx-auto gap-10 p-5'>
            <div className='bg-green-300 border-4 w-1/2 p-5'>
                <h1>Here show image</h1>
                <h1>Parts Name:</h1>
                <h1>Parts Price:</h1>
                <h1>Available Quantity:</h1>

                
            </div>
            <div className='bg-blue-300 border-4 w-1/2 p-5'>
               <div>
               <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">How much parts?</span>
                    <span className="label-text-alt"></span>
                </label>
                <input type="number" minLength={1500} maxLength={5000} placeholder="enter quantity" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text-alt">Min Qua: 1500</span>
                    <span className="label-text-alt">Max Qua: 10000</span>
                </label>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Purchase;