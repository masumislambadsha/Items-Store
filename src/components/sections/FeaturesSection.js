"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const features = [
    {
      icon: "🛍️",
      title: "Premium Quality",
      description:
        "Every item in our collection is carefully curated for exceptional quality and durability.",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description:
        "Get your items delivered quickly with our reliable shipping partners worldwide.",
    },
    {
      icon: "💳",
      title: "Secure Payment",
      description:
        "Shop with confidence using our secure payment system with multiple payment options.",
    },
    {
      icon: "🔄",
      title: "Easy Returns",
      description:
        "Not satisfied? Return your items hassle-free within 30 days of purchase.",
    },
    {
      icon: "🎯",
      title: "Personalized",
      description:
        "Get personalized recommendations based on your preferences and shopping history.",
    },
    {
      icon: "🌟",
      title: "24/7 Support",
      description:
        "Our dedicated customer support team is available round the clock to help you.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Why Choose ItemStore?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing you with the best shopping experience
            through our exceptional features and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
