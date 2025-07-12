import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LeadFormSection from "@/components/LeadFormSection";
import SocialProofSection from "@/components/SocialProofSection";
import { trackUTMParams } from "@/lib/tracking";
import { trackPageVisit } from "@/service/tracking/tracking";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    trackUTMParams();
    trackPageVisit();
  }, []);
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <LeadFormSection />
      <SocialProofSection />
      <Footer />
    </main>
  );
}
