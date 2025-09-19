import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Star, StarHalf } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  rating: number;
  date: string;
  review: string;
  avatarUrl?: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  rating,
  date,
  review,
  avatarUrl,
}) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half-star"
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star
          key={`empty-star-${i}`}
          className="w-4 h-4 text-gray-300"
        />
      );
    }

    return stars;
  };

  return (
    <Card className="w-full max-w-md border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16 border-2 border-primary/20 rounded-full overflow-hidden">
          <AvatarImage 
            src={avatarUrl}
            className="object-cover w-full h-full"
            loading="lazy"
          />
          <AvatarFallback className="bg-primary/5 text-primary text-lg">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
          <div className="flex items-center gap-1 my-1">
            {renderStars(rating)}
          </div>
          <time className="text-sm text-muted-foreground font-medium">
            {new Date(date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </time>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80 leading-relaxed">{review}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;