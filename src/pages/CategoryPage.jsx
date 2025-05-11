import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import toast from 'react-hot-toast';

// Sample artwork data - in a real app, this would come from an API or database
const artworks = [
  // Sculptures
  {
    id: 1,
    title: "Classical Form",
    artist: "Maria Gonzalez",
    category: "sculptures",
    price: 3500,
    imageUrl: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=400&h=300",
    description: "A modern interpretation of classical sculpture forms"
  },
  {
    id: 2,
    title: "Bronze Harmony",
    artist: "David Chen",
    category: "sculptures",
    price: 4200,
    imageUrl: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80&w=400&h=300",
    description: "An elegant bronze sculpture capturing movement"
  },
  {
    id: 3,
    title: "Stone Whispers",
    artist: "Sophie Laurent",
    category: "sculptures",
    price: 5800,
    imageUrl: "https://images.unsplash.com/photo-1620117654333-c125fef82817?auto=format&fit=crop&q=80&w=400&h=300",
    description: "A minimalist stone sculpture exploring negative space"
  },
  // Paintings
  {
    id: 4,
    title: "Autumn Symphony",
    artist: "Isabella Martinez",
    category: "paintings",
    price: 2800,
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=400&h=300",
    description: "Abstract interpretation of fall colors"
  },
  {
    id: 5,
    title: "Urban Dreams",
    artist: "Michael Chang",
    category: "paintings",
    price: 3200,
    imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=400&h=300",
    description: "Cityscape in impressionist style"
  },
  {
    id: 6,
    title: "Ocean Memories",
    artist: "Emma Wilson",
    category: "paintings",
    price: 4500,
    imageUrl: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&q=80&w=400&h=300",
    description: "Seascape with dynamic brush strokes"
  },
  // Photography
  {
    id: 7,
    title: "Urban Solitude",
    artist: "James Anderson",
    category: "photography",
    price: 1200,
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400&h=300",
    description: "Black and white street photography"
  },
  {
    id: 8,
    title: "Natural Patterns",
    artist: "Sarah Kim",
    category: "photography",
    price: 950,
    imageUrl: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&fit=crop&q=80&w=400&h=300",
    description: "Macro photography of natural textures"
  },
  {
    id: 9,
    title: "Mountain Dawn",
    artist: "Thomas Berg",
    category: "photography",
    price: 1500,
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=400&h=300",
    description: "Landscape photography of mountain sunrise"
  },
  // Digital Art
  {
    id: 10,
    title: "Cyber Dreams",
    artist: "Alex Rivera",
    category: "digital art",
    price: 800,
    imageUrl: "https://images.unsplash.com/photo-1633355444132-695d5876cd00?auto=format&fit=crop&q=80&w=400&h=300",
    description: "Futuristic digital composition"
  },
  {
    id: 11,
    title: "Virtual Reality",
    artist: "Nina Zhang",
    category: "digital art",
    price: 1100,
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=300",
    description: "Abstract digital art exploring virtual spaces"
  },
  {
    id: 12,
    title: "Digital Flora",
    artist: "Marcus Lee",
    category: "digital art",
    price: 950,
    imageUrl: "https://images.unsplash.com/photo-1633354931133-49c586f89d4c?auto=format&fit=crop&q=80&w=400&h=300",
    description: "Digital interpretation of botanical forms"
  },
  // Mixed Media
  {
    id: 13,
    title: "Urban Collage",
    artist: "Lisa Wong",
    category: "mixed media",
    price: 2200,
    imageUrl: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&q=80&w=400&h=300",
    description: "Mixed media collage incorporating urban elements"
  },
  {
    id: 14,
    title: "Textural Symphony",
    artist: "Carlos Ruiz",
    category: "mixed media",
    price: 2800,
    imageUrl: "https://images.unsplash.com/photo-1515266591878-f93e32bc5937?auto=format&fit=crop&q=80&w=400&h=300",
    description: "Mixed media exploration of textures and patterns"
  },
  {
    id: 15,
    title: "Material Stories",
    artist: "Anna Petrov",
    category: "mixed media",
    price: 3100,
    imageUrl: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=400&h=300",
    description: "Narrative piece combining various materials"
  }
];

export default function CategoryPage() {
  const { category } = useParams();
  const { addToCart } = useCart();
  const normalizedCategory = category.toLowerCase();
  
  const filteredArtworks = artworks.filter(
    artwork => artwork.category.toLowerCase() === normalizedCategory
  );

  const handleAddToCart = (artwork, e) => {
    e.preventDefault(); // Prevent navigation when clicking the Add to Cart button
    addToCart(artwork);
    toast.success(`${artwork.title} added to cart!`, {
      icon: '🛒',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize text-neutral-50">{category}</h1>
      
      {filteredArtworks.length === 0 ? (
        <p className="text-neutral-400">No artworks found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map(artwork => (
            <Link 
              to={`/artwork/${artwork.id}`} 
              key={artwork.id}
              className="group relative"
            >
              <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 border border-neutral-700">
                <div className="relative">
                  <img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-neutral-50 group-hover:text-neutral-200">{artwork.title}</h2>
                  <p className="text-neutral-400 mb-2">by {artwork.artist}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-bold text-neutral-200">${artwork.price}</p>
                    <button
                      onClick={(e) => handleAddToCart(artwork, e)}
                      className="bg-neutral-700 text-neutral-50 px-4 py-2 rounded-md hover:bg-neutral-600 transition-colors flex items-center gap-2 shadow-sm hover:shadow-md"
                    >
                      <FaShoppingCart className="text-neutral-100" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 