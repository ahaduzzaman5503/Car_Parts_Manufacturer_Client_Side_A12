import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import {  toast } from 'react-toastify';

const CarPartsDetails = ( ) => {
    const {partsId} = useParams();
    const [partsDetails, setPartsDetails] = useState({});
    const [user] = useAuthState(auth)

    useEffect(() => {
        const url = `https://evening-depths-43377.herokuapp.com/carParts/${partsId}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setPartsDetails(data));
    },[])

    const orderHandle = event => {
        event.preventDefault();

        const order =  {
            carPartsName: partsDetails.name,
            CustommerName: user.displayName,
            CustommerEmail: user.email,
            // phone: event.target.phone.value,
        };
        console.log(partsDetails.name, user.displayName, user.email )

        fetch('https://evening-depths-43377.herokuapp.com/carParts/order', {
          method: 'POST',
          headers:{
            'content-type' : 'application/json'
          },
          body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
          console.log("this is data", data)
          if(data.success){
            toast(`Order is processing, ${user?.displayName}`)
          }
          else{
            toast.error(`something went wrong`)
          }
        })
    };
    

  

    return (
        <div className='grid lg:grid-cols-1 md:grid-cols-1 bg-blue-100 rounded-lg p-10 bg-slate-50 mt-20 container mx-auto  border gap-2'>
             <div className='flex justify-between'>
             <div className='bg-pink-100'>
             <div className='px-5'>
                 <img src={partsDetails?.image} className="max-w-sm rounded-lg shadow-xl shadow-xl h-56 w-52 mb-3" alt='img' />
             </div>
            <div className='p-3 bg-yellow-100 rounded '>
                <h1 className='text-xl font-bold text-blue-400'>{partsDetails?.name}</h1>
                <h1 className='text-xl font-bold text-success'>Price: ${partsDetails?.price} per unit</h1>
                 <h1>Available: {partsDetails?.Available_Quantity} </h1>
                <h1 className='py-2'>Minimum Order: {partsDetails?.Minimum_Order_Quantity} </h1>
                <button className="btn btn-success">Add to Card</button>

            </div>
             </div>

             <div className='bg-pink-300 border-4 w-1/2 p-5 rounded-xl'>
               <div>
                <div className='py-5'>
                    <form onSubmit={orderHandle} >
                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">How much parts you need?</span>
                            <span className="label-text-alt"></span>
                        </label>
                        <input type="number" minLength={1500} maxLength={15000} placeholder={partsDetails?.Minimum_Order_Quantity} className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                                <span className="label-text-alt">Minimum: {partsDetails?.Minimum_Order_Quantity}</span>
                            <span className="label-text-alt">Max Qua: 15000</span>
                        </label>
                        </div>

                        <input type="text" disabled placeholder={user?.displayName || ''} className="input input-bordered input-success w-full max-w-xs" /><br/><br/>
                        <input type="email" disabled placeholder={user?.email || ''} className="input input-bordered input-success w-full max-w-xs" /><br/><br/>
                        <input type="text" placeholder="your address" className="input input-bordered input-success w-full max-w-xs" /><br/><br/>
                        <input type="number" placeholder="your phone number" className="input input-bordered input-success w-full max-w-xs" /><br/><br/>
                        <button className="btn  btn-success w-80">Order Now</button>
                    </form>

                </div>

               </div>
            </div>
             </div>
        </div>
    );
};

export default CarPartsDetails;