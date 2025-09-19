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
import { cn } from "@/lib/utils";

const amenityIcons = {
  "Wi-Fi": Wifi,
  "AC": AirVent,
  "Parking": Car,
};

export function RoomCard({ room, className }) {
  return (
    <Card className={`room-card group ${className}`}>
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <Badge 
            variant={room.available ? "default" : "secondary"} 
            className={cn(
              "rounded-2xl shadow-lg transition-all duration-300 hover:scale-105",
              room.available 
                ? "bg-primary text-primary-foreground shadow-primary/25" 
                : "bg-secondary text-secondary-foreground"
            )}
          >
            {room.available ? "Available" : "Occupied"}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className="bg-background/90 text-foreground rounded-2xl shadow-lg">
            Floor {room.floor}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="heading-md group-hover:text-primary transition-colors duration-300">
              {room.title}
            </h3>
            <p className="body-base text-muted-foreground">{room.type}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-primary">${room.price}</p>
            <p className="text-sm text-muted-foreground">per month</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 body-base text-muted-foreground mb-4">
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
              <div key={amenity} className="flex items-center space-x-1 text-sm text-muted-foreground bg-muted rounded-2xl px-3 py-1">
                <Icon className="h-3 w-3" />
                <span>{amenity}</span>
              </div>
            );
          })}
          {room.amenities.length > 3 && (
            <span className="text-sm text-muted-foreground bg-muted rounded-2xl px-3 py-1">
              +{room.amenities.length - 3} more
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 space-x-2">
        <Link to={`/rooms/${room.id}`} className="flex-1">
          <Button variant="outline" className="w-full rounded-2xl hover:scale-105 transition-all duration-300">
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