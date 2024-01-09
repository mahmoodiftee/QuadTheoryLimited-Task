import React from 'react';
import Sliders from '../../Components/Sliders';

const Popular = () => {
    return (
        <div className='my-20 md:my-40'>
            <div className='flex justify-between items-center w-[90%]'>
                <h1 className='text-2xl font-semibold pb-6'>Popular</h1>
                <button className='text-orange text-xl font-semibold pb-6'>AddMore</button>
            </div>
            <Sliders />
        </div>
    );
};

export default Popular;