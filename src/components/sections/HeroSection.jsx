"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { gsap } from "gsap";
import Link from "next/link";
import { HeroSkeleton } from "../ui/Skeleton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    // Simulate loading time for images
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const tl = gsap.timeline();

      // Enhanced entrance animations
      tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
        .fromTo(
          titleRef.current,
          { y: 100, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          }
        )
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .fromTo(
          buttonRef.current,
          { y: 30, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );

      // Floating animation for the scroll indicator
      gsap.to(".scroll-indicator", {
        y: 10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, [isLoading]);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);

    // Animate slide content
    const tl = gsap.timeline();
    tl.fromTo(
      ".slide-content",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  };

  const slides = [
    {
      id: 1,
      title: "Discover Amazing Items",
      subtitle:
        "Explore our curated collection of premium products designed for the modern lifestyle",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Shop Now",
      gradient: "from-black/70 via-black/50 to-transparent",
    },
    {
      id: 2,
      title: "Quality You Can Trust",
      subtitle:
        "Every item is carefully selected for excellence, durability, and innovative design",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
      cta: "Learn More",
      gradient: "from-gray-900/70 via-gray-800/50 to-transparent",
    },
    {
      id: 3,
      title: "Join Our Community",
      subtitle:
        "Connect with thousands of satisfied customers and discover what makes us special",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      cta: "Get Started",
      gradient: "from-slate-900/70 via-slate-800/50 to-transparent",
    },
  ];

  if (isLoading) {
    return <HeroSkeleton />;
  }

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Background particles effect */}
      <div className="absolute inset-0 z-0">
        <div className="particles-container">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet-custom",
          bulletActiveClass: "swiper-pagination-bullet-active-custom",
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        onSlideChange={handleSlideChange}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              {/* Background Image with Parallax Effect */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-[6000ms] ease-out"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  transform:
                    currentSlide === index ? "scale(100%)" : "scale(110%)",
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}
                ></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="slide-content text-center text-white max-w-5xl mx-auto px-4">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                      Premium Collection
                    </span>
                  </div>

                  <h1
                    ref={titleRef}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  >
                    {slide.title}
                  </h1>

                  <p
                    ref={subtitleRef}
                    className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
                  >
                    {slide.subtitle}
                  </p>

                  <div
                    ref={buttonRef}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  >
                    <Link
                      href="/items"
                      className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
                    >
                      <span className="relative z-10">{slide.cta}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </Link>

                    <button className="group inline-flex items-center text-white hover:text-gray-300 transition-colors duration-300">
                      <span className="mr-2">Watch Demo</span>
                      <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-white/50 transition-colors duration-300">
                        <svg
                          className="w-5 h-5 ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="swiper-button-prev-custom absolute left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 cursor-pointer">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>

      <div className="swiper-button-next-custom absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 cursor-pointer">
        <svg
          className="w-6 h-6"
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
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 opacity-75">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="h-1 bg-white/20">
          <div
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
}
