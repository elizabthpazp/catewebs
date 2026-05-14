export const CONTACT_FORM_CONFIG = {
  MAX_MESSAGE_LENGTH: 500,
  MIN_MESSAGE_LENGTH: 10,
  MAX_NAME_LENGTH: 100,
  MIN_NAME_LENGTH: 2,
  PHONE_REGEX: /^\+?[\d\s-()]+$/,
} as const;

export const CONTACT_ERRORS = {
  REQUIRED: "This field is required",
  INVALID_EMAIL: "Invalid email format",
  INVALID_PHONE: "Invalid phone format",
  MESSAGE_TOO_SHORT: `Message must be at least ${CONTACT_FORM_CONFIG.MIN_MESSAGE_LENGTH} characters`,
  MESSAGE_TOO_LONG: `Message must be less than ${CONTACT_FORM_CONFIG.MAX_MESSAGE_LENGTH} characters`,
  NAME_TOO_SHORT: `Name must be at least ${CONTACT_FORM_CONFIG.MIN_NAME_LENGTH} characters`,
  NAME_TOO_LONG: `Name must be less than ${CONTACT_FORM_CONFIG.MAX_NAME_LENGTH} characters`,
} as const;
