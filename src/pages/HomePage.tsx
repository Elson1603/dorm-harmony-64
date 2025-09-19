import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RoomCard } from "@/components/RoomCard";
import { 
  Building2, 
  Users, 
  Shield, 
  Wifi,
  Car,
  Utensils,
  Dumbbell,
  ArrowRight,
  Star,
  MapPin,
  Clock
} from "lucide-react";
import heroImage from "@/assets/hero-dormitory.jpg";

// Mock data for featured rooms
const featuredRooms = [
  {
    id: "1",
    title: "Deluxe Single Room",
    type: "Single Occupancy",
    price: 850,
    capacity: 1,
    available: true,
    image: "/dorm-harmony-64/public/Deluxe-Single-thumb.jpg",
    amenities: ["Wi-Fi", "AC", "Parking"],
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
    amenities: ["Wi-Fi", "AC", "Study Desk"],
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
    amenities: ["Wi-Fi", "AC", "Parking", "Kitchen"],
    rating: 4.9,
    reviews: 67,
    floor: 5,
  },
];

const features = [
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Round-the-clock security with keycard access and CCTV monitoring"
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Complimentary fiber-optic internet in all rooms and common areas"
  },
  {
    icon: Utensils,
    title: "Dining Facilities",
    description: "Modern cafeteria with diverse meal options and dietary accommodations"
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "Fully equipped gym with modern equipment and wellness programs"
  },
  {
    icon: Car,
    title: "Parking Available",
    description: "Secure parking spaces available for residents with vehicles"
  },
  {
    icon: Users,
    title: "Community Spaces",
    description: "Study lounges, recreation rooms, and social areas for student interaction"
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Computer Science Student",
    content: "Living here has been amazing! The facilities are top-notch and the community is very welcoming.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Administration",
    content: "Great location, clean rooms, and excellent support staff. Highly recommend to any student.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Pre-Med Student",
    content: "The study spaces and quiet environment really help with my studies. Perfect for academic focus.",
    rating: 4,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Your Home Away From Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-up">
            Modern, comfortable, and affordable dormitory living for students. 
            Experience community, convenience, and academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
            <Link to="/rooms">
              <Button size="lg" className="btn-hero text-lg px-8 py-3">
                Explore Rooms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                Schedule Tour
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-primary-light/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Residents</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">120</div>
              <div className="text-muted-foreground">Available Rooms</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.8</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-gradient">DormHub</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need for a comfortable and successful academic journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="feature-card border-0 p-6 text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Rooms</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular room types and find your perfect living space
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/rooms">
              <Button size="lg" className="btn-hero">
                View All Rooms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Students Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from our dormitory community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50 p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-accent fill-current' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make DormHub Your Home?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join hundreds of students who have chosen DormHub for their academic journey. 
            Secure your spot today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                <Clock className="mr-2 h-5 w-5" />
                Schedule Tour
              </Button>
            </Link>
            <Link to="/rooms">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                <Building2 className="mr-2 h-5 w-5" />
                Browse Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}