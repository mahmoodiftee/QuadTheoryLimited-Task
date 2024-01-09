import React from 'react';
import image from '../../assets/Image1.png';

const Banner = () => {
    return (
        <div className='mt-10 md:mt-28'>
            <div className='h-full  mb-10 md:hidden flex flex-col justify-center items-center  w-full'>
                <div>
                    <h1 className='text-center text-black text-2xl font-bold' style={{ letterSpacing: '1px' }}>
                        Deliver Food To Your Door Step|
                    </h1>
                    <h1 className='text-center text-black/70 text-sm mt-4'>Authentic Food, Quick Service, Fast Delivery</h1>
                </div>
            </div>
            <div className='w-full bg-[#fd9460] md:bg-[#f99f1c] md:h-96 rounded-[30px]'>
                <div className=' flex flex-col md:flex-row h-full w-full'>
                    <div className='h-full hidden md:flex flex-col justify-center items-center  w-full'>
                        <div>
                            <h1 className='text-start text-4xl w-[80%] mx-auto font-bold text-white' style={{ letterSpacing: '1px' }}>
                                Deliver Food To Your Door Step |
                            </h1>
                            <h1 className='text-start w-[80%] mx-auto text-xl text-white/70 mt-4'>Authentic Food, Quick Service, Fast Delivery</h1>
                        </div>
                    </div>
                    <div className='h-full w-full'>
                        <img src={image} className='h-[160%] md:h-full w-full object-contain md:object-cover' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;