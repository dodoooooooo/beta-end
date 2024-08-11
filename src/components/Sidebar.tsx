import { Logo, Close } from '@assets';
import { HomeIcon, CogIcon } from '@heroicons/react/24/outline';
import { useState, FC } from 'react';
import { useDrag } from '@use-gesture/react';
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const bind = useDrag((state) => {
    const [x] = state.movement;
    const [vx] = state.velocity;
    if (state.last && vx > 0.1 && x < -10) {
      onClose();
    }
  });
  const [active, setActive] = useState('Dashboard');
  const style = {
    navStyle: 'flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 hover:text-white',
    activeStyle: 'bg-gray-700 text-white border border-blue-500',
    non_activeStyle: 'text-[#8F95A3]',
  };
  return (
    <div
      {...bind()}
      className={`fixed inset-y-0 left-0 p-4 text-white bg-navbar transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:static md:translate-x-0 md:w-80`}
    >
      <div className='flex items-center justify-between mx-4 mb-7'>
        <div className='flex items-center'>
          <img src={Logo} className='w-[75px] h-[75px] mr-2' alt='Logo' />
          <p className='text-6xl font-bold'>CHM</p>
        </div>
        <button className='ml-4 md:hidden' onClick={onClose}>
          <img src={Close} className='w-6 h-6' alt='Close' /> {/* 使用 Close 图标 */}
        </button>
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
