import React from 'react';
import slide1 from '../../Assets/slide1.png';
import slide2 from '../../Assets/slide2.png';
import slide3 from '../../Assets/slide3.png';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={slide3} alt='slide1' className="w-full" />
                </div> 
                <div id="item2" className="carousel-item w-full">
                    <img src={slide1} alt='slide3' className="w-full" />
                </div> 
                <div id="item3" className="carousel-item w-full">
                    <img src={slide2} alt='slide2' className="w-full" />
                </div> 
                 
            </div> 
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a> 
                    <a href="#item2" className="btn btn-xs">2</a> 
                    <a href="#item3" className="btn btn-xs">3</a> 
                </div>
        </div>
    );
};

export default Banner;