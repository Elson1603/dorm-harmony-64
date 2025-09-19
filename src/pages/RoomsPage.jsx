import React, { useState } from "react";
import { RoomCard } from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  SlidersHorizontal, 
  Filter,
  Building2,
  Users,
  DollarSign
} from "lucide-react";

// Mock room data
const allRooms = [
  {
    id: "1",
    title: "Deluxe Single Room",
    type: "Single Occupancy",
    price: 850,
    capacity: 1,
    available: true,
    image: "/placeholder.svg",
    amenities: ["Wi-Fi", "AC", "Parking", "Study Desk"],
    rating: 4.8,
    reviews: 124,
    floor: 3,
  },
  {
    id: "2",
    title: "Twin Share Room",
    type: "Double Occupancy", 
    price: 650,
    capacity: 2,
    available: true,
    image: "/placeholder.svg",
    amenities: ["Wi-Fi", "AC", "Study Desk", "Shared Bath"],
    rating: 4.6,
    reviews: 89,
    floor: 2,
  },
  {
    id: "3",
    title: "Premium Suite",
    type: "Single with Kitchenette",
    price: 1200,
    capacity: 1,
    available: false,
    image: "/placeholder.svg",
    amenities: ["Wi-Fi", "AC", "Parking", "Kitchen", "Private Bath"],
    rating: 4.9,
    reviews: 67,
    floor: 5,
  },
  {
    id: "4",
    title: "Standard Double",
    type: "Double Occupancy",
    price: 550,
    capacity: 2,
    available: true,
    image: "/placeholder.svg",
    amenities: ["Wi-Fi", "Study Desk", "Shared Bath"],
    rating: 4.3,
    reviews: 156,
    floor: 1,
  },
  {
    id: "5",
    title: "Triple Share Room",
    type: "Triple Occupancy",
    price: 450,
    capacity: 3,
    available: true,
    image: "/placeholder.svg",
    amenities: ["Wi-Fi", "Study Desk", "Shared Bath", "Shared Kitchen"],
    rating: 4.1,
    reviews: 203,
    floor: 2,
  },
  {
    id: "6",
    title: "Executive Single",
    type: "Single Occupancy",
    price: 950,
    capacity: 1,
    available: true,
    image: "/placeholder.svg",
    amenities: ["Wi-Fi", "AC", "Parking", "Private Bath", "Balcony"],
    rating: 4.7,
    reviews: 78,
    floor: 4,
  },
];

export default function RoomsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterCapacity, setFilterCapacity] = useState("all");
  const [filterAvailability, setFilterAvailability] = useState("all");
  const [sortBy, setSortBy] = useState("price-low");
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort logic
  let filteredRooms = allRooms.filter(room => {
    const matchesSearch = room.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         room.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || room.type.includes(filterType);
    const matchesCapacity = filterCapacity === "all" || room.capacity.toString() === filterCapacity;
    const matchesAvailability = filterAvailability === "all" || 
                               (filterAvailability === "available" && room.available) ||
                               (filterAvailability === "occupied" && !room.available);
    
    return matchesSearch && matchesType && matchesCapacity && matchesAvailability;
  });

  // Sort rooms
  filteredRooms.sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "capacity":
        return a.capacity - b.capacity;
      default:
        return 0;
    }
  });

  const availableCount = filteredRooms.filter(room => room.available).length;
  const priceRange = filteredRooms.length > 0 ? {
    min: Math.min(...filteredRooms.map(r => r.price)),
    max: Math.max(...filteredRooms.map(r => r.price))
  } : { min: 0, max: 0 };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-light/10 dark:to-accent-light/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="heading-xl text-foreground mb-4">
              Find Your Perfect Room
            </h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our available dormitory rooms and find the perfect space for your academic journey
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <Card className="card-enhanced mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search rooms by name or type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 rounded-2xl"
                />
              </div>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-48 rounded-2xl">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="capacity">Capacity</SelectItem>
                </SelectContent>
              </Select>

              {/* Filter Toggle */}
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="w-full lg:w-auto rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-border animate-scale-in">
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="rounded-2xl">
                    <SelectValue placeholder="Room Type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Single">Single Occupancy</SelectItem>
                    <SelectItem value="Double">Double Occupancy</SelectItem>
                    <SelectItem value="Triple">Triple Occupancy</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterCapacity} onValueChange={setFilterCapacity}>
                  <SelectTrigger className="rounded-2xl">
                    <SelectValue placeholder="Capacity" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    <SelectItem value="all">Any Capacity</SelectItem>
                    <SelectItem value="1">1 Person</SelectItem>
                    <SelectItem value="2">2 People</SelectItem>
                    <SelectItem value="3">3 People</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterAvailability} onValueChange={setFilterAvailability}>
                  <SelectTrigger className="rounded-2xl">
                    <SelectValue placeholder="Availability" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    <SelectItem value="all">All Rooms</SelectItem>
                    <SelectItem value="available">Available Only</SelectItem>
                    <SelectItem value="occupied">Occupied Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <h2 className="heading-md text-foreground">
              {filteredRooms.length} Rooms Found
            </h2>
            <div className="flex gap-2">
              <Badge variant="outline" className="flex items-center gap-1 rounded-2xl">
                <Building2 className="h-3 w-3" />
                {availableCount} Available
              </Badge>
              {priceRange.min > 0 && (
                <Badge variant="outline" className="flex items-center gap-1 rounded-2xl">
                  <DollarSign className="h-3 w-3" />
                  ${priceRange.min} - ${priceRange.max}
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Room Grid */}
        {filteredRooms.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        ) : (
          <Card className="card-enhanced p-12 text-center">
            <CardContent className="p-0">
              <Building2 className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="heading-md text-foreground mb-2">No rooms found</h3>
              <p className="body-base text-muted-foreground mb-4">
                Try adjusting your search criteria or filters to find more rooms.
              </p>
              <Button 
                variant="outline" 
                className="rounded-2xl hover:scale-105 transition-all duration-300"
                onClick={() => {
                  setSearchTerm("");
                  setFilterType("all");
                  setFilterCapacity("all");
                  setFilterAvailability("all");
                }}
              >
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}