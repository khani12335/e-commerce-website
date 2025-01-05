import BrowseSection from "@/components/Browse";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import InspirationSection from "@/components/Inspiration";
import NavBar from "@/components/NavBar";
import ProductSection from "@/components/Product";
import Setup from "@/components/Setup";

export default function Home() {
  return (
   <div className="font-sans text-gray-600">
    {/* NavBar */}
    <NavBar/>
    {/* hero section */}
    <HeroSection/>
    {/* browse section */}
    <BrowseSection/>
    {/* product section */}
    <ProductSection/>
    {/* inspiration section */}
    <InspirationSection/>
    {/* set up */}
    <Setup/>
    {/* footer */}
    <Footer/>
   </div>
  );
}
