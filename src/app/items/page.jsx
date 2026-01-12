"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/items");
      const data = await response.json();

      if (data.success) {
        setItems(data.data);
      } else {
        setError(data.error || "Failed to fetch items");
      }
    } catch (error) {
      console.error("Error fetching items:", error);
      setError("Failed to connect to the server");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <p className="text-gray-600">Loading items...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchItems}
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Amazing Items
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of premium products, carefully
            selected for quality and value.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No items found
            </h3>
            <p className="text-gray-600">
              Check back later for new items or try refreshing the page.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <ItemCard key={item.id} item={item} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ItemCard({ item, index }) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <Link href={`/items/${item.id}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {item.inStock && (
            <div className="absolute top-4 left-4">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                In Stock
              </span>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
              {item.name}
            </h3>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {item.category}
            </span>
          </div>

          <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary-600">
              ${item.price.toFixed(2)}
            </span>
            <span className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
              View Details
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
