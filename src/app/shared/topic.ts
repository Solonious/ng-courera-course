import { Comment } from "./comment";
import { Article } from "./article";

export class Topic {
  id: number;
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  description: string;
  articles?: Article[];
  comments: Comment[];
}
