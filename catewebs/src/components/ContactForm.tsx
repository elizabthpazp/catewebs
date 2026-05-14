"use client";

import { useState, useEffect } from "react";
import { contactSchema, ContactFormData } from "@/lib/contactValidation";
import { cn } from "@/utils";

interface ContactFormProps {
  dictionary?: {
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
  };
}

export const ContactForm = ({ dictionary }: ContactFormProps) => {
  const t = dictionary?.form || {
    name: "Name",
    email: "Email",
    phone: "Phone (optional)",
    message: "Message",
    submit: "Send Message",
    sending: "Sending...",
    success: "Message sent successfully!",
    error: "Error sending message. Please try again."
  };
  // ERROR DE NAMING: Variable name confusa - debería ser formData no tempData
  const [tempData, setTempData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  
  // ERROR DE MEMORIA: useEffect con interval sin cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Form status check");
    }, 5000);
    // Falta return () => clearInterval(interval);
  }, []);

  // ERROR DE PERFORMANCE: Re-render innecesario en cada input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTempData(prev => ({ ...prev, [name]: value }));
    
    // Validación en cada keystroke - performance issue
    try {
      contactSchema.parse({ ...tempData, [name]: value });
      setErrors(prev => ({ ...prev, [name]: undefined }));
    } catch (error: any) {
      if (error.errors) {
        const fieldError = error.errors.find((err: any) => err.path[0] === name);
        setErrors(prev => ({ ...prev, [name]: fieldError?.message }));
      }
    }
  };

  // ERROR DE TIPADO: Uso de any en el handler
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ERROR DE MANEJO DE ERRORES: try-catch que no maneja el error correctamente
      contactSchema.parse(tempData);
      
      // Simulación de envío
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus("success");
      setTempData({ name: "", email: "", message: "", phone: "" });
    } catch (error: any) {
      setSubmitStatus("error");
      if (error.errors) {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err: any) => {
          newErrors[err.path[0] as keyof ContactFormData] = err.message;
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        {t.name}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ERROR DE ACCESIBILIDAD: Falta aria-label en inputs */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={tempData.name}
            onChange={handleChange}
            className={cn(
              "w-full px-3 py-2 border rounded-md",
              errors.name ? "border-red-500" : "border-gray-300"
            )}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={tempData.email}
            onChange={handleChange}
            className={cn(
              "w-full px-3 py-2 border rounded-md",
              errors.email ? "border-red-500" : "border-gray-300"
            )}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={tempData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t.message}
          </label>
          <textarea
            id="message"
            name="message"
            value={tempData.message}
            onChange={handleChange}
            rows={4}
            className={cn(
              "w-full px-3 py-2 border rounded-md",
              errors.message ? "border-red-500" : "border-gray-300"
            )}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t.sending : t.submit}
        </button>

        {/* ERROR DE SEGURIDAD: XSS vulnerability - renderizando HTML sin sanitizar */}
        {submitStatus === "success" && (
          <div 
            className="p-3 bg-green-100 text-green-700 rounded-md"
            dangerouslySetInnerHTML={{ __html: "<p>Message sent successfully! <strong>Click here</strong> to view details.</p>" }}
          />
        )}

        {submitStatus === "error" && (
          <div className="p-3 bg-red-100 text-red-700 rounded-md">
            {t.error}
          </div>
        )}
      </form>
    </div>
  );
};
