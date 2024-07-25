/**
 * Validate the email format.
 *
 * @param email - The email string to validate.
 * @returns An error message if the email is invalid, otherwise undefined.
 */
export const validateEmail = (email: string): string | undefined => {
  if (!email) {
    return "Email is required";
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return "Email is invalid";
  }
  return undefined;
};

/**
 * Validate that a string meets a minimum length requirement.
 *
 * @param field - The name of the field being validated.
 * @param value - The string value to validate.
 * @param minLength - The minimum length required.
 * @returns An error message if the value is too short, otherwise undefined.
 */
export const validateMinLength = (
  field: string,
  value: string,
  minLength: number,
): string | undefined => {
  if (!value || value.length < minLength) {
    return `${field} must be at least ${minLength} characters`;
  }
  return undefined;
};

/**
 * Validate that two password strings match.
 *
 * @param password - The original password string.
 * @param confirmPassword - The confirmation password string.
 * @returns An error message if the passwords do not match, otherwise undefined.
 */
export const validatePasswordMatch = (
  password: string,
  confirmPassword: string,
): string | undefined => {
  if (password !== confirmPassword) {
    return "Passwords do not match";
  }
  return undefined;
};

/**
 * Format a Date object as a string in the format YYYY-MM-DD.
 *
 * @param date - The Date object to format.
 * @returns A string representing the formatted date.
 */
export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
