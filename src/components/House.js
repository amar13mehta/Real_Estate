import {BiArea, BiBath, BiBed} from 'react-icons/bi';

import React from 'react';

const House = ({house}) => {
  const {image, type, country, address, bedrooms, bathrooms, surface, price, moveIn} = house;
  return <div className='bg-white shadow-1 p-5 rounded-lg  w-full max-w-[325px] mx-auto cursor-pointer hover:shadow-2xl transition'>
    <img className='mb-8 max-w-full   rounded-lg' src={image} alt='' /> 
    <div className='mb-4 flex gap-x-2 text-sm'>
      <div className='bg-green-500 rounded-full text-white px-3'>{type}</div>
      <div className='bg-violet-500 rounded-full text-white px-3'>
        {country}
      </div>
    </div>
    <div className='text-lg font-semibold text-violet-600 mb-4'>
      ${price}/month
      </div>
    <div className='text-lg font-semibold max-w-[260px]'>
      {address}
    </div>
    <div className='text-lg font-semibold max-w-[260px]'>
      {moveIn} weeks
    </div>
    <div className='flex gap-x-4 my-4'>
      <div className='flex items-center text-gray-600 gap-1'>
        <div className='text-[20px]'>
          <BiBed/>
        </div>
        <div>
          {bedrooms}
        </div>
      </div>
      <div className='flex items-center text-gray-600 gap-1'>
        <div className='text-[20px]'>
          <BiBath/>
        </div>
        <div>
          {bathrooms}
        </div>
      </div>
      <div className='flex items-center text-gray-600 gap-1'>
        <div className='text-[20px]'>
          <BiArea/>
        </div>
        <div>
          {surface}
        </div>
      </div>
    </div>
    
  </div>;
};

export default House;