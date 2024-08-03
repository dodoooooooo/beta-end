import { Sidebar,Navbar } from './components';

const App = () => (
  <div className='flex h-screen'>
    <Sidebar />
    <div className="flex flex-col flex-1 w-full">
      <Navbar />
      {/* Main content */}
      <div className="flex-1 p-4 bg-gray-100">
        <h1 className="mb-4 text-2xl font-bold">Main Content</h1>
        <p>This is the main content area.</p>
      </div>
    </div>
  </div>
);

export default App;
