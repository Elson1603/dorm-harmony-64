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
          name: "Neel Pawasker",
          rating: 5,
          date: "2025-09-15",
          review: "Best decision I made! The dorm's study lounges are perfect for group work, and the 24/7 security makes me feel completely safe. The staff goes above and beyond to help with any issues.",
          avatarUrl: "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.jpg?s=612x612&w=0&k=20&c=CncNUTbw6mzGsbojks2Vt0kV85N_pQaI3zaSkBQJFTc="
        },
        {
          id: '2',
          name: "Ralph Lopes",
          rating: 4.5,
          date: "2025-09-12",
          review: "Really impressed with the modern amenities and community events. The gym and game room are great stress relievers. Just wish the laundry room had more machines for peak times.",
          avatarUrl: "https://plus.unsplash.com/premium_photo-1682089787056-9ac0c78a2ac2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
        },
        {
          id: '3',
          name: "Ashley Almeida",
          rating: 5,
          date: "2025-09-08",
          review: "The weekly social events have helped me make amazing friends! The common areas are always clean, and maintenance requests are handled within 24 hours. Couldn't ask for better!",
          avatarUrl: "https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.jpg?s=612x612&w=0&k=20&c=Dw1nKFtnU_Bfm2I3OPQxBmSKe9NtSzux6bHqa9lVZ7A="
        },
        {
          id: '4',
          name: "Aditya Sharma",
          rating: 4.5,
          date: "2025-09-05",
          review: "Great location near campus and local restaurants. The high-speed internet is perfect for online classes. Room layouts are well-designed and the soundproofing is excellent.",
          avatarUrl: "https://www.shutterstock.com/image-photo/closeup-portrait-young-smiling-hispanic-260nw-2327799157.jpg"
        },
        {
          id: '5',
          name: "Jason Gonsalves",
          rating: 5,
          date: "2025-09-02",
          review: "The kitchen facilities are top-notch! Love the monthly cooking workshops. The staff remembers everyone's name and really creates a home-like atmosphere.",
          avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvkjE6bwJIwsuMinHwT0fnvy3MyQwfWaY7wkJLgfsLVfmQKXtvpJJOuhY&s"
        },
        {
          id: '6',
          name: "Priya Deshmukh",
          rating: 4,
          date: "2025-08-28",
          review: "Reasonable pricing for the amenities provided. The study rooms with whiteboards are perfect for group projects. Would love to see more bike storage options though.",
          avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRas1gz_j8EdXn5SUy6NsKfOYpHyxEdaxyGw-9DtNAkdjwgZtxwEdx5AI4&s"
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