import { FAQItem, FAQCategory } from '@/types/faq';

export const faqCategories: FAQCategory[] = [
  {
    id: 'general',
    name: 'General Information',
    description: 'Basic information about our dormitory',
    icon: 'Info'
  },
  {
    id: 'payments',
    name: 'Payments & Fees',
    description: 'Information about payments, rent, and other fees',
    icon: 'DollarSign'
  },
  {
    id: 'rules',
    name: 'Rules & Policies',
    description: 'Important rules and policies to follow',
    icon: 'ScrollText'
  },
  {
    id: 'facilities',
    name: 'Facilities & Amenities',
    description: 'Information about available facilities',
    icon: 'Building'
  },
  {
    id: 'maintenance',
    name: 'Maintenance & Support',
    description: 'Help with maintenance and technical issues',
    icon: 'Wrench'
  }
];

export const faqItems: FAQItem[] = [
  // General Information
  {
    id: 'check-in',
    question: 'What is the check-in process?',
    answer: 'Check-in time is from 9 AM to 5 PM. Bring your ID, acceptance letter, and completed housing forms. Our staff will guide you through the process, hand over your keys, and show you to your room.',
    category: 'general'
  },
  {
    id: 'duration',
    question: 'What is the minimum stay duration?',
    answer: 'The minimum stay is one semester (approximately 4 months). We also offer yearly contracts for students who plan to stay longer.',
    category: 'general'
  },
  
  // Payments & Fees
  {
    id: 'payment-methods',
    question: 'What payment methods do you accept?',
    answer: 'We accept credit/debit cards, bank transfers, and online payments through our portal. All payments should be made by the 5th of each month.',
    category: 'payments'
  },
  {
    id: 'security-deposit',
    question: 'Is there a security deposit?',
    answer: "Yes, we require a security deposit equal to one month's rent. This is refundable upon check-out, subject to room condition assessment.",
    category: 'payments'
  },
  
  // Rules & Policies
  {
    id: 'visitors',
    question: 'What is the visitor policy?',
    answer: 'Visitors are allowed from 8 AM to 10 PM. They must sign in at the front desk and be accompanied by a resident at all times.',
    category: 'rules'
  },
  {
    id: 'quiet-hours',
    question: 'What are the quiet hours?',
    answer: 'Quiet hours are from 10 PM to 7 AM Sunday through Thursday, and 11 PM to 8 AM on Friday and Saturday.',
    category: 'rules'
  },
  
  // Facilities & Amenities
  {
    id: 'laundry',
    question: 'Are laundry facilities available?',
    answer: 'Yes, we have coin-operated washers and dryers on each floor. You can also use our mobile app to check machine availability and receive notifications.',
    category: 'facilities'
  },
  {
    id: 'internet',
    question: 'Is WiFi included?',
    answer: 'Yes, high-speed WiFi is included in your rent. Each room also has an Ethernet port for wired connection.',
    category: 'facilities'
  },
  
  // Maintenance & Support
  {
    id: 'maintenance-request',
    question: 'How do I submit a maintenance request?',
    answer: 'You can submit maintenance requests through our online portal or mobile app. For emergencies, please call our 24/7 maintenance hotline.',
    category: 'maintenance'
  },
  {
    id: 'emergency',
    question: 'What should I do in case of an emergency?',
    answer: 'For medical emergencies, call 911. For building-related emergencies, contact our 24/7 emergency hotline. Emergency procedures are posted in each room and common areas.',
    category: 'maintenance'
  }
];