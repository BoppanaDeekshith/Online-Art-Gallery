import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaCheckCircle, FaHome, FaShoppingBag } from 'react-icons/fa';

export default function OrderSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear cart and other order-related data here if needed
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center border border-neutral-200">
        <div className="mb-8">
          <FaCheckCircle className="mx-auto text-secondary-500 text-6xl animate-bounce" />
        </div>
        
        <h1 className="text-3xl font-bold text-primary-900 mb-4">
          Order Placed Successfully!
        </h1>
        
        <p className="text-neutral-600 mb-8">
          Thank you for your purchase. We'll send you a confirmation email with your order details shortly.
        </p>

        <div className="border-t border-neutral-200 pt-8">
          <div className="text-neutral-600 mb-4">
            Order number: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </div>
          
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-sm hover:shadow-md"
            >
              <FaHome className="mr-2" />
              Return to Home
            </Link>
            
            <Link
              to="/category/paintings"
              className="inline-flex items-center justify-center px-6 py-3 border border-neutral-300 text-base font-medium rounded-md text-neutral-700 bg-white hover:bg-neutral-50 transition-colors shadow-sm hover:shadow-md"
            >
              <FaShoppingBag className="mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>

        <div className="mt-8 text-sm text-neutral-500">
          <p>Need help? <a href="#" className="text-primary-600 hover:text-primary-500">Contact our support team</a></p>
        </div>
      </div>
    </div>
  );
} 