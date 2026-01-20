import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}