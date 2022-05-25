import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Discount from './Discount';
import Parts from './Parts';
import Review from './Review';
import WhyUs from './WhyUs';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Parts></Parts>
            <Review></Review>
            <BusinessSummary></BusinessSummary>
            <Discount></Discount>
            <WhyUs></WhyUs>
            </div>
    );
};

export default Home;