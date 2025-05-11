import React from 'react';

const ArtistDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-600 mb-8 border-b-4 border-purple-500 pb-4 inline-block">Artist Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-purple-700 flex items-center">
              <span className="bg-purple-100 p-2 rounded-lg mr-2">🎨</span>
              My Artworks
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Upload new artworks</li>
              <li>• Manage existing pieces</li>
              <li>• Set artwork pricing</li>
              <li>• Update artwork details</li>
              <li>• Track artwork views</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-blue-700 flex items-center">
              <span className="bg-blue-100 p-2 rounded-lg mr-2">📊</span>
              Sales Analytics
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• View sales history</li>
              <li>• Track earnings</li>
              <li>• Monitor performance</li>
              <li>• View customer reviews</li>
              <li>• Generate reports</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-green-700 flex items-center">
              <span className="bg-green-100 p-2 rounded-lg mr-2">💰</span>
              Earnings
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Payment history</li>
              <li>• Pending payments</li>
              <li>• Setup payment info</li>
              <li>• Tax documents</li>
              <li>• Revenue insights</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-orange-700 flex items-center">
              <span className="bg-orange-100 p-2 rounded-lg mr-2">📦</span>
              Orders
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• View current orders</li>
              <li>• Order history</li>
              <li>• Shipping status</li>
              <li>• Customer messages</li>
              <li>• Handle returns</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-teal-700 flex items-center">
              <span className="bg-teal-100 p-2 rounded-lg mr-2">👤</span>
              Profile
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Edit profile info</li>
              <li>• Update portfolio</li>
              <li>• Manage gallery</li>
              <li>• Social links</li>
              <li>• Artist statement</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-red-700 flex items-center">
              <span className="bg-red-100 p-2 rounded-lg mr-2">📢</span>
              Marketing
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Promote artworks</li>
              <li>• Special offers</li>
              <li>• Email campaigns</li>
              <li>• Social sharing</li>
              <li>• Analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDashboard;