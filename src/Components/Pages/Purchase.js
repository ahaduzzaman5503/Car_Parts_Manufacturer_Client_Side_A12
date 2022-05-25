import React, { useEffect, useState } from 'react';
import PurchaseShow from './PurchaseShow';

const Purchase = () => {
    const [carPhrchase, setCarPhrcase] = useState([]);

    useEffect(() => {
        fetch('https://evening-depths-43377.herokuapp.com/carParts')
        .then(res => res.json())
        .then(data=>setCarPhrcase(data))
    },[])
    return (
        <div className='flex justify-around container mx-auto gap-5 p-5'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1   bg-base-300 border-4 w-3/4 p-5'>
                {
                    carPhrchase.map( pharchaseData => <PurchaseShow
                        key={PurchaseShow._id}
                        pharchaseData={pharchaseData}
                    ></PurchaseShow>)
                }         
            </div>
            <div className='bg-blue-300 border-4 w-2/4 p-5'>
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