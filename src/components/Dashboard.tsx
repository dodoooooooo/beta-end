import React, { useState } from 'react';

const users = [
  { name: 'Alan', status: 'green' },
  { name: 'Blan', status: 'green' },
  { name: 'Clan', status: 'red' },
  { name: 'Dlan', status: 'yellow' },
  { name: 'Elan', status: 'green' },
  { name: 'Flan', status: 'red' },
  { name: 'Glan', status: 'yellow' },
  { name: 'Hlan', status: 'green' },
  { name: 'Ilan', status: 'green' },
  { name: 'Jlan', status: 'green' },
  { name: 'Klan', status: 'red' },
  { name: 'Llan', status: 'yellow' },
  { name: 'Mlan', status: 'green' },
  { name: 'Nlan', status: 'red' },
  { name: 'Olan', status: 'yellow' },
  { name: 'Plan', status: 'green' },
  { name: 'Qlan', status: 'green' },
  { name: 'Rlan', status: 'green' },
  { name: 'Slan', status: 'red' },
  { name: 'Tlan', status: 'yellow' },
  { name: 'Ulan', status: 'green' },
  { name: 'Vlan', status: 'red' },
  { name: 'Wlan', status: 'yellow' },
  { name: 'Xlan', status: 'green' },
  { name: 'Ylan', status: 'green' },
  { name: 'Zlan', status: 'green' },
  { name: 'aaa', status: 'red' },
  { name: 'bbb', status: 'yellow' },
  { name: 'ccc', status: 'green' },
  { name: 'ddd', status: 'red' },
  { name: 'eee', status: 'yellow' },
  { name: 'fff', status: 'green' },
];

const Dashboard = () => {
  const [sortAZ, setSortAZ] = useState(false);
  const [sortByLight, setSortByLight] = useState(false);

  const toggleSortAZ = () => setSortAZ(!sortAZ);
  const toggleSortByLight = () => setSortByLight(!sortByLight);

  const sortedUsers = [...users].sort((a, b) => {
    if (sortByLight) {
      const statusDiff = getStatusOrder(a.status) - getStatusOrder(b.status);
      if (statusDiff !== 0) return statusDiff;
    }
    if (sortAZ) {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className='bg-white min-h-screen p-8'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
        <div className='flex items-center space-x-4'>
          <label className='flex items-center'>
            <input
              type='checkbox'
              checked={sortAZ}
              onChange={toggleSortAZ}
              className='mr-2'
            />
            A-Z
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              checked={sortByLight}
              onChange={toggleSortByLight}
              className='mr-2'
            />
            Light
          </label>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {sortedUsers.map((user, index) => (
          <div
            key={index}
            className='flex justify-between items-center p-4 border rounded-lg bg-white shadow-md text-black'
          >
            <span>{user.name}</span>
            <span className={`w-3 h-3 rounded-full ${getStatusColor(user.status)}`}></span>
          </div>
        ))}
      </div>
      <div className='mt-6 flex justify-center'>
        <button className='bg-black text-white px-4 py-2 rounded hover:bg-gray-700'>
          Next page &gt;
        </button>
      </div>
    </div>
  );
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'green':
      return 'bg-green-500';
    case 'yellow':
      return 'bg-yellow-500';
    case 'red':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

const getStatusOrder = (status: string) => {
  switch (status) {
    case 'red':
      return 1;
    case 'yellow':
      return 2;
    case 'green':
      return 3;
    default:
      return 4;
  }
};

export default Dashboard;
