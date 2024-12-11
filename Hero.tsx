import React from 'react';
import { Clock, Truck, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your Health Is Our<br />Top Priority
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Get your medicines delivered at your doorstep with our 24/7 pharmacy service.
              Professional consultation available.
            </p>
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
              Shop Now
            </button>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80"
              alt="Pharmacy"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
            <Clock className="h-8 w-8 text-emerald-600" />
            <div>
              <h3 className="font-semibold">24/7 Service</h3>
              <p className="text-gray-600">Always available for you</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
            <Truck className="h-8 w-8 text-emerald-600" />
            <div>
              <h3 className="font-semibold">Fast Delivery</h3>
              <p className="text-gray-600">Free delivery on orders above $50</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
            <Phone className="h-8 w-8 text-emerald-600" />
            <div>
              <h3 className="font-semibold">Expert Support</h3>
              <p className="text-gray-600">Professional consultation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
