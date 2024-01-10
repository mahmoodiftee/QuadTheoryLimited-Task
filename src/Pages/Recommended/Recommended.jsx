import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sliders from '../../Components/Sliders';

const Recommended = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10');
                const data = response.data.Items;
                const filteredData = data.filter(item => item.IsRecommended === true);
                console.log(filteredData);
                setCards(filteredData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='my-20 md:my-40 overflow-x-hidden'>
            <div className='hidden md:flex justify-between items-center w-[90%]'>
                <h1 className='text-2xl font-semibold pb-6'>Recommended</h1>
                <button className='text-orange text-xl font-semibold pb-6'>AddMore</button>
            </div>
            <h1 className='block md:hidden text-2xl font-semibold pb-5'>Recommended</h1>
            <Sliders cards={cards} />
        </div>
    );
};

export default Recommended;