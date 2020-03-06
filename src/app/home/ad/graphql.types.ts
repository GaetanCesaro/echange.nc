export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

export type Post = {
  id: number;
  title: string;
  description: string;
  price: number;
  owner: User;
}

export type Query = {
    findAllUsers: User[];
    findAllPosts: Post[];
}
