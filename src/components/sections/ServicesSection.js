"use client";

export default function ServicesSection() {
  const services = [
    {
      title: "Personal Shopping",
      description:
        "Get personalized recommendations from our expert team based on your style and preferences.",
      icon: "👤",
      features: [
        "Style consultation",
        "Personal shopper",
        "Custom recommendations",
      ],
    },
    {
      title: "Express Delivery",
      description:
        "Need it fast? Our express delivery service gets your items to you in record time.",
      icon: "⚡",
      features: ["Same-day delivery", "Express shipping", "Real-time tracking"],
    },
    {
      title: "Gift Wrapping",
      description:
        "Make your gifts special with our premium gift wrapping and personalized messages.",
      icon: "🎁",
      features: ["Premium wrapping", "Custom messages", "Special occasions"],
    },
    {
      title: "VIP Membership",
      description:
        "Join our VIP program for exclusive access to new products and special discounts.",
      icon: "👑",
      features: ["Early access", "Exclusive discounts", "Priority support"],
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-primary-50 to-blue-50"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We go beyond just selling products. Discover our premium services
            designed to enhance your shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <svg
                          className="w-4 h-4 text-primary-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
}
