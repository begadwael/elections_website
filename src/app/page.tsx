import HeroSection from "@/app/components/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import PolaroidGallery from "./components/polaroidImages";
import OurVisionAndPlans from "./components/OurVisionAndPlans";
import HelpUsSection from "./components/HelpUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhoWeAre />
      <PolaroidGallery />
      <OurVisionAndPlans />
      <HelpUsSection />
    </div>
  );
}
