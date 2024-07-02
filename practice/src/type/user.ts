export interface UserProps {
  id: number;
  name: string;
  password: string;
  role: "admin" | "user";
  isLoggedIn?: boolean;
}
