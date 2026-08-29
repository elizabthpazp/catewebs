import { ContactFormData, ContactResponse } from "@/types/contact";

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactResponse> {
  try {
    // Simulación de envío a API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Aquí iría la llamada real a la API
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
    // const result = await response.json();
    // return result;

    return {
      success: true,
      message: "Message sent successfully",
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error sending message",
    };
  }
}

export async function validateContactData(
  data: ContactFormData
): Promise<{ valid: boolean; errors: Partial<Record<keyof ContactFormData, string>> }> {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name || data.name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Invalid email format";
  }

  if (!data.message || data.message.length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
