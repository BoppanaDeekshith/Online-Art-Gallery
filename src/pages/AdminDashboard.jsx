import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-600 mb-8 border-b-4 border-indigo-500 pb-4 inline-block">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-indigo-700 flex items-center">
              <span className="bg-indigo-100 p-2 rounded-lg mr-2">👥</span>
              User Management
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• View all registered users</li>
              <li>• Manage user permissions</li>
              <li>• Block/Unblock users</li>
              <li>• Reset user passwords</li>
              <li>• View user activity logs</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-purple-700 flex items-center">
              <span className="bg-purple-100 p-2 rounded-lg mr-2">🎨</span>
              Artist Management
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Review artist applications</li>
              <li>• Verify artist credentials</li>
              <li>• Manage artwork submissions</li>
              <li>• Handle artist payouts</li>
              <li>• Monitor artist performance</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-blue-700 flex items-center">
              <span className="bg-blue-100 p-2 rounded-lg mr-2">📊</span>
              System Analytics
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Track sales and revenue</li>
              <li>• Monitor website traffic</li>
              <li>• View customer feedback</li>
              <li>• Generate performance reports</li>
              <li>• Analyze user engagement</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-green-700 flex items-center">
              <span className="bg-green-100 p-2 rounded-lg mr-2">📝</span>
              Content Management
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Manage artwork categories</li>
              <li>• Review reported content</li>
              <li>• Update featured artworks</li>
              <li>• Moderate user comments</li>
              <li>• Handle content disputes</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-orange-700 flex items-center">
              <span className="bg-orange-100 p-2 rounded-lg mr-2">🛍️</span>
              Order Management
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• View all orders</li>
              <li>• Track order status</li>
              <li>• Handle refund requests</li>
              <li>• Manage shipping issues</li>
              <li>• Process cancellations</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-teal-700 flex items-center">
              <span className="bg-teal-100 p-2 rounded-lg mr-2">⚙️</span>
              System Settings
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Configure payment gateways</li>
              <li>• Manage email templates</li>
              <li>• Set platform fees</li>
              <li>• Update system policies</li>
              <li>• Backup system data</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;