import Footer from "@/components/ui/Footer";
import TopNavigation from "@/components/ui/TopNavigation";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const [servicesModal, showServicesModal] = useState(false);
  const [supportModal, showSupportModal] = useState(false);
  const [servicesArrowUp, setServicesArrow] = useState(false);
  const [supportArrowUp, setSupportArrow] = useState(false);

  const handleServicesModal = () => {
    showServicesModal(!servicesModal);
    setServicesArrow(!servicesArrowUp);
    showSupportModal(false);
    setSupportArrow(false);
  };
  const handleSupportModal = () => {
    showSupportModal(!supportModal);
    setSupportArrow(!supportArrowUp);
    showServicesModal(false);
    setServicesArrow(false);
  };

  const handleModals = () => {
    showSupportModal(false);
    setSupportArrow(false);
    showServicesModal(false);
    setServicesArrow(false);
  };
  return (
    <section>
      <TopNavigation
        handleSupport={handleSupportModal}
        handleServices={handleServicesModal}
        services={servicesModal}
        support={supportModal}
        serviceArrow={servicesArrowUp}
        supportArrow={supportArrowUp}
      />
      {children}
      <Footer />
    </section>
  );
}
