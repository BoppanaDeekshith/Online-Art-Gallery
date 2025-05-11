import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Payment = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState(null);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const getPriceRange = (total) => {
    if (total < 50) return 'Budget';
    if (total < 100) return 'Standard';
    if (total < 200) return 'Premium';
    return 'Luxury';
  };

  useEffect(() => {
    // Get shipping info from localStorage
    const savedShippingInfo = localStorage.getItem('shippingInfo');
    if (!savedShippingInfo) {
      navigate('/shipping');
      return;
    }
    setShippingInfo(JSON.parse(savedShippingInfo));
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would process the payment here
    console.log('Processing payment...', { ...formData, shippingInfo });
    
    // Clear cart and redirect to success page
    clearCart();
    localStorage.removeItem('shippingInfo');
    navigate('/success');
  };

  if (!shippingInfo) {
    return null;
  }

  const total = getCartTotal();
  const priceRange = getPriceRange(total);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Payment Information</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-white">Order Summary</h2>
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300">Quantity: {item.quantity}</p>
                </div>
                <p className="font-medium text-white">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className="border-t border-gray-700 pt-4">
              <div className="flex justify-between font-bold text-lg text-white">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="mt-2 text-right">
                <span className="text-sm text-gray-300">Price Range: </span>
                <span className="text-sm font-medium text-blue-400">{priceRange}</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2 text-white">Shipping Address</h3>
            <p className="text-gray-300">{shippingInfo.name}</p>
            <p className="text-gray-300">{shippingInfo.address}</p>
            <p className="text-gray-300">{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zip}</p>
            <p className="text-gray-300">{shippingInfo.email}</p>
          </div>
        </div>

        {/* Payment Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg bg-gray-800 text-white placeholder-gray-400"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg bg-gray-800 text-white placeholder-gray-400"
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg bg-gray-800 text-white placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate('/shipping')}
              className="px-6 py-3 border rounded-lg hover:bg-gray-700 transition-colors text-white"
            >
              Back to Shipping
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Complete Purchase
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment; 