import React from 'react';
import { Search, Ring, Down_Arrow, Menu } from '@assets';
import { User } from '@constants';
interface NavbarProps {
  onMenuClick: () => void; // 添加一个用于点击菜单按钮的 props
}
const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <nav className='flex items-center justify-between p-5 bg-white shadow-md h-[60px]'>
      <div className='flex items-center flex-grow max-w-lg sm:w-auto'>
        <button className='mr-4 md:hidden' onClick={onMenuClick}>
          <img src={Menu} className='w-[24px] h-[24px]' alt='Menu' />
        </button>
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
