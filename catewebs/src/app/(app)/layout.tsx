import { Header } from "@/components/app/Header";
import { Footer } from "@/components/Footer";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AuthLayoutProps) {
 

  const stargazers_count: number = 0;
  return (
    <>
      <Header stargazers_count={stargazers_count} />
      <main className="mx-auto max-w-7xl px-12">
        <div className="px-6 lg:px-8">{children}</div>
      </main>

      <Footer />
    </>
  );
}
