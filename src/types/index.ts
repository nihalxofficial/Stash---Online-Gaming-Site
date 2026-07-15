import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface HeroCardItem {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}


export interface AboutSectionProps {
  sectionTagline?: string;
  title?: string;
  description?: string;
  
  // Accept asset objects (imported directly from folder) or simple path strings
  leftFeaturedImage?: string | unknown;
  backgroundImageUrl?: string | unknown;
  
  ctaText?: string;
  ctaHref?: string;

  // Stats Configuration
  stats?: {
    value: string;
    label: string;
  }[];
}


export interface GameData {
  _id?: {
    $oid: string;
  };
  id?: string; // Standard fallback identifier 
  title: string;
  slug: string;
  thumbnail: string;
  images?: string[]; // Added to match data array screenshot payload
  description: string;
  genre: string[];
  rating: number;
  releaseDate: string;
  platform: string[];
  status: string;
  price: number;
  size: string;
  fileName?: string;
  originalName?: string;
  filePath?: string;
  owner?: {
    _id?: { $oid: string } | string;
    name?: string;
    email?: string;
    image?: string;
  };
}