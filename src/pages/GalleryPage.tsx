import React, { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, Tabs      <Dialog open={!!selectedImage} onOpenChange={() => {
        setSelectedImage(null);
        setZoomLevel(1);
        setRotation(0);
      }}>
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedImage?.title}
              <Badge variant="outline" className="ml-2">Interactive View</Badge>
            </DialogTitle>
            <DialogDescription>
              {selectedImage?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 relative bg-muted rounded-lg overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
              {selectedImage && (
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="object-contain w-full h-full transition-all duration-300"
                  style={{
                    transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                    transformOrigin: 'center',
                  }}
                />
              )}
            </div>
            
            {/* Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full p-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setZoomLevel(Math.max(1, zoomLevel - 0.2))}
                className="rounded-full"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setZoomLevel(Math.min(3, zoomLevel + 0.2))}
                className="rounded-full"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <div className="w-px h-6 bg-border mx-2" />
              <Button
                variant="outline"
                size="icon"
                onClick={() => setRotation((prev) => prev - 90)}
                className="rounded-full"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setRotation((prev) => prev + 90)}
                className="rounded-full"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  setRotation(0);
                  setZoomLevel(1);
                }}
                className="rounded-full"
              >
                <RotateCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Camera,
  Image as ImageIcon,
  ZoomIn,
  ZoomOut,
  RotateCw,
  ArrowLeft,
  ArrowRight,
  Info
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

// Mock data - Replace with actual images later
const galleryData = {
  rooms: [
    {
      id: 1,
      title: "Deluxe Single Room",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop",
      category: "rooms"
    },
    {
      id: 2,
      title: "Twin Share Room",
      image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?w=800&auto=format&fit=crop",
      category: "rooms"
    },
    {
      id: 3,
      title: "Premium Suite",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
      category: "rooms"
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
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
    description?: string;
  } | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D card effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const centerX = width / 2;
      const centerY = height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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
                <Carousel className="w-full">
                  <CarouselContent>
                    {images.map((item) => (
                      <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                        <div 
                          className="relative aspect-video cursor-pointer overflow-hidden rounded-lg"
                          onClick={() => setSelectedImage({ image: item.image, title: item.title })}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="object-cover w-full h-full transition-transform hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                            <h4 className="text-white text-xl font-semibold">{item.title}</h4>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex" />
                  <CarouselNext className="hidden md:flex" />
                </Carousel>
              </div>

              {/* Grid Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((item) => (
                  <Card
                    key={item.id}
                    className="relative overflow-hidden rounded-lg bg-muted hover:shadow-xl transition-all duration-300 flex flex-col"
                    ref={cardRef}
                    style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s' }}
                  >
                    <div className="relative aspect-[4/3]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <h4 className="text-lg font-semibold mb-1 text-foreground">{item.title}</h4>
                      <div className="flex gap-2 mb-2">
                        <Badge variant="outline" className="bg-primary/20 text-primary capitalize">
                          {item.category}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => {
                            setSelectedImage({
                              image: item.image,
                              title: item.title,
                              description: "Explore this space in detail. Use the controls to zoom and rotate the image."
                            });
                            toast({
                              title: "Image Viewer Opened",
                              description: "Use the controls below to interact with the image",
                            });
                          }}
                          className="bg-primary/90 text-white hover:bg-primary"
                        >
                          <ZoomIn className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary text-primary hover:bg-primary/10"
                          onClick={() => setShowInfo(!showInfo)}
                        >
                          <Info className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Image Preview Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle>{selectedImage?.title}</DialogTitle>
            <DialogDescription>
              Use arrow keys or click the navigation buttons to browse images
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 relative aspect-video bg-muted rounded-lg overflow-hidden">
            {selectedImage && (
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="object-contain w-full h-full transition-opacity"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryPage;