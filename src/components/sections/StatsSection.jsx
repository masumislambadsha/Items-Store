"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [counters, setCounters] = useState({
    customers: 0,
    products: 0,
    countries: 0,
    satisfaction: 0,
  });

  const finalValues = {
    customers: 10000,
    products: 5000,
    countries: 50,
    satisfaction: 99,
  };

  useEffect(() => {
    const animateCounters = () => {
      Object.keys(finalValues).forEach((key) => {
        gsap.to(counters, {
          [key]: finalValues[key],
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            setCounters((prev) => ({
              ...prev,
              [key]: Math.floor(counters[key]),
            }));
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      });
    };

    animateCounters();
  }, []);

  const stats = [
    {
      value: counters.customers.toLocaleString(),
      suffix: "+",
      label: "Happy Customers",
      icon: "👥",
      color: "text-blue-600",
    },
    {
      value: counters.products.toLocaleString(),
      suffix: "+",
      label: "Quality Products",
      icon: "📦",
      color: "text-green-600",
    },
    {
      value: counters.countries,
      suffix: "+",
      label: "Countries Served",
      icon: "🌍",
      color: "text-purple-600",
    },
    {
      value: counters.satisfaction,
      suffix: "%",
      label: "Satisfaction Rate",
      icon: "⭐",
      color: "text-yellow-600",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These numbers represent our commitment to excellence and the trust
            our customers place in us every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div
                className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}
              >
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Thousands of Satisfied Customers
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Experience the difference that quality and exceptional service can
              make.
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Shopping Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
