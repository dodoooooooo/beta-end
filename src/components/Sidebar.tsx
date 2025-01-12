import { Logo, Close } from '@assets';
import { HomeIcon, CogIcon, ComputerDesktopIcon, CubeIcon, PowerIcon, UserIcon, ServerIcon, ClockIcon, ArrowDownTrayIcon, BookOpenIcon, ServerStackIcon, WrenchIcon, GlobeAltIcon, CpuChipIcon } from '@heroicons/react/24/outline';
import { useState, FC } from 'react';
import { useDrag } from '@use-gesture/react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  setCurrentPage: (page: string) => void; // 新增 setCurrentPage props
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose, setCurrentPage }) => {
  const bind = useDrag((state) => {
    const [x] = state.movement;
    const [vx] = state.velocity;
    if (state.last && vx > 0.1 && x < -10) {
      onClose();
    }
  });

  const [active, setActive] = useState('Dashboard');

  const handlePageChange = (page: string) => {
    setActive(page);
    setCurrentPage(page); // 呼叫 setCurrentPage 改變主頁面內容
  };

  const style = {
    navStyle: 'flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 hover:text-white',
    activeStyle: 'bg-gray-700 text-white',
    non_activeStyle: 'text-[#8F95A3]',
  };

  return (
    <div
      {...bind()}
      className={`fixed inset-y-0 left-0 p-4 text-white bg-navbar transform overflow-y-auto ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 md:static md:translate-x-0 md:w-80`}
    >
      <div className='flex items-center justify-between mx-4 mb-7'>
        <div className='flex items-center'>
          <img src={Logo} className='w-[75px] h-[75px] mr-2' alt='Logo' />
          <p className='text-6xl font-bold'>CHM</p>
        </div>
        <button className='ml-4 md:hidden' onClick={onClose}>
          <img src={Close} className='w-6 h-6' alt='Close' />
        </button>
      </div>
      <ul className='mx-9'>
        <li className='mb-2'>
          <a
            href='#'
            className={`${style.navStyle} ${active === 'Dashboard' ? style.activeStyle : style.non_activeStyle}`}
            onClick={() => handlePageChange('Dashboard')}
          >
            <HomeIcon className='w-5 h-5' />
            <span>Dashboard</span>
          </a>
        </li>
        <li className='mb-2'>
          <a
            href='#'
            className={`${style.navStyle} ${active === 'Services' ? style.activeStyle : style.non_activeStyle}`}
            onClick={() => handlePageChange('Services')}
          >
            <CogIcon className='w-5 h-5' />
            <span>Services</span>
          </a>
        </li>
        <li className='mb-2'>
          <a
            href='#'
            className={`${style.navStyle} ${active === 'CHM' ? style.activeStyle : style.non_activeStyle}`}
            onClick={() => handlePageChange('CHM')}
          >
            <ComputerDesktopIcon className='w-5 h-5' />
            <span>CHM</span>
          </a>
        </li>
        <li className='mb-2'>
          <a
            href='#'
            className={`${style.navStyle} ${active === 'Modules Configuration' ? style.activeStyle : style.non_activeStyle}`}
            onClick={() => handlePageChange('Modules Configuration')}
          >
            <CubeIcon className='w-5 h-5' />
            <span>Modules Configuration</span>
          </a>
        </li>
        <li className='mb-2'>
          <a
            href='#'
            className={`${style.navStyle} ${active === 'Bootup & Shutdown' ? style.activeStyle : style.non_activeStyle}`}
            onClick={() => handlePageChange('Bootup & Shutdown')}
          >
            <PowerIcon className='w-5 h-5' />
            <span>Bootup & Shutdown</span>
          </a>
        </li>
        <li className='mb-2'>
          <a
            href='#'
            className={`${style.navStyle} ${active === 'Users & Groups' ? style.activeStyle : style.non_activeStyle}`}
            onClick={() => handlePageChange('Users & Groups')}
          >
            <UserIcon className='w-5 h-5' />
            <span>Users & Groupsn</span>
          </a>
        </li>
        <li className='mb-2'>
          <a
            href='#'
            className={`${style.navStyle} ${active === 'Disk Management' ? style.activeStyle : style.non_activeStyle}`}
            onClick={() => handlePageChange('Disk Management')}
          >
            <ServerIcon className='w-5 h-5' />
            <span>Disk Management</span>
          </a>
        </li>
        <li className='mb-2'>
          <a
            href='#'
            className={`${style.navStyle} ${active === 'Cron Management' ? style.activeStyle : style.non_activeStyle}`}
            onClick={() => handlePageChange('Cron Management')}
          >
            <ClockIcon className='w-5 h-5' />
            <span>Cron Management</span>
          </a>
        </li>
        <li className='mb-2'>
          <a
            href='#'
            className={`${style.navStyle} ${active === 'Software Package' ? style.activeStyle : style.non_activeStyle}`}
            onClick={() => handlePageChange('Software Package')}
          >
            <ArrowDownTrayIcon className='w-5 h-5' />
            <span>Software Package</span>
          </a>
        </li>
        <li className='mb-2'>
          <a
            href='#'
            className={`${style.navStyle} ${active === 'System Logs' ? style.activeStyle : style.non_activeStyle}`}
            onClick={() => handlePageChange('System Logs')}
          >
            <BookOpenIcon className='w-5 h-5' />
            <span>System Logs</span>
          </a>
        </li>
        <li className='mb-2'>
          <a
            href='#'
            className={`${style.navStyle} ${active === 'Servers' ? style.activeStyle : style.non_activeStyle}`}
            onClick={() => handlePageChange('Servers')}
          >
            <ServerStackIcon className='w-5 h-5' />
            <span>Servers</span>
          </a>
        </li>
        <li className='mb-2'>
          <a
            href='#'
            className={`${style.navStyle} ${active === 'Utils' ? style.activeStyle : style.non_activeStyle}`}
            onClick={() => handlePageChange('Utils')}
          >
            <WrenchIcon className='w-5 h-5' />
            <span>Utils</span>
          </a>
        </li>
        <li className='mb-2'>
          <a
            href='#'
            className={`${style.navStyle} ${active === 'Networks' ? style.activeStyle : style.non_activeStyle}`}
            onClick={() => handlePageChange('Networks')}
          >
            <GlobeAltIcon className='w-5 h-5' />
            <span>Networks</span>
          </a>
        </li>
        <li className='mb-2'>
          <a
            href='#'
            className={`${style.navStyle} ${active === 'Hardware' ? style.activeStyle : style.non_activeStyle}`}
            onClick={() => handlePageChange('Hardware')}
          >
            <CpuChipIcon className='w-5 h-5' />
            <span>Hardware</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
