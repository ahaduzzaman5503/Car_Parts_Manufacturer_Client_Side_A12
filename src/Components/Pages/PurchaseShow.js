import React from 'react';

const PurchaseShow = ({pharchaseData}) => {
    const {image, name, price, Available_Quantity, Minimum_Order_Quantity} = pharchaseData;
    
    return (
        <div className='flex flex-col'>
             <div className='flex pl-10 '>
             <img src={image} className="rounded-lg shadow-xl h-32 w-32 mb-3" alt='img' />
             </div>
             <div className='px-5'>
             <h1 className='text-xl font-bold text-blue-400'>{name}</h1>
                <h1 className='text-xl font-bold text-success'>Price: ${price} per unit</h1>
                 <h1>Available Quantity: {Available_Quantity} </h1>
                <h1 className='py-2'>Minimum Order Quantity: {Minimum_Order_Quantity} </h1>
                 <button className="btn btn-success w-3/4">Buy Now</button>
             </div>
        </div>
    );
};

export default PurchaseShow;