import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8 text-center"
        >
          <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your order. We'll start preparing it right away!
          </p>
          <div className="space-y-4">
            <p className="text-gray-600">
              Estimated delivery time: 30-45 minutes
            </p>
            <p className="text-gray-600">
              You will receive an email confirmation shortly.
            </p>
          </div>
          <Link
            to="/"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full mt-8 hover:bg-orange-600 transition duration-300"
          >
            Return to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderConfirmation;