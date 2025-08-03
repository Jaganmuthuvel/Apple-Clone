import React from 'react';

const Article = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-5'>

            {/* First Section */}
            <div className='relative h-[80vh]'>
                <img
                    className='w-full h-full object-cover'
                    src="https://www.apple.com/v/home/cf/images/promos/ipad-pro/promo_ipadpro_avail__s271j89g8kii_large.jpg"
                    alt="MacBook"
                />
                <div className='absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                    <h1 className='text-3xl font-semibold text-black'>MacBook Air</h1>
                    <h2 className='mt-3 text-2xl text-white'>Light. Speed.</h2>
                    <div className='flex gap-2 justify-center mt-4'>
                        <button className='px-4 py-2 rounded-3xl text-black bg-blue-500'>Learn more</button>
                        <button className='border border-blue-500 px-4 py-2 rounded-3xl text-blue-500 hover:bg-blue-500 hover:text-white'>Shop Mac</button>
                    </div>
                    <h3 className='mt-4 text-md md:text-2xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent'>
                        Powerful. Portable. Perfect.
                    </h3>
                </div>
            </div>

            {/* Second Section */}
            <div className='relative h-[80vh]'>
                <img
                    className='w-full h-full object-cover'
                    src="https://www.apple.com/v/home/cf/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail__b9etp10v9tn6_large.jpg"
                    alt="iPhone"
                />
                <div className='absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
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
             {/* Third Section */}
            <div className='relative h-[80vh]'>
                <img
                    className='w-full h-full object-cover'
                    src="https://www.apple.com/in/home/promos/mac-for-students-2/images/promo_college_students__bxqdcoxgjzw2_large.jpg"
                    alt="MacBook"
                />
                {/* <div className='absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                    <h1 className='text-3xl font-semibold text-black'>MacBook Air</h1>
                    <h2 className='mt-3 text-2xl text-white'>Light. Speed.</h2>
                    <div className='flex gap-2 justify-center mt-4'>
                        <button className='px-4 py-2 rounded-3xl text-black bg-blue-500'>Learn more</button>
                        <button className='border border-blue-500 px-4 py-2 rounded-3xl text-blue-500 hover:bg-blue-500 hover:text-white'>Shop Mac</button>
                    </div>
                    <h3 className='mt-4 text-md md:text-2xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent'>
                        Powerful. Portable. Perfect.
                    </h3>
                </div> */}
            </div>

            {/* Fourth Section */}
            <div className='relative h-[80vh]'>
                <img
                    className='w-full h-full object-cover'
                    src="https://www.apple.com/v/home/cf/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_large.jpg"
                    alt="iPhone"
                />
                <div className='absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                    <h1 className='text-3xl font-semibold text-white'>iPhone</h1>
                    <h2 className='mt-3 text-2xl text-white'>Meet the iPhone 16 family</h2>
                    <div className='flex gap-2 justify-center mt-4'>
                        <button className='px-4 py-2 rounded-3xl text-white bg-blue-500'>Learn more</button>
                        <button className='border border-blue-500 px-4 py-2 rounded-3xl text-blue-500 hover:bg-blue-500 hover:text-white'>Shop iPhone</button>
                    </div>
                    <h3 className='mt-4 text-md md:text-2xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent'>
                        Built for Apple Intelligence.
                    </h3>
                </div>
            </div>
             {/* First Section */}
            <div className='relative h-[80vh]'>
                <img
                    className='w-full h-full object-cover'
                    src="https://www.apple.com/v/home/cf/images/promos/macbook-pro/promo_macbookpro_announce__gdf98j6tj2ie_large.jpg"
                    alt="MacBook"
                />
                <div className='absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                    <h1 className='text-3xl font-semibold text-black'>MacBook Air</h1>
                    <h2 className='mt-3 text-2xl text-white'>Light. Speed.</h2>
                    <div className='flex gap-2 justify-center mt-4'>
                        <button className='px-4 py-2 rounded-3xl text-black bg-blue-500'>Learn more</button>
                        <button className='border border-blue-500 px-4 py-2 rounded-3xl text-blue-500 hover:bg-blue-500 hover:text-white'>Shop Mac</button>
                    </div>
                    <h3 className='mt-4 text-md md:text-2xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent'>
                        Powerful. Portable. Perfect.
                    </h3>
                </div>
            </div>

            {/* Second Section */}
            <div className='relative h-[80vh]'>
                <img
                    className='w-full h-full object-cover'
                    src="https://www.apple.com/v/home/cf/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large.jpg"
                    alt="iPhone"
                />
                <div className='absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
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
        </div>

    );
};

export default Article;
