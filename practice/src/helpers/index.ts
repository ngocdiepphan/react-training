export const validateEmail = (email: string): string | undefined => {
  if (!email) {
    return "Email is required";
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return "Email is invalid";
  }
  return undefined;
};

export const validateMinLength = (field: string, value: string, minLength: number): string | undefined => {
  if (!value || value.length < minLength) {
    return `${field} must be at least ${minLength} characters`;
  }
  return undefined;
};

export const validatePasswordMatch = (password: string, confirmPassword: string): string | undefined => {
  if (password !== confirmPassword) {
    return "Passwords do not match";
  }
  return undefined;
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
