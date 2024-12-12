import { Sidebar, Navbar } from './components';
import Dashboard from './components/Dashboard.tsx'; // 引入 Dashboard 組件
import { useState } from 'react';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex h-screen relative'>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} setCurrentPage={setCurrentPage} />
      <div className='flex flex-col flex-1 w-full'>
        <Navbar onMenuClick={toggleSidebar} />
        <div className='flex-1 p-4 bg-gray-100'>
          {currentPage === 'Dashboard' && <Dashboard />}
          {currentPage === 'Services' && (
            <div>
              <h1 className='mb-4 text-2xl font-bold'>Services</h1>
              <p>This is the Services page.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
