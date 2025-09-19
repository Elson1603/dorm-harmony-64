import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  DollarSign, 
  Wifi, 
  AirVent, 
  Car,
  MapPin,
  Star
} from "lucide-react";

interface Room {
  id: string;
  title: string;
  type: string;
  price: number;
  capacity: number;
  available: boolean;
  image: string;
  amenities: string[];
  rating: number;
  reviews: number;
  floor: number;
}

interface RoomCardProps {
  room: Room;
  className?: string;
}

const amenityIcons: Record<string, React.ComponentType<any>> = {
  "Wi-Fi": Wifi,
  "AC": AirVent,
  "Parking": Car,
};

export function RoomCard({ room, className }: RoomCardProps) {
  return (
    <Card className={`room-card border-border/50 overflow-hidden group ${className}`}>
      <div className="relative overflow-hidden">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <Badge variant={room.available ? "default" : "secondary"} className="bg-primary text-primary-foreground">
            {room.available ? "Available" : "Occupied"}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className="bg-background/90 text-foreground">
            Floor {room.floor}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {room.title}
            </h3>
            <p className="text-sm text-muted-foreground">{room.type}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">${room.price}</p>
            <p className="text-xs text-muted-foreground">per month</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{room.capacity} students</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-current text-accent" />
            <span>{room.rating} ({room.reviews})</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {room.amenities.slice(0, 3).map((amenity) => {
            const Icon = amenityIcons[amenity] || MapPin;
            return (
              <div key={amenity} className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Icon className="h-3 w-3" />
                <span>{amenity}</span>
              </div>
            );
          })}
          {room.amenities.length > 3 && (
            <span className="text-xs text-muted-foreground">
              +{room.amenities.length - 3} more
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-x-2">
        <Link to={`/rooms/${room.id}`} className="flex-1">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
        <Link to={`/contact?room=${room.id}`} className="flex-1">
          <Button className="btn-hero w-full">
            Inquire Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}