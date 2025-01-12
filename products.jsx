import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Pain Relief Tablets',
    price: 19.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Vitamin C Supplements',
    price: 24.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1616671276441-2f2c277b8bf6?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    name: 'First Aid Kit',
    price: 39.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    name: 'Digital Thermometer',
    price: 29.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1584308666999-b85cdf62a0dc?auto=format&fit=crop&w=400&q=80'
  }
];

export default function Products() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                
                <div className="flex items-center mt-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600">{product.rating}</span>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold text-emerald-600">${product.price}</span>
                  <button className="p-2 rounded-full bg-emerald-100 hover:bg-emerald-200 transition-colors">
                    <ShoppingCart className="h-5 w-5 text-emerald-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
images.unsplash.com
