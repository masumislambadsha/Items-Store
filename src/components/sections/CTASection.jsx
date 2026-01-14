"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white relative overflow-hidden"
      data-aos="fade-up"
    >
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={contentRef} className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of satisfied customers and discover amazing products
            with unbeatable quality and service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/items"
              className="bg-white text-black hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Browse Items
            </Link>
            <Link
              href="/login"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Sign Up Now
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <div className="text-2xl">🚚</div>
              <div>
                <div className="font-semibold">Free Shipping</div>
                <div className="text-sm opacity-80">On orders over $50</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="text-2xl">🔒</div>
              <div>
                <div className="font-semibold">Secure Payment</div>
                <div className="text-sm opacity-80">100% protected</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="text-2xl">↩️</div>
              <div>
                <div className="font-semibold">Easy Returns</div>
                <div className="text-sm opacity-80">30-day guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
