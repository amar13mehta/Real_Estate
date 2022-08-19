import React, { useContext, useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine, RiCalendar2Line } from 'react-icons/ri';

import { HouseContext } from './HouseContext';
import { Menu } from '@headlessui/react';

const TimeDropdown = () => {
  const { time, settime} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const times = [
    {
      value: 'Availability (any)',
    },
    {
      value: '1 - 2',
    },
    {
      value: '2 - 3',
    },
    {
      value: '3 - 4',
    },
    {
      value: '4 - 5',
    },
    
  ];
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiCalendar2Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {time}
          </div>
          <div className='text-[13px]'>When</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {times.map((time, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => settime(time.value)}
              key={index}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {time.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default TimeDropdown;