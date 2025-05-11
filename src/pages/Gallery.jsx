import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

// Mock data - in a real app, this would come from an API
const artworks = [
  // Paintings
  {
    id: 1,
    title: 'Colorful Emotions',
    artist: 'Jane Doe',
    category: 'paintings',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3'
  },
  {
    id: 2,
    title: 'Twilight Peaks',
    artist: 'John Smith',
    category: 'paintings',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?ixlib=rb-4.0.3'
  },
  {
    id: 3,
    title: 'Metropolitan Dreams',
    artist: 'Alice Johnson',
    category: 'paintings',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1549289524-06cf8837ace5?ixlib=rb-4.0.3'
  },
  {
    id: 4,
    title: 'Coastal Serenity',
    artist: 'Michael Brown',
    category: 'paintings',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?ixlib=rb-4.0.3'
  },
  // Sculptures
  {
    id: 5,
    title: 'Eternal Peace',
    artist: 'Mike Brown',
    category: 'sculptures',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1652786760341-52c51786a33b?ixlib=rb-4.1.0'
  },
  {
    id: 6,
    title: 'Guardian Angel',
    artist: 'Sarah Wilson',
    category: 'sculptures',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1590984530975-3b9dceb45117?ixlib=rb-4.1.0'
  },
  {
    id: 7,
    title: 'Ancient Wisdom',
    artist: 'David Lee',
    category: 'sculptures',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1601887389937-0b02c26b602c?ixlib=rb-4.0.3'
  },
  {
    id: 8,
    title: 'Meditation',
    artist: 'Emma Clark',
    category: 'sculptures',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1724092804458-0655f073e5a5?ixlib=rb-4.1.0'
  },
  // Photography
  {
    id: 9,
    title: 'Wildlife Photo',
    artist: 'Emma Clark',
    category: 'photography',
    price: 800,
    image: 'https://picsum.photos/800/600?random=9'
  },
  {
    id: 10,
    title: 'Street Photography',
    artist: 'Alex Turner',
    category: 'photography',
    price: 950,
    image: 'https://picsum.photos/800/600?random=10'
  },
  {
    id: 11,
    title: 'Nature Shot',
    artist: 'Chris Martin',
    category: 'photography',
    price: 750,
    image: 'https://picsum.photos/800/600?random=11'
  },
  {
    id: 12,
    title: 'Urban Landscape',
    artist: 'Lisa Wong',
    category: 'photography',
    price: 850,
    image: 'https://picsum.photos/800/600?random=12'
  },
  // Digital Art
  {
    id: 13,
    title: 'Digital Dreamscape',
    artist: 'Lisa Wong',
    category: 'digital-art',
    price: 600,
    image: 'https://picsum.photos/800/600?random=13'
  },
  {
    id: 14,
    title: 'Virtual Reality Art',
    artist: 'Robert Kim',
    category: 'digital-art',
    price: 750,
    image: 'https://picsum.photos/800/600?random=14'
  },
  {
    id: 15,
    title: 'Digital Abstract',
    artist: 'Tom Wilson',
    category: 'digital-art',
    price: 850,
    image: 'https://picsum.photos/800/600?random=15'
  },
  {
    id: 16,
    title: 'Cyber World',
    artist: 'Anna Chen',
    category: 'digital-art',
    price: 700,
    image: 'https://picsum.photos/800/600?random=16'
  },
  // Mixed Media
  {
    id: 17,
    title: 'Mixed Media Fusion',
    artist: 'Anna Chen',
    category: 'mixed-media',
    price: 1200,
    image: 'https://picsum.photos/800/600?random=17'
  },
  {
    id: 18,
    title: 'Collage Artwork',
    artist: 'James Park',
    category: 'mixed-media',
    price: 950,
    image: 'https://picsum.photos/800/600?random=18'
  },
  {
    id: 19,
    title: 'Mixed Elements',
    artist: 'Maria Garcia',
    category: 'mixed-media',
    price: 1100,
    image: 'https://picsum.photos/800/600?random=19'
  },
  {
    id: 20,
    title: 'Textural Symphony',
    artist: 'Carlos Ruiz',
    category: 'mixed-media',
    price: 1300,
    image: 'https://picsum.photos/800/600?random=20'
  }
];

const Gallery = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [sortBy, setSortBy] = useState('price');
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [isLoading, setIsLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState({});
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (!category) {
      console.error('No category provided');
      navigate('/');
      return;
    }

    const validCategories = [...new Set(artworks.map(art => art.category))];
    if (!validCategories.includes(category)) {
      console.error('Invalid category:', category);
      navigate('/');
      return;
    }

    setIsLoading(false);
  }, [category, navigate]);

  const handleAddToCart = (artwork) => {
    addToCart(artwork);
    setAddedToCart(prev => ({ ...prev, [artwork.id]: true }));
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [artwork.id]: false }));
    }, 2000);
  };

  const handleWishlist = (artwork) => {
    const isInWishlist = wishlist.some(item => item.id === artwork.id);
    if (isInWishlist) {
      setWishlist(wishlist.filter(item => item.id !== artwork.id));
      toast.success('Removed from wishlist', {
        style: {
          background: '#333',
          color: '#fff',
        },
      });
    } else {
      setWishlist([...wishlist, artwork]);
      toast.success('Added to wishlist', {
        style: {
          background: '#333',
          color: '#fff',
        },
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  const filteredArtworks = artworks
    .filter(artwork => artwork.category === category)
    .filter(artwork => artwork.price >= priceRange[0] && artwork.price <= priceRange[1])
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold capitalize">
          {category.replace('-', ' ')} Gallery
        </h1>
        
        <div className="flex items-center space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-lg px-3 py-2 bg-black text-white border-gray-600"
          >
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>

          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max="3000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-32 bg-black"
            />
            <span className="text-sm text-white">
              Max: ${priceRange[1]}
            </span>
          </div>
        </div>
      </div>

      {filteredArtworks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gray-800"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => handleWishlist(artwork)}
                    className="p-2 bg-black bg-opacity-80 rounded-lg hover:bg-opacity-100 transition-all flex items-center space-x-1 text-white"
                    title={wishlist.some(item => item.id === artwork.id) ? "Remove from Wishlist" : "Add to Wishlist"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill={wishlist.some(item => item.id === artwork.id) ? "red" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium">
                      {wishlist.some(item => item.id === artwork.id) ? "Saved" : "Save"}
                    </span>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{artwork.title}</h3>
                <p className="text-gray-300">{artwork.artist}</p>
                <p className="font-bold mt-2 text-white">${artwork.price}</p>
                <div className="flex space-x-2 mt-4">
                  <Link
                    to={`/artwork/${artwork.id}`}
                    className="flex-1 py-2 px-4 rounded-lg transition-colors duration-300 text-center border text-white hover:bg-gray-700"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleAddToCart(artwork)}
                    className={`flex-1 py-2 px-4 rounded-lg transition-colors duration-300 text-center ${
                      addedToCart[artwork.id]
                        ? 'bg-green-500 text-white'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    {addedToCart[artwork.id] ? 'Added!' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-white">No artworks found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;