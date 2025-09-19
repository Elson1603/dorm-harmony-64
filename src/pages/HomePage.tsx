import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RoomCard } from "@/components/RoomCard";
import "@/styles/gradient.css";
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
// If you want to use the new building image, place it in assets and import as:
// import heroBg from "@/assets/your-building-image.jpg";
import deluxeRoomImage from "@/assets/Deluxe-Single-thumb.jpg";



// Mock data for featured rooms
const featuredRooms = [
  {
    id: "1",
    title: "Deluxe Single Room",
    type: "Single Occupancy",
    price: 850,
    capacity: 1,
    available: true,
    image: "https://i.pinimg.com/736x/31/07/56/3107562a18e538b6c91900980a0455bf.jpg",
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
    image: "https://i.pinimg.com/736x/de/17/c2/de17c217ce90ea7ecb1f23b98f24087c.jpg",
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
    image: "https://i.pinimg.com/736x/49/b8/da/49b8da5a068eebcb772f6964ee019cf1.jpg",
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
    name: "Sarah Chen",
    role: "Computer Science, Senior",
    content: "Living at CampusView has been incredible! The community is so welcoming, and the study rooms are perfect for group projects. Plus, being able to walk to campus in 5 minutes is a game-changer.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    initials: null
  },
  {
    name: "Marcus Johnson",
    role: "Business Administration, Junior",
    content: "The amenities here are top-notch. The gym is always clean, WiFi is super fast, and the common areas are great for meeting new people. I've made lifelong friends here!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    initials: null
  },
  {
    name: "Emma Rodriguez",
    role: "Psychology, Sophomore",
    content: "The staff is so responsive and helpful. When I had an issue with my room, it was fixed the same day! The location is perfect for both campus and downtown activities.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    initials: null
  },
  {
    name: "David Park",
    role: "Engineering, Graduate Student",
    content: "As a grad student, I appreciate the quiet study environments and the mix of undergrad and graduate residents. The premium suites are worth every penny for the extra space and kitchen.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    initials: null
  },
];

function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - matches provided image */}
      <section className="relative h-[700px] flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white text-center drop-shadow-lg">
          Your Home Away From <span className="bg-gradient-to-r from-blue-300 to-orange-300 bg-clip-text text-transparent">Home</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 text-center max-w-2xl mx-auto drop-shadow">
            Experience comfortable, modern living at CampusView Dormitories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/rooms">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 shadow-lg">
             Explore Rooms <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-white/20 border border-white/60 text-white hover:bg-white/30 hover:text-white text-lg px-8 py-3 shadow-lg backdrop-blur">
              Take Virtual Tour
            </Button>
          </div>
          {/* Glassmorphic Feature Cards */}
          <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl justify-center items-center">
            <div className="flex-1 min-w-[260px] bg-white/20 backdrop-blur rounded-2xl p-6 flex flex-col items-center shadow-lg border border-white/30">
              <MapPin className="text-orange-400 mb-2" size={32} />
              <div className="font-bold text-lg text-white mb-1">Prime Location</div>
              <div className="text-white/90 text-center text-sm">5 minutes walk to campus and city center</div>
            </div>
            <div className="flex-1 min-w-[260px] bg-white/20 backdrop-blur rounded-2xl p-6 flex flex-col items-center shadow-lg border border-white/30">
              <Users className="text-blue-300 mb-2" size={32} />
              <div className="font-bold text-lg text-white mb-1">Community Living</div>
              <div className="text-white/90 text-center text-sm">Join 500+ students in our vibrant community</div>
            </div>
            <div className="flex-1 min-w-[260px] bg-white/20 backdrop-blur rounded-2xl p-6 flex flex-col items-center shadow-lg border border-white/30">
              <Wifi className="text-green-400 mb-2" size={32} />
              <div className="font-bold text-lg text-white mb-1">Modern Amenities</div>
              <div className="text-white/90 text-center text-sm">High-speed WiFi, gym, study rooms & more</div>
            </div>
          </div>
        </div>
      </section>

      {/* ...existing code... (other sections remain below hero) */}

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
                <Card 
                  key={index} 
                  className="group relative overflow-hidden backdrop-blur-sm bg-gradient-to-br from-card/50 via-card to-primary/5 hover:from-primary/10 hover:to-primary/5 border border-border/50 transition-all duration-300 dark:shadow-lg dark:shadow-primary/5"
                >
                  <CardContent className="p-8 relative z-10">
                    <div className="mb-6 p-4 rounded-xl bg-primary/10 w-fit mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground/90 text-center leading-relaxed">{feature.description}</p>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-border/30 p-6 flex flex-col justify-between h-full">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    {testimonial.avatar ? (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-blue-400"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold text-primary border-2 border-primary">
                        {testimonial.initials}
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-foreground text-lg">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-orange-400 fill-current' : 'text-muted-foreground'}`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic flex-1">"{testimonial.content}"</p>
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
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-primary hover:bg-gray-100">
                <Clock className="mr-2 h-5 w-5" />
                Schedule Tour
              </Button>
            </Link>
            <Link to="/rooms">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-white text-primary ">
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

export default HomePage;
