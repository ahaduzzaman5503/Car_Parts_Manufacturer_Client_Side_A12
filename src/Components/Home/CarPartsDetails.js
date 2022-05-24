import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CarPartsDetails = ( ) => {
    const {partsId} = useParams();
    const [partsDetails, setPartsDetails] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/carParts/${partsId}`;
        console.log(url)
        fetch(url)
        .then(res=> res.json())
        .then(data => setPartsDetails(data));
    },[])

    return (
        <div className='grid lg:grid-cols-1 md:grid-cols-1 rounded-lg py-10  px-10 bg-slate-50  border gap-2'>
             <div className='flex justify-between'>
             <div className='flex justify-between'>
             <div className='px-5'>
                 <img src={partsDetails?.image} className="max-w-sm rounded-lg shadow-xl shadow-xl h-56 w-52 mb-3" alt='img' />
             </div>
            <div className='p-3  '>
                <h1 className='text-xl font-bold text-blue-400'>{partsDetails?.name}</h1>
                <h1 className='text-xl font-bold text-success'>Price: ${partsDetails?.price} per unit</h1>
                 <h1>Available Quantity: {partsDetails?.Available_Quantity} </h1>
                <h1 className='py-2'>Minimum Order Quantity: {partsDetails?.Minimum_Order_Quantity} </h1>
                <button class="btn btn-success">Add to Card</button>

            </div>
             </div>

             <div className='bg-blue-300 border-4 w-1/2 p-5 rounded-xl'>
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
        </div>
    );
};

export default CarPartsDetails;