import React from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

interface FAQSearchProps {
  onSearch: (query: string) => void;
}

export const FAQSearch: React.FC<FAQSearchProps> = ({ onSearch }) => {
  return (
    <div className="relative w-full max-w-md mx-auto mb-8">
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
      <Input
        placeholder="Search FAQs..."
        className="pl-10"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default FAQSearch;