import React from 'react';

const PartsShow = ({carPart}) => {
    const {name, price, short_description, image, Available_Quantity, Minimum_Order_Quantity} = carPart;
    return (
        <div className='grid lg:grid-cols-1 md:grid-cols-1 rounded-lg  px-10 bg-slate-50  border gap-2'>
             
             <div className='px-5   '>
                 <img src={image} className="max-w-sm rounded-lg shadow-xl shadow-xl h-56 w-52 mb-3" alt='img' />
             </div>
            <div className='p-3  '>
                <h1 className='text-xl font-bold text-blue-400'>{name}</h1>
                <h1 className='text-xl font-bold text-success'>Price: ${price} per unit</h1>
                 <h1>Available Quantity: {Available_Quantity} </h1>
                <h1 className='py-2'>Minimum Order Quantity: {Minimum_Order_Quantity} </h1>
                <h1>Description: {short_description}</h1>
                <button className="btn btn-success">Buy Now</button>

            </div>
             
        </div>
    );
};

export default PartsShow;