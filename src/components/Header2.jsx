import React from 'react';

const Header2 = () => {
    return (
        <div className='relative w-full h-[80vh] mt-5'>
            <img
                className='absolute top-0 left-0 w-full h-full object-cover z-0'
                src="https://www.apple.com/v/home/cf/images/heroes/macbook-air/hero_macbook_air_avail__fpm99qgohx2e_large.jpg"
                alt="photo"
            />
            <div className='absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10'>
                <h1 className='text-3xl font-semibold text-black'>iPhone</h1>
                <h2 className='mt-3 text-2xl text-black'>Meet the iPhone 16 family</h2>

                <div className='flex gap-2 justify-center mt-4'>
                    <button className='px-4 py-2 rounded-3xl text-white bg-blue-500'>Learn more</button>
                    <button className='border border-blue-500 px-4 py-2 rounded-3xl text-blue-500 hover:bg-blue-500 hover:text-white'>Shop iPhone</button>
                </div>
                <h3 className='mt-4 text-md md:text-2xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent'>
                Built for Apple Intelligence.
            </h3>

            </div>

            
        </div>
    );
};

export default Header2;
