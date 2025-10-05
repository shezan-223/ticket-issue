import React from 'react';
import Cards from './Cards';

const Banner = ({data, count}) => {
    console.log(data);

  
    
    return (
        <div className='container mx-auto flex gap-2.5 mt-3'>
            <div className='banner-left bg-gradient-to-r from-[#9F62F2] to-[#632EE3] text-white h-[250px] w-[708px] flex flex-col justify-center items-center rounded-md '>
                <h1 className='text-3xl'>In-Progress</h1>
                <p className='text-3xl'>{count}</p>
            </div>
            <div className='banner-right bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white h-[250px] w-[708px] flex flex-col justify-center items-center rounded-md '> 
                <h1 className='text-3xl'>Resolve</h1>
                <p className='text-3xl'>0</p>

            </div>
        </div>
    );
};

export default Banner;