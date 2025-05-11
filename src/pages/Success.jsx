import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="mb-8">
        <svg
          className="w-16 h-16 text-green-500 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Purchase!</h1>
      <p className="text-lg text-gray-600 mb-8">
        Your order has been successfully processed. We'll send you an email with the order details and tracking information.
      </p>
      <div className="space-x-4">
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Back to Home
        </Link>
        <Link
          to="/gallery/paintings"
          className="inline-block border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Success; 