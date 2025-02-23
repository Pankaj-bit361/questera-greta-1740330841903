import { motion } from 'framer-motion';
import { useOrder } from '../components/OrderContext';
import { FaCheckCircle, FaClock, FaMotorcycle, FaUtensils } from 'react-icons/fa';

const OrderTracking = () => {
  const { state } = useOrder();
  const { orders } = state;

  const getStatusIcon = (status) => {
    switch (status) {
      case 'preparing':
        return <FaUtensils className="w-6 h-6 text-orange-500" />;
      case 'ready':
        return <FaCheckCircle className="w-6 h-6 text-green-500" />;
      case 'delivering':
        return <FaMotorcycle className="w-6 h-6 text-blue-500" />;
      default:
        return <FaClock className="w-6 h-6 text-gray-500" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'preparing':
        return 'Your order is being prepared';
      case 'ready':
        return 'Your order is ready for pickup/delivery';
      case 'delivering':
        return 'Your order is on the way';
      default:
        return 'Order received';
    }
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Track Your Orders
        </motion.h1>

        {orders.length === 0 ? (
          <div className="text-center text-gray-600">
            No active orders to track
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((order) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Order #{order.id}</h2>
                  <span className="text-orange-500 font-medium">
                    ${order.total.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center mb-6">
                  {getStatusIcon(order.status)}
                  <span className="ml-3 text-lg">{getStatusText(order.status)}</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-medium mb-3">Order Items:</h3>
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-gray-600">
                        <span>{item.name} x {item.quantity}</span>
                        <span>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 text-sm text-gray-500">
                  Estimated delivery: {order.estimatedDelivery}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;