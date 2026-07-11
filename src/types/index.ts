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