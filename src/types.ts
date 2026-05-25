/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PropertyCategory = 'residential' | 'commercial' | 'industrial';

export interface Property {
  id: string;
  title: string;
  category: PropertyCategory;
  price: string;
  location: string;
  beds?: number;
  baths?: number;
  sqft: string;
  image: string;
  features: string[];
  tag: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: PropertyCategory;
  location: string;
  status: 'Completed' | 'Active Advisory' | 'New Launch';
  year: number;
  description: string;
  image: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  features: string[];
}

export interface ConsultationRequest {
  name: string;
  phone: string;
  email: string;
  requirement: string;
  budget: string;
  message: string;
}
