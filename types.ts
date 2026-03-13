import React from 'react';

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight: boolean;
  cta: string;
}

export interface FeatureBlock {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  size: 'small' | 'large' | 'tall';
  gradient: string;
}

export interface TechCost {
  label: string;
  defaultCost: number;
}