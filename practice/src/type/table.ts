export interface TableColumn<T> {
  key: keyof T;
  header: string;
}

export interface Props<T> {
  columns: TableColumn<T>[];
  data: T[];
  onRowClick: (rowData: T) => void;
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
  createdAt: Date | string;
  ratings: number;
  description: string;
}

export const recipeColumns: TableColumn<RecipeRow>[] = [
  { key: "img", header: "Image" },
  { key: "name", header: "Name" },
  { key: "category", header: "Category" },
  { key: "creator", header: "Creator" },
  { key: "createdAt", header: "CreatedAt" },
  { key: "ratings", header: "Rating" },
  { key: "description", header: "Description" },
];

export const userColumns: TableColumn<UserRow>[] = [
  { key: "img", header: "Image" },
  { key: "username", header: "Full Name" },
  { key: "email", header: "Email" },
];
