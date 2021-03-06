import React, { useEffect, useState } from 'react';
import PartsShow from './PartsShow';

const Parts = () => {
    const [carParts, setCarParts] = useState([]);
 
    useEffect(() => {
        fetch('https://evening-depths-43377.herokuapp.com/carParts')
        .then(res => res.json())
        .then(data=>setCarParts(data))
        
    },[])

      return (
        <div className="container mx-auto py-20">
            <div>
                <h1 className='text-5xl text-center font-bold pb-10 text-primary ' >Our Car Parts</h1>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 md:grid-cols-2'>
                {
                    carParts.map(carPart=> <PartsShow
                      key={carPart._id}
                      carPart={carPart}
                    ></PartsShow>)
                }
            </div>
        </div>
    );
};

export default Parts;