import React from 'react';
import Sliders from '../../Components/Sliders';

const Popular = () => {
    return (
        <div className='my-20 md:my-40 overflow-x-hidden'>
            <div className='hidden md:flex justify-between items-center w-[90%]'>
                <h1 className='text-2xl font-semibold pb-6'>Popular</h1>
                <button className='text-orange text-xl font-semibold pb-6'>AddMore</button>
            </div>
                <h1 className='block md:hidden text-2xl font-semibold pb-5'>Popular</h1>
            <Sliders />
        </div>
    );
};

export default Popular;