export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: ContactFormData;
}

export interface ContactDictionary {
  title: string;
  description: string;
  form: {
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
}
