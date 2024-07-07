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
