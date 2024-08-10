import { Sidebar, Navbar } from './components';
import { useState } from 'react';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className='flex h-screen'>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <div className='flex flex-col flex-1 w-full'>
        <Navbar onMenuClick={toggleSidebar} />
        {/* Main content */}
        <div className='flex-1 p-4 bg-gray-100'>
          <h1 className='mb-4 text-2xl font-bold'>Main Content</h1>
          <p>This is the main content area.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
