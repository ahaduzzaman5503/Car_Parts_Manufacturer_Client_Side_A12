import React from 'react';

const ReviewShow = ({review}) => {
    const {image, country, name, reviews } = review;

    const rating = <div className="rating">
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div>
    return (
        <div>

    <div>

            <div className="card p-5 border-4 grid grid-rows-2 bg-base-100 shadow-xl">
                <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-20 h-20">
                                <img src={image} alt='avatar' />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold text-2xl">{name}</div>
                            <div className="text-xl font-bold opacity-70">{country}</div>
                            {rating}
                            </div>
                        </div>
                <div className="">
                    <p>{reviews}</p>
                </div>
            </div>
    </div>
    </div>
    );
};

export default ReviewShow;