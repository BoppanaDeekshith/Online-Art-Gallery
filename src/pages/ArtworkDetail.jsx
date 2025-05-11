import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Mock data - in a real app, this would come from an API
const artworks = [
  // Paintings
  {
    id: 1,
    title: 'Colorful Emotions',
    artist: 'Jane Doe',
    category: 'paintings',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3',
    description: 'A vibrant exploration of color and form, this piece draws viewers into a dynamic interplay of shapes and emotions. The bold use of primary colors creates a sense of movement and energy.',
    size: '36 x 48 inches',
    medium: 'Acrylic on canvas',
    year: 2023
  },
  {
    id: 2,
    title: 'Twilight Peaks',
    artist: 'John Smith',
    category: 'paintings',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?ixlib=rb-4.0.3',
    description: 'A serene landscape capturing the subtle beauty of a misty morning in the mountains. Soft colors and delicate brushwork create a peaceful atmosphere.',
    size: '24 x 36 inches',
    medium: 'Oil on canvas',
    year: 2022
  },
  {
    id: 3,
    title: 'Metropolitan Dreams',
    artist: 'Alice Johnson',
    category: 'paintings',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1549289524-06cf8837ace5?ixlib=rb-4.0.3',
    description: 'A contemporary digital artwork that blends traditional artistic elements with modern technology. The piece explores themes of connection and isolation in the digital age.',
    size: '20 x 30 inches',
    medium: 'Digital print on archival paper',
    year: 2023
  },
  {
    id: 4,
    title: 'Coastal Serenity',
    artist: 'Michael Brown',
    category: 'paintings',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?ixlib=rb-4.0.3',
    description: 'A mesmerizing depiction of ocean waves, capturing the power and beauty of the sea. The artist\'s use of light and shadow creates a sense of depth and movement.',
    size: '30 x 40 inches',
    medium: 'Oil on canvas',
    year: 2023
  },
  // Sculptures
  {
    id: 5,
    title: 'Eternal Peace',
    artist: 'Mike Brown',
    category: 'sculptures',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1652786760341-52c51786a33b?ixlib=rb-4.1.0',
    description: 'A modern sculpture that explores the relationship between form and space. The clean lines and geometric shapes create a sense of balance and harmony.',
    size: '48 x 24 x 24 inches',
    medium: 'Bronze',
    year: 2023
  },
  {
    id: 6,
    title: 'Guardian Angel',
    artist: 'Sarah Wilson',
    category: 'sculptures',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1590984530975-3b9dceb45117?ixlib=rb-4.1.0',
    description: 'A classical sculpture inspired by ancient Greek art. The attention to detail and mastery of form showcase the artist\'s technical skill.',
    size: '36 x 18 x 18 inches',
    medium: 'Marble',
    year: 2022
  },
  {
    id: 7,
    title: 'Ancient Wisdom',
    artist: 'David Lee',
    category: 'sculptures',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1601887389937-0b02c26b602c?ixlib=rb-4.0.3',
    description: 'A bronze figure that captures the essence of human movement. The patina finish adds depth and character to the piece.',
    size: '24 x 12 x 12 inches',
    medium: 'Bronze',
    year: 2023
  },
  {
    id: 8,
    title: 'Meditation',
    artist: 'Emma Clark',
    category: 'sculptures',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1724092804458-0655f073e5a5?ixlib=rb-4.1.0',
    description: 'A stone carving that showcases the natural beauty of the material. The organic forms and textures create a sense of timelessness.',
    size: '30 x 20 x 20 inches',
    medium: 'Stone',
    year: 2023
  },
  // Photography
  {
    id: 9,
    title: 'Wildlife Photo',
    artist: 'Emma Clark',
    category: 'photography',
    price: 800,
    image: 'https://picsum.photos/800/600?random=9',
    description: 'A stunning wildlife photograph capturing a rare moment in nature. The composition and lighting create a powerful image.',
    size: '16 x 24 inches',
    medium: 'Archival print',
    year: 2023
  },
  {
    id: 10,
    title: 'Street Photography',
    artist: 'Alex Turner',
    category: 'photography',
    price: 950,
    image: 'https://picsum.photos/800/600?random=10',
    description: 'A candid street photography series capturing urban life. The black and white treatment adds a timeless quality.',
    size: '20 x 30 inches',
    medium: 'Archival print',
    year: 2023
  },
  {
    id: 11,
    title: 'Nature Shot',
    artist: 'Chris Martin',
    category: 'photography',
    price: 750,
    image: 'https://picsum.photos/800/600?random=11',
    description: 'A breathtaking nature photograph that captures the beauty of the natural world. The composition draws the viewer into the scene.',
    size: '18 x 24 inches',
    medium: 'Archival print',
    year: 2023
  },
  {
    id: 12,
    title: 'Urban Landscape',
    artist: 'Lisa Wong',
    category: 'photography',
    price: 850,
    image: 'https://picsum.photos/800/600?random=12',
    description: 'An urban landscape photograph that explores the relationship between architecture and space. The geometric patterns create visual interest.',
    size: '20 x 30 inches',
    medium: 'Archival print',
    year: 2023
  },
  // Digital Art
  {
    id: 13,
    title: 'Digital Dreamscape',
    artist: 'Lisa Wong',
    category: 'digital-art',
    price: 600,
    image: 'https://picsum.photos/800/600?random=13',
    description: 'A digital artwork that explores the boundaries between reality and imagination. The vibrant colors and surreal elements create a dreamlike atmosphere.',
    size: 'Digital',
    medium: 'Digital art',
    year: 2023
  },
  {
    id: 14,
    title: 'Virtual Reality',
    artist: 'Robert Kim',
    category: 'digital-art',
    price: 750,
    image: 'https://picsum.photos/800/600?random=14',
    description: 'An immersive digital experience exploring virtual spaces. The interactive elements create a unique viewing experience.',
    size: 'Digital',
    medium: 'Digital art',
    year: 2023
  },
  {
    id: 15,
    title: 'Digital Abstract',
    artist: 'Tom Wilson',
    category: 'digital-art',
    price: 850,
    image: 'https://picsum.photos/800/600?random=15',
    description: 'A digital abstract piece that explores the relationship between color and form. The dynamic composition creates visual energy.',
    size: 'Digital',
    medium: 'Digital art',
    year: 2023
  },
  {
    id: 16,
    title: 'Cyber World',
    artist: 'Anna Chen',
    category: 'digital-art',
    price: 700,
    image: 'https://picsum.photos/800/600?random=16',
    description: 'A digital artwork that explores the intersection of technology and art. The futuristic elements create a sense of innovation.',
    size: 'Digital',
    medium: 'Digital art',
    year: 2023
  },
  // Mixed Media
  {
    id: 17,
    title: 'Mixed Media Fusion',
    artist: 'Anna Chen',
    category: 'mixed-media',
    price: 1200,
    image: 'https://picsum.photos/800/600?random=17',
    description: 'A mixed media piece that combines traditional and modern elements. The layering of materials creates depth and texture.',
    size: '30 x 40 inches',
    medium: 'Mixed media',
    year: 2023
  },
  {
    id: 18,
    title: 'Collage Artwork',
    artist: 'James Park',
    category: 'mixed-media',
    price: 950,
    image: 'https://picsum.photos/800/600?random=18',
    description: 'A collage artwork that combines various materials and textures. The composition creates a sense of harmony and balance.',
    size: '24 x 36 inches',
    medium: 'Mixed media',
    year: 2023
  },
  {
    id: 19,
    title: 'Mixed Elements',
    artist: 'Maria Garcia',
    category: 'mixed-media',
    price: 1100,
    image: 'https://picsum.photos/800/600?random=19',
    description: 'A mixed media piece that explores the relationship between different materials. The combination of elements creates visual interest.',
    size: '36 x 48 inches',
    medium: 'Mixed media',
    year: 2023
  },
  {
    id: 20,
    title: 'Textural Symphony',
    artist: 'Carlos Ruiz',
    category: 'mixed-media',
    price: 1300,
    image: 'https://picsum.photos/800/600?random=20',
    description: 'A mixed media artwork that focuses on texture and form. The layering of materials creates a rich visual experience.',
    size: '30 x 40 inches',
    medium: 'Mixed media',
    year: 2023
  }
];

const ArtworkDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const artwork = artworks.find(art => art.id === parseInt(id));

  const handleAddToCart = () => {
    if (artwork) {
      addToCart({ ...artwork, quantity });
      navigate('/cart');
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: artwork.title,
          text: `Check out this amazing ${artwork.category} by ${artwork.artist}`,
          url: window.location.href,
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        const shareUrl = window.location.href;
        await navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  if (!artwork) {
    return <div className="text-center py-8 text-white">Artwork not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Artwork Image */}
        <div className="relative">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="absolute top-4 right-4">
            <button
              onClick={handleShare}
              className="p-2 bg-black bg-opacity-80 rounded-lg hover:bg-opacity-100 transition-all flex items-center space-x-1 text-white"
              title="Share"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              <span className="text-sm font-medium">Share</span>
            </button>
          </div>
        </div>

        {/* Artwork Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-white">{artwork.title}</h1>
            <p className="text-gray-300 mt-2">by {artwork.artist}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-white">${artwork.price}</p>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border rounded-lg hover:bg-gray-700 transition-colors text-white"
              >
                -
              </button>
              <span className="text-white">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border rounded-lg hover:bg-gray-700 transition-colors text-white"
              >
                +
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Description</h2>
            <p className="text-gray-300">{artwork.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400">Category</p>
                <p className="text-white">{artwork.category}</p>
              </div>
              <div>
                <p className="text-gray-400">Size</p>
                <p className="text-white">{artwork.size}</p>
              </div>
              <div>
                <p className="text-gray-400">Medium</p>
                <p className="text-white">{artwork.medium}</p>
              </div>
              <div>
                <p className="text-gray-400">Year</p>
                <p className="text-white">{artwork.year}</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;