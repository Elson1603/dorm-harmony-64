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
          name: "John Doe",
          rating: 5,
          date: "2025-09-15",
          review: "Amazing dormitory experience! The facilities are top-notch and the staff is incredibly helpful.",
          avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=John%20Doe&background=%23ffffff`
        },
        {
          id: '2',
          name: "Jane Smith",
          rating: 4.5,
          date: "2025-09-10",
          review: "Great community atmosphere and well-maintained rooms. Could improve the WiFi speed though.",
          avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=Jane%20Smith&background=%23ffffff`
        },
        {
          id: '3',
          name: "Mike Johnson",
          rating: 5,
          date: "2025-09-05",
          review: "The security measures and cleanliness standards are excellent. Highly recommend!",
          avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=Mike%20Johnson&background=%23ffffff`
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