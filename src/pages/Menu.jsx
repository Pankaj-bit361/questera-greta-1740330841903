import { motion } from 'framer-motion';
import { useCart } from '../components/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const menuCategories = {
  coffee: [
    {
      id: 'c1',
      name: "Espresso",
      price: "$3.50",
      description: "Single shot of our signature blend",
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'c2',
      name: "Cappuccino",
      price: "$4.50",
      description: "Espresso with steamed milk and foam",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'c3',
      name: "Latte",
      price: "$4.75",
      description: "Espresso with extra steamed milk and light foam",
      image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'c4',
      name: "Cold Brew",
      price: "$4.25",
      description: "24-hour steeped coffee served over ice",
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ],
  food: [
    {
      id: 'f1',
      name: "Avocado Toast",
      price: "$9.50",
      description: "Sourdough bread with mashed avocado and seeds",
      image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'f2',
      name: "Breakfast Sandwich",
      price: "$8.75",
      description: "Eggs, cheese, and bacon on a croissant",
      image: "https://images.unsplash.com/photo-1587339144367-f1cacac585ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'f3',
      name: "Chicken Panini",
      price: "$10.50",
      description: "Grilled chicken with pesto and mozzarella",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'f4',
      name: "Caesar Salad",
      price: "$11.00",
      description: "Romaine lettuce with our house-made dressing",
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ],
  pastries: [
    {
      id: 'p1',
      name: "Croissant",
      price: "$3.75",
      description: "Butter croissant baked fresh daily",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'p2',
      name: "Blueberry Muffin",
      price: "$3.50",
      description: "Made with fresh blueberries",
      image: "https://images.unsplash.com/photo-1587830083487-16a897351147?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'p3',
      name: "Chocolate Cookie",
      price: "$2.75",
      description: "Double chocolate chip cookie",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 'p4',
      name: "Danish",
      price: "$3.95",
      description: "Fruit-filled pastry with cream cheese",
      image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ]
};

const Menu = () => {
  const { dispatch } = useCart();

  const addToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Menu
        </motion.h1>

        {Object.entries(menuCategories).map(([category, items], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6 text-orange-500 capitalize">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-medium">{item.name}</h3>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                        <span className="text-orange-500 font-semibold block mt-2">
                          {item.price}
                        </span>
                      </div>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition duration-300"
                      >
                        <FaShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Menu;