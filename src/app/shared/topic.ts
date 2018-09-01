import { Comment } from "./comment";

export class Topic {
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  description: string;
  comments: Comment[];
}
