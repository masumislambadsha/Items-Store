"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="About ItemStore"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-400 rounded-full opacity-20"></div>
          </div>

          <div ref={contentRef} className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About ItemStore
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 2020, ItemStore has grown from a small startup to a
                trusted platform serving thousands of customers worldwide. Our
                mission is to make quality products accessible to everyone while
                providing an exceptional shopping experience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We believe in the power of technology to transform how people
                discover and purchase items they love. Our team works tirelessly
                to curate the best products and ensure every customer
                interaction exceeds expectations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-black mb-2">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-black mb-2">5K+</div>
                <div className="text-gray-600">Products</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-black mb-2">50+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-black mb-2">99%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>

            <div className="pt-6">
              <button className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
