import React, { useEffect, useState } from 'react';
import ReviewShow from './ReviewShow';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("review.json")
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    
    return (
      <div  className='container mx-auto '>
         <div className='container mx-auto text-center mt-20'>
            <h1 className='text-5xl font-bold text-green-500'>Our Customers Review</h1>
        </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-20' >
              {
              reviews.map(review => <ReviewShow
              key={review._id}
              review={review}
              ></ReviewShow>)
          }
          </div>
      </div>
    );
};

export default Review;