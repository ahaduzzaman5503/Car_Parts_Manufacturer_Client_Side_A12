import React from 'react';

const Review = () => {
    const rating = <div className="rating">
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div>
    return (
        <div>
            <div className='container mx-auto text-center mt-20'>
                <h1 className='text-5xl font-bold text-green-500'>Our Customers Review</h1>
            </div>
        <div className='container mx-auto grid grid-cols-3 gap-5 py-20'>

                <div className="card p-5 border-4 grid grid-rows-2 bg-base-100 shadow-xl">
                    <div className="flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="https://images.generated.photos/EfwagPcNjpEHfz7b-ou368FXq9GF59JbQbgeGsrfmg4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjUzMTUwLmpwZw.jpg" alt='avatar' />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">Brice Swyre</div>
                                <div className="text-sm opacity-50">China</div>
                                {rating}
                                </div>
                            </div>
                    <div className="">
                        <p>This car products all are good</p>
                    </div>
                </div>
                <div className="card p-5 border-4 grid grid-rows-2 bg-base-100 shadow-xl">
                    <div className="flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="https://images.generated.photos/D4IwQ1fACuMzdz105ltr58mtanUz060C5_OioT2uJdI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDEwODU0LmpwZw.jpg" alt='avatar' />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">Sophia Eberhart</div>
                                <div className="text-sm opacity-50">Garman</div>
                                {rating}
                                </div>
                            </div>
                    <div className="">
                        <p>This car products all are good</p>
                    </div>
                </div>
                <div className="card p-5 border-4 grid grid-rows-2 bg-base-100 shadow-xl">
                    <div className="flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="https://images.generated.photos/_vFJKNaTfO5WPWc0n9_yOsz9MdRWw2ar9li2-7-z870/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDY4Mjg0LmpwZw.jpg" alt='avatar' />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">Lea Hirsch</div>
                                <div className="text-sm opacity-50">Sweden</div>
                                {rating}
                                </div>
                            </div>
                    <div className="">
                        <p>This car products all are good</p>
                    </div>
                </div>
                <div className="card p-5 border-4 grid grid-rows-2 bg-base-100 shadow-xl">
                    <div className="flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="https://images.generated.photos/PcXqhd6wASoNrQ7cYWWe57GsQl4oryWQ--RXZPA78ZI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDA1NjM3LmpwZw.jpg" alt='avatar' />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">Nadine Schreiber</div>
                                <div className="text-sm opacity-50">United Kingdom</div>
                                {rating}
                                </div>
                            </div>
                    <div className="">
                        <p>This car products all are good</p>
                    </div>
                </div>
                <div className="card p-5 border-4 grid grid-rows-2 bg-base-100 shadow-xl">
                    <div className="flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="https://images.generated.photos/OPR_39Y-coc_zNHnVpsjbOj29VtYrTBQnY_Up9z878U/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzQwMDA4LmpwZw.jpg" alt='avatar' />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">Eric Wexler</div>
                                <div className="text-sm opacity-50">Finland</div>
                                {rating}
                                </div>
                            </div>
                    <div className="">
                        <p>This car products all are good</p>
                    </div>
                </div>
                <div className="card p-5 border-4 grid grid-rows-2 bg-base-100 shadow-xl">
                    <div className="flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="https://images.generated.photos/KH4wesuqG5x3EsxGDkV8FslR75UtJjg4X0_ArlnNtxk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDQ1NTgyLmpwZw.jpg" alt='avatar' />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">Luwam Aatifa</div>
                                <div className="text-sm opacity-50">Portugal</div>
                                {rating}

                                </div>
                            </div>
                    <div className="">
                        <p>This car products all are good</p>
                    </div>
                </div>
                <div className="card p-5 border-4 grid grid-rows-2 bg-base-100 shadow-xl">
                    <div className="flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="https://images.generated.photos/rhPJsQlA57uZWHNGdhT6V5eXli9pZjadBlSHJrmVj5M/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTU3ODY3LmpwZw.jpg" alt='avatar' />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">Ralph Booher</div>
                                <div className="text-sm opacity-50">American</div>
                                {rating}

                                </div>
                            </div>
                    <div className="">
                        <p>This car products all are good</p>
                    </div>
                </div>
                <div className="card p-5 border-4 grid grid-rows-2 bg-base-100 shadow-xl">
                    <div className="flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="https://images.generated.photos/ll6yzljtDGa7IwASUvL182S4uE1_USszBf5NxHwgp5Q/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDI2NDE0LmpwZw.jpg" alt='avatar' />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">Louis Flinn</div>
                                <div className="text-sm opacity-50">Itali</div>
                                {rating}

                                </div>
                            </div>
                    <div className="">
                        <p>This car products all are good</p>
                    </div>
                </div>
                <div className="card p-5 border-4 grid grid-rows-2 bg-base-100 shadow-xl">
                    <div className="flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="https://images.generated.photos/tc69SRXW8e8G4PnQ-WJXSsdqRNUbcb5RQcNMgHKLzgE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjAxNTE5LmpwZw.jpg" alt='avatar' />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">Elen Gabriel</div>
                                <div className="text-sm opacity-50">Switzerland</div>
                                {rating}

                                </div>
                            </div>
                    <div className="">
                        <p>This car products all are good</p>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default Review;