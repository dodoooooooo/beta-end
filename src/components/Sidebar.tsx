import { Logo } from '@assets';
import { HomeIcon, CogIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
const Sidebar = () => {
  const [active, setActive] = useState('Dashboard');
  const style = {
    navStyle: 'flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 hover:text-white',
    activeStyle: 'bg-gray-700 text-white border border-blue-500',
    non_activeStyle: 'text-[#8F95A3]',
  };
  return (
    <div className='hidden p-4 text-white bg-navbar md:block md:w-80'>
      <div className='flex items-center mx-8 mb-7'>
        <img src={Logo} className='w-[75px] h-[75px] mr-2' />
        <p className='text-6xl font-bold'>CHM</p>
      </div>
      <ul className='mx-9'>
        <li className='mb-2'>
          <a
            href='#'
            className={`${style.navStyle} ${active === 'Dashboard' ? style.activeStyle : style.non_activeStyle}`}
            onClick={() => setActive('Dashboard')}
          >
            <HomeIcon className='w-5 h-5' />
            <span>Dashboard</span>
          </a>
        </li>
        <li className='mb-2'>
          <a
            href='#'
            className={`${style.navStyle} ${active === 'Services' ? style.activeStyle : style.non_activeStyle}`}
            onClick={() => setActive('Services')}
          >
            <CogIcon className='w-5 h-5' />
            <span>Services</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
