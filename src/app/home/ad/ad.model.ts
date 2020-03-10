export interface Ad {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  owner: User;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

export type Query = {
  findAllUsers: User[];
  findAllAds: Ad[];
}