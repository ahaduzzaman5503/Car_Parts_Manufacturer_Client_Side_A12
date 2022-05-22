import React from 'react';
import DiscountImg from "../../Assets/all_products/wheelsForDiscount.webp";

const Discount = () => {
    return (
        <div>
            <div className='container mx-auto text-center mt-10 py-10'>
                <h1 className='text-5xl font-bold text-yellow-500 '>Running Discount Parts!</h1>
            </div>

            <div className='grid grid-cols-2 py-5 flex justify-around'>
            <div> 
            <img src={DiscountImg} alt="Discount wheel" className="rounded-xl h-56 " />
            </div>
            <div> 
                <div>
                    <h1 className='text-2xl text-blue-500'>FLASH DEALS</h1>
                    <h1 className='text-2xl text-yellow-500 font-bold'>HURRY UP AND GET 25%</h1>
                    <h1 className='text2xl text-green-500'>DISCOUNT</h1>
                </div>
                <button className="btn btn-active btn-primary my-2">Add To Card</button>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max py-5">
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                        <span style={{value:15}}></span>
                        </span>
                        Days
                    </div> 
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                        <span style={{value:10}}></span>
                        </span>
                        Hours
                    </div> 
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                        <span style={{value:24}}></span>
                        </span>
                        Min
                    </div> 
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                        <span style={{value:56}}></span>
                        </span>
                        Sec
                    </div>
                    </div>
            </div>
            </div>
             
        </div>
    );
};

export default Discount;