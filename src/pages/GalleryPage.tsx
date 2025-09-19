import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Camera, Image as ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Mock data with enhanced details
const galleryData = {
  rooms: [
    {
      id: 1,
      title: "Deluxe Single Room",
      description: "Spacious and modern single occupancy room with premium amenities",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop",
      category: "rooms",
      features: ["Air Conditioning", "Study Desk", "Private Bathroom"],
      size: "200 sq ft",
      views: ["City View", "Garden View"],
      images: [
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Twin Share Room",
      description: "Comfortable shared room perfect for collaborative living",
      image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?w=800&auto=format&fit=crop",
      category: "rooms",
      features: ["Two Study Desks", "Shared Bathroom", "Large Windows"],
      size: "300 sq ft",
      views: ["Campus View"],
      images: [
        "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Premium Suite",
      description: "Luxury accommodation with exclusive amenities",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
      category: "rooms",
      features: ["Kitchenette", "Private Balcony", "En-suite Bathroom"],
      size: "400 sq ft",
      views: ["Panoramic City View", "Mountain View"],
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?w=800&auto=format&fit=crop"
      ]
    }
  ],
  common: [
    {
      id: 4,
      title: "Study Lounge",
      image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=800&auto=format&fit=crop",
      category: "common"
    },
    {
      id: 5,
      title: "Recreation Room",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop",
      category: "common"
    },
    {
      id: 6,
      title: "Dining Area",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
      category: "common"
    }
  ],
  facilities: [
    {
      id: 7,
      title: "Gym",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop",
      category: "facilities"
    },
    {
      id: 8,
      title: "Laundry Room",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&auto=format&fit=crop",
      category: "facilities"
    },
    {
      id: 9,
      title: "Parking Area",
      image: "https://images.unsplash.com/photo-1609620348316-a624d345b6b5?w=800&auto=format&fit=crop",
      category: "facilities"
    }
  ]
};

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
    description?: string;
    features?: string[];
    size?: string;
    views?: string[];
    images?: string[];
    currentImageIndex?: number;
  } | null>(null);
  
  const [isLoading, setIsLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("rooms");
  const [currentView, setCurrentView] = useState<"grid" | "slideshow">("grid");
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    rtl: false,
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.2, spacing: 32 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-light to-accent-light py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Camera className="w-16 h-16 mx-auto mb-4 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Photo <span className="gradient-word animate-gradient">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Explore our stunning dormitory spaces through our immersive photo gallery.
              Get a glimpse of your future home away from home.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="rooms" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="rooms">Rooms</TabsTrigger>
            <TabsTrigger value="common">Common Areas</TabsTrigger>
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
          </TabsList>

          {Object.entries(galleryData).map(([category, images]) => (
            <TabsContent key={category} value={category} className="mt-0">
              {/* Featured Carousel */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6">Featured {category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <motion.div
                  className="keen-slider h-[400px] rounded-xl overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {images.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      className="keen-slider__slide relative cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setSelectedImage({ ...item, currentImageIndex: 0 })}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                        <h4 className="text-white text-xl font-semibold">{item.title}</h4>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Grid Gallery */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {images.map((item) => (
                  <motion.div
                    key={item.id}
                    className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-muted"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/60 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => setSelectedImage({ ...item, currentImageIndex: 0 })}
                        className="text-white scale-90 hover:scale-100 transition-transform"
                      >
                        <ImageIcon className="mr-2 h-4 w-4" />
                        View Larger
                      </Button>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Image Preview Dialog */}
      <Dialog 
        open={!!selectedImage} 
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-7xl w-full mx-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span className="text-2xl">{selectedImage?.title}</span>
              <div className="flex items-center gap-2">
                {selectedImage?.size && (
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {selectedImage.size}
                  </span>
                )}
                {selectedImage?.views?.map((view, idx) => (
                  <span 
                    key={idx}
                    className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full"
                  >
                    {view}
                  </span>
                ))}
              </div>
            </DialogTitle>
            <DialogDescription>
              {selectedImage?.description}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 space-y-4">
            {/* Main Image */}
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden group">
              <AnimatePresence mode="wait">
                {selectedImage && (
                  <motion.img
                    key={selectedImage.images?.[selectedImage.currentImageIndex || 0] || selectedImage.image}
                    src={selectedImage.images?.[selectedImage.currentImageIndex || 0] || selectedImage.image}
                    alt={selectedImage.title}
                    className="object-contain w-full h-full"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>

              {/* Navigation Controls */}
              {selectedImage?.images && selectedImage.images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-background/80 backdrop-blur-sm"
                    onClick={() => {
                      if (selectedImage.currentImageIndex === undefined) return;
                      const newIndex = selectedImage.currentImageIndex === 0 
                        ? selectedImage.images!.length - 1 
                        : selectedImage.currentImageIndex - 1;
                      setSelectedImage({
                        ...selectedImage,
                        currentImageIndex: newIndex
                      });
                    }}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-background/80 backdrop-blur-sm"
                    onClick={() => {
                      if (selectedImage.currentImageIndex === undefined) return;
                      const newIndex = (selectedImage.currentImageIndex + 1) % selectedImage.images!.length;
                      setSelectedImage({
                        ...selectedImage,
                        currentImageIndex: newIndex
                      });
                    }}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {selectedImage?.images && selectedImage.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {selectedImage.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`relative rounded-lg overflow-hidden flex-shrink-0 w-24 h-16 ${
                      selectedImage.currentImageIndex === idx ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedImage({
                      ...selectedImage,
                      currentImageIndex: idx
                    })}
                  >
                    <img
                      src={img}
                      alt={`${selectedImage.title} view ${idx + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Features */}
            {selectedImage?.features && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {selectedImage.features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 p-3 rounded-lg bg-muted"
                  >
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryPage;