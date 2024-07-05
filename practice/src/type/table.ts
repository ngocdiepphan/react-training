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
