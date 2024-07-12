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
