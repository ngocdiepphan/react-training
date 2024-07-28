export const FORM_MODAL = [
  { label: "Image", type: "text", id: "img", name: "img" },
  { label: "Name", type: "text", id: "name", name: "name" },
  { label: "Creator", type: "text", id: "creator", name: "creator" },
  { label: "Creation Date", type: "date", id: "createdAt", name: "createdAt"},
  { label: "Description", type: "text", id: "description", name: "description"},
];

export const NAV_BAR_LIST = [
  {
    title: "User",
    type: "user",
    icon: "user-item",
    className: "bg-user-item",
  },
  {
    title: "Recipes",
    type: "recipe",
    icon: "recipe-item",
    className: "bg-recipe-item",
  },
];

export const CATEGORY = [
  { title: "Super Delicious", id: "delicious-recipes", collection: 4 },
  { title: "Sweet Tooth", id: "sweet-recipes", collection: 3 },
];

export const FORM_SIGN_UP = [
  {
    label: "Email",
    type: "text",
    id: "email",
    name: "email",
    variant: "primary",
  },
  {
    label: "Username",
    type: "text",
    id: "username",
    name: "username",
    variant: "primary",
  },
  {
    label: "Password",
    type: "password",
    id: "password",
    name: "password",
    variant: "primary",
  },
  {
    label: "Confirm Password",
    type: "password",
    id: "confirmPassword",
    name: "confirmPassword",
    variant: "primary",
  },
];
