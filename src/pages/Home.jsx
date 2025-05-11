import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Circular Light Effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white/5 blur-2xl"></div>
        </div>

        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            ART GALLERY
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the fusion of traditional artistry and modern technology. 
            Discover unique pieces from talented artists around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/gallery/paintings"
              className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors font-semibold"
            >
              Explore Gallery
            </Link>
            <Link
              to="/gallery/digital-art"
              className="px-8 py-3 border border-white rounded-full hover:bg-white/10 transition-colors"
            >
              Digital Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/gallery/${category.path}`}
              className="group relative h-64 overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="text-sm text-gray-300">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Curated Collection</h3>
              <p className="text-gray-400">Carefully selected artworks from renowned artists</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Virtual Tours</h3>
              <p className="text-gray-400">Experience art from the comfort of your home</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Secure Transactions</h3>
              <p className="text-gray-400">Safe and easy purchasing process</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Featured categories data
const categories = [
  {
    name: 'Paintings',
    path: 'paintings',
    image: 'https://picsum.photos/800/600?random=1',
    description: 'Traditional and contemporary paintings'
  },
  {
    name: 'Digital Art',
    path: 'digital-art',
    image: 'https://picsum.photos/800/600?random=2',
    description: 'Modern digital masterpieces'
  },
  {
    name: 'Photography',
    path: 'photography',
    image: 'https://picsum.photos/800/600?random=3',
    description: 'Captivating photographic works'
  }
];

export default Home; 