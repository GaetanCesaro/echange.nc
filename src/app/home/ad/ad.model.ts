export interface Ad {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
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