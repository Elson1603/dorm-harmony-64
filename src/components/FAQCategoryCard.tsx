import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { FAQItem, FAQCategory } from '@/types/faq';
import { Info, DollarSign, ScrollText, Building, Wrench } from 'lucide-react';

const iconMap = {
  Info,
  DollarSign,
  ScrollText,
  Building,
  Wrench,
};

interface FAQCategoryProps {
  category: FAQCategory;
  items: FAQItem[];
}

export const FAQCategoryCard: React.FC<FAQCategoryProps> = ({ category, items }) => {
  const IconComponent = iconMap[category.icon as keyof typeof iconMap];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {IconComponent && <IconComponent className="h-5 w-5" />}
          <span>{category.name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FAQCategoryCard;