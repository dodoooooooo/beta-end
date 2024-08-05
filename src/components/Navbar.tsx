import React from 'react';
import { Search, Ring, Down_Arrow } from '@assets';
import { User } from '@constants';

const Navbar: React.FC = () => {
  return (
    <nav className='flex items-center justify-between p-5 bg-white shadow-md h-[60px]'>
      <div className='flex items-center flex-grow max-w-lg sm:w-auto'>
        <img src={Search} className='w-[20px] h-[20px] mr-[10px]' />
        <input
          type='text'
          placeholder='Search...'
          className='flex-grow p-2 mr-[10px] bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
        />
      </div>
      <div className='flex items-center space-x-2 sm:space-x-10'>
        <img src={Ring} className='w-[20px] h-[20px]' />
        <div className='flex items-center'>
          <span className='mr-[2px] text-black text-xs sm:text-base'>{User.name}</span>
          <img src={Down_Arrow} className='object-contain w-8 h-8' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
