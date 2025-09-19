import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";

// Sample HD room images (you can replace with your own)
const featuredRooms = [
  { src: "https://source.unsplash.com/800x500/?dorm,room", type: "Deluxe Single Room", text: "Comfort & Privacy" },
  { src: "https://source.unsplash.com/800x500/?student,room", type: "Twin Share Room", text: "Affordable & Spacious" },
  { src: "https://source.unsplash.com/800x500/?study,room", type: "Suite Room", text: "Premium Living" },
];

const roomTypes = [
  { src: "https://source.unsplash.com/400x300/?dorm,single", name: "Single Room" },
  { src: "https://source.unsplash.com/400x300/?dorm,double", name: "Double Room" },
  { src: "https://source.unsplash.com/400x300/?dorm,suite", name: "Suite Room" },
  { src: "https://source.unsplash.com/400x300/?dorm,shared", name: "Shared Room" },
];

const commonAreas = [
  { src: "https://source.unsplash.com/400x300/?cafeteria", name: "Cafeteria" },
  { src: "https://source.unsplash.com/400x300/?gym", name: "Gym" },
  { src: "https://source.unsplash.com/400x300/?library", name: "Study Lounge" },
  { src: "https://source.unsplash.com/400x300/?lounge", name: "Common Lounge" },
];

export default function Gallery(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {/* Featured Carousel */}
      <div className="max-w-6xl mx-auto mb-12 relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          className="rounded-xl overflow-hidden shadow-xl"
        >
          {featuredRooms.map((room, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative">
                <img src={room.src} alt={room.type} className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-4">
                  <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-bold mb-2"
                  >
                    {room.type}
                  </motion.h2>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg"
                  >
                    {room.text}
                  </motion.p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Room Types */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Our Room Types</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {roomTypes.map((room, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img src={room.src} alt={room.name} className="w-full h-60 object-cover" />
              <div className="bg-white p-3 text-center font-medium">{room.name}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Common Areas */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Common Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {commonAreas.map((area, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img src={area.src} alt={area.name} className="w-full h-60 object-cover" />
              <div className="bg-white p-3 text-center font-medium">{area.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
