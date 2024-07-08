export interface TableColumn<T> {
  key: keyof T;
  header: string;
}

export interface Props<T> {
  columns: TableColumn<T>[];
  data: T[];
}

export interface UserRow {
  email: string;
  username: string;
  img: string;
}

export interface RecipeRow {
  img: string;
  name: string;
  category: string;
  creator: string;
  createdAt: number;
  ratings: number;
  description: string;
}

export const recipeColumns: TableColumn<RecipeRow>[] = [
  { key: "img", header: "Image" },
  { key: "name", header: "Name" },
  { key: "category", header: "Category" },
  { key: "creator", header: "Creator" },
  { key: "createdAt", header: "Created At" },
  { key: "ratings", header: "Ratings" },
  { key: "description", header: "Description" },
];

export const userColumns: TableColumn<UserRow>[] = [
  { key: "img", header: "Image" },
  { key: "username", header: "Full Name" },
  { key: "email", header: "Email" },
];

import { user } from "mocks/user";
import { recipe } from "mocks/recipe";

export const selectedUser: UserRow = {
  email: user[0].email,
  username: user[0].username,
  img: user[0].img,
};

export const selectedRecipe: RecipeRow = {
  img: recipe[0].img,
  name: recipe[0].name,
  category: recipe[0].category,
  creator: recipe[0].creator,
  createdAt: recipe[0].createdAt,
  ratings: recipe[0].ratings,
  description: recipe[0].description,
};
