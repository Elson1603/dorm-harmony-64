import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Wifi, Coffee, Car, Star, Tv } from "lucide-react";

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80",
    title: "Deluxe Suite",
    desc: "Luxury redefined with a king-sized bed and city view."
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    title: "Executive Room",
    desc: "Perfect for business travelers with modern interiors."
  },
  {
    url: "https://i.pinimg.com/1200x/85/be/d1/85bed1baf8609c8c3655eeba18cfc92d.jpg",
    title: "Family Suite",
    desc: "Spacious and cozy for a memorable family stay."
  },
];

const galleryImages = [
  "https://i.pinimg.com/736x/12/57/87/125787a0286e04c04673d91ea99cf21a.jpg",
  "https://i.pinimg.com/1200x/c5/7b/3c/c57b3cd14908c90fe35547fa051b9982.jpg",
  "https://i.pinimg.com/736x/db/2a/c9/db2ac93765c57f439acb47507134e6ed.jpg",
  "https://i.pinimg.com/1200x/22/16/73/2216736e79cfa37153bf427879bb377e.jpg",
  "https://i.pinimg.com/736x/6b/3f/0e/6b3f0e03d5720ca2c82fc79a81997262.jpg",
  "https://i.pinimg.com/736x/90/3b/1a/903b1add53d5edfbf36d28e4a8d90d61.jpg",
];

const features = [
  { icon: Wifi, title: "Free Wi-Fi", desc: "Stay connected with high-speed internet." },
  { icon: Coffee, title: "Complimentary Breakfast", desc: "Start your day with a delicious meal." },
  { icon: Car, title: "Free Parking", desc: "Secure parking space for all our guests." },
  { icon: Tv, title: "Smart TV", desc: "Enjoy Netflix, Prime Video and more." },
  { icon: Star, title: "Premium Service", desc: "24/7 room service with personalized care." },
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Carousel */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        {carouselImages.map((img, index) => (
          <motion.div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {img.title}
              </motion.h2>
              <motion.p
                className="text-lg max-w-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {img.desc}
              </motion.p>
            </div>
          </motion.div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-3 rounded-full shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-3 rounded-full shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Features / Random Changes */}
      <div className="px-6 py-16 bg-white shadow-md">
      <h3 className="text-3xl font-bold text-center text-black mb-12">
  Why Choose Us?
</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg text-center"
            >
              <feat.icon className="mx-auto text-indigo-600 mb-4" size={40} />
              <h4 className="text-xl font-semibold mb-2">{feat.title}</h4>
              <p className="text-gray-600 text-sm">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Room Gallery */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">
          Explore Our Rooms
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((url, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={url}
                alt={`Room ${idx + 1}`}
                className="w-full h-60 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
