
export enum Page {
  LANDING = 'landing',
  LOGIN = 'login',
  INVENTORY = 'inventory',
  REQUESTS = 'requests',
  FINES = 'fines'
}

export enum UserRole {
  USER = 'USER',
  RENTER = 'RENTER'
}

export interface HardwareItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  status: 'Available' | 'Limited' | 'Unavailable';
  maxDuration: number;
  icon: string;
}

export interface ExchangeRequest {
  id: string;
  itemName: string;
  user: string;
  date: string;
  status: 'Pending' | 'Active' | 'Completed' | 'Rejected';
  trustScore: number;
  role: UserRole;
}
