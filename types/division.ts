export type Division = {
    id: string;
    name: string;
    year: number;
    specialization: string;
    machines: string[];
    dailyCapacity: string;
    location: string;
    category: 'preforms' | 'closures' | 'blowing' | 'beverages';
  };
  
  export type Industry = {
    id: string;
    name: string;
    description: string;
    products: string[];
    image: string;
    clients?: string[];
  };
  
  export type TimelineItem = {
    year: number;
    name: string;
    description: string;
    capacity?: string;
  };