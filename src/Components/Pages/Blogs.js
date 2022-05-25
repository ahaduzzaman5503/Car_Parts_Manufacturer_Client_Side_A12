import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto py-10'>
                    <div tabindex="0" class="collapse collapse-open border border-base-300 bg-base-100 rounded-box"> 
            <div class="collapse-title text-xl font-medium">
            How will you improve the performance of a React Application?
            </div>
            <div class="collapse-content"> 
                <p>tabindex="0" attribute is necessary to make the div focusable</p>
            </div>
            </div>
        </div>
    );
};

export default Blogs;