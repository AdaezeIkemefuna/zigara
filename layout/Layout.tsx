import Footer from "@/components/ui/Footer";
import TopNavigation from "@/components/ui/TopNavigation";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <section>
      <TopNavigation />
      {children}
      <Footer />
    </section>
  );
}
