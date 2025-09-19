import { Review } from '@/types/review';

const STORAGE_KEY = 'dorm-reviews';

export const ReviewsService = {
  getReviews: (): Review[] => {
    const storedReviews = localStorage.getItem(STORAGE_KEY);
    if (!storedReviews) {
      // Initialize with sample reviews if none exist
      const initialReviews: Review[] = [
        {
          id: '1',
          name: "Emily Parker",
          rating: 5,
          date: "2025-09-15",
          review: "Best decision I made! The dorm's study lounges are perfect for group work, and the 24/7 security makes me feel completely safe. The staff goes above and beyond to help with any issues.",
          avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
        },
        {
          id: '2',
          name: "David Chen",
          rating: 4.5,
          date: "2025-09-12",
          review: "Really impressed with the modern amenities and community events. The gym and game room are great stress relievers. Just wish the laundry room had more machines for peak times.",
          avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
        },
        {
          id: '3',
          name: "Sarah Thompson",
          rating: 5,
          date: "2025-09-08",
          review: "The weekly social events have helped me make amazing friends! The common areas are always clean, and maintenance requests are handled within 24 hours. Couldn't ask for better!",
          avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
        },
        {
          id: '4',
          name: "Marcus Rodriguez",
          rating: 4.5,
          date: "2025-09-05",
          review: "Great location near campus and local restaurants. The high-speed internet is perfect for online classes. Room layouts are well-designed and the soundproofing is excellent.",
          avatarUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=100&h=100"
        },
        {
          id: '5',
          name: "Sophia Kim",
          rating: 5,
          date: "2025-09-02",
          review: "The kitchen facilities are top-notch! Love the monthly cooking workshops. The staff remembers everyone's name and really creates a home-like atmosphere.",
          avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100"
        },
        {
          id: '6',
          name: "Alex Foster",
          rating: 4,
          date: "2025-08-28",
          review: "Reasonable pricing for the amenities provided. The study rooms with whiteboards are perfect for group projects. Would love to see more bike storage options though.",
          avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100"
        }
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialReviews));
      return initialReviews;
    }
    return JSON.parse(storedReviews);
  },

  generateAvatarUrl: (name: string) => {
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}&background=%23ffffff`;
  },

  addReview: (review: Omit<Review, 'id' | 'date'>): Review => {
    const reviews = ReviewsService.getReviews();
    const newReview: Review = {
      ...review,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      avatarUrl: ReviewsService.generateAvatarUrl(review.name)
    };
    
    const updatedReviews = [newReview, ...reviews];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedReviews));
    return newReview;
  },

  deleteReview: (id: string): void => {
    const reviews = ReviewsService.getReviews();
    const updatedReviews = reviews.filter(review => review.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedReviews));
  },
};