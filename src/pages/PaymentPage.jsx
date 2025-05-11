import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSteps = {
  SHIPPING: 'shipping',
  PAYMENT: 'payment',
  CONFIRMATION: 'confirmation'
};

const PaymentPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(PaymentSteps.SHIPPING);
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    switch (currentStep) {
      case PaymentSteps.SHIPPING:
        setCurrentStep(PaymentSteps.PAYMENT);
        break;
      case PaymentSteps.PAYMENT:
        setCurrentStep(PaymentSteps.CONFIRMATION);
        break;
      case PaymentSteps.CONFIRMATION:
        // Handle order submission
        handleOrderSubmission();
        break;
      default:
        break;
    }
  };

  const handleOrderSubmission = () => {
    // In a real application, this would make an API call to process the payment
    console.log('Processing order:', formData);
    // Simulate successful payment
    setTimeout(() => {
      navigate('/order-success');
    }, 1500);
  };

  const renderShippingForm = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        >
          <option value="">Select a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="GB">United Kingdom</option>
          <option value="AU">Australia</option>
        </select>
      </div>
    </div>
  );

  const renderPaymentForm = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name on Card</label>
        <input
          type="text"
          name="nameOnCard"
          value={formData.nameOnCard}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Card Number</label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
          placeholder="1234 5678 9012 3456"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleInputChange}
            placeholder="MM/YY"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">CVV</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            placeholder="123"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Order Summary</h3>
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Shipping to:</p>
            <p className="font-medium">{formData.firstName} {formData.lastName}</p>
            <p>{formData.address}</p>
            <p>{formData.city}, {formData.postalCode}</p>
            <p>{formData.country}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Payment Method:</p>
            <p className="font-medium">Credit Card ending in {formData.cardNumber.slice(-4)}</p>
            <p>Expiring: {formData.expiryDate}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {Object.values(PaymentSteps).map((step, index) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep === step ? 'bg-primary-600 text-white' : 
                Object.values(PaymentSteps).indexOf(currentStep) > index ? 'bg-secondary-500 text-white' : 'bg-neutral-200'
              }`}>
                {Object.values(PaymentSteps).indexOf(currentStep) > index ? '✓' : index + 1}
              </div>
              {index < Object.values(PaymentSteps).length - 1 && (
                <div className={`h-1 w-16 mx-2 ${
                  Object.values(PaymentSteps).indexOf(currentStep) > index ? 'bg-secondary-500' : 'bg-neutral-200'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 border border-neutral-200">
        <h2 className="text-2xl font-bold mb-6 text-primary-900">
          {currentStep === PaymentSteps.SHIPPING && 'Shipping Information'}
          {currentStep === PaymentSteps.PAYMENT && 'Payment Information'}
          {currentStep === PaymentSteps.CONFIRMATION && 'Confirm Order'}
        </h2>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {currentStep === PaymentSteps.SHIPPING && renderShippingForm()}
          {currentStep === PaymentSteps.PAYMENT && renderPaymentForm()}
          {currentStep === PaymentSteps.CONFIRMATION && renderConfirmation()}

          <div className="flex justify-between pt-4 border-t border-neutral-200">
            {currentStep !== PaymentSteps.SHIPPING && (
              <button
                type="button"
                onClick={() => setCurrentStep(prev => 
                  prev === PaymentSteps.PAYMENT ? PaymentSteps.SHIPPING : PaymentSteps.PAYMENT
                )}
                className="bg-neutral-200 text-neutral-700 px-6 py-2 rounded-md hover:bg-neutral-300 transition-colors"
              >
                Back
              </button>
            )}
            <button
              type="button"
              onClick={handleNextStep}
              className="ml-auto bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              {currentStep === PaymentSteps.CONFIRMATION ? 'Place Order' : 'Continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage; 