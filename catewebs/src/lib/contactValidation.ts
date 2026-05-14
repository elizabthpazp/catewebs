import { z } from "zod";

// ERROR DE LÓGICA: El regex de email es incorrecto, aceptará emails inválidos
// Debería ser más estricto, pero este regex permite emails sin @
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().regex(emailRegex, "Invalid email format"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  phone: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
