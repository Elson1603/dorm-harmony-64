import React, { useState, useMemo } from 'react';
import { HelpCircle } from 'lucide-react';
import FAQSearch from '@/components/FAQSearch';
import FAQCategoryCard from '@/components/FAQCategoryCard';
import { faqCategories, faqItems } from '@/data/faq-data';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = useMemo(() => {
    if (!searchQuery.trim()) {
      return faqItems;
    }

    const query = searchQuery.toLowerCase();
    return faqItems.filter(
      (item) =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const categorizedFAQs = useMemo(() => {
    return faqCategories.map((category) => ({
      ...category,
      items: filteredFAQs.filter((item) => item.category === category.id),
    }));
  }, [filteredFAQs]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <HelpCircle className="w-16 h-16 mx-auto mb-4 text-primary" />
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Find answers to common questions about our dormitory
        </p>
        
        <FAQSearch onSearch={setSearchQuery} />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {categorizedFAQs.map((category) => (
          category.items.length > 0 && (
            <FAQCategoryCard
              key={category.id}
              category={category}
              items={category.items}
            />
          )
        ))}
      </div>

      {filteredFAQs.length === 0 && (
        <div className="text-center py-8">
          <p className="text-xl text-muted-foreground">
            No FAQs found matching your search. Try different keywords or browse all categories.
          </p>
        </div>
      )}
    </div>
  );
}