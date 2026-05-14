import { ContactForm } from "@/components/ContactForm";
import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";

export default async function ContactPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          {dictionary.contact?.title || "Contact Us"}
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          {dictionary.contact?.description || "Get in touch with us"}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">info@catewebs.com</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">+1 234 567 890</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Address</h3>
                <p className="text-gray-600 dark:text-gray-300">123 Web Street, Digital City</p>
              </div>
            </div>
          </div>
          
          <ContactForm dictionary={dictionary.contact} />
        </div>
      </div>
    </div>
  );
}
