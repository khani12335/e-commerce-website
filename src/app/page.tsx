import Browse from "@/components/Browse";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Inspiration from "@/components/Inspiration";
import NavBar from "@/components/navBar";
import Product from "@/components/Product";
import Setup from "@/components/Setup";

export default function Home() {
  return (
    <div className="font-sans text-gray-600">
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* Browse Section */}
      <Browse />

      {/*Our product  */}
      <Product />

      {/* Inspiration Section */}
      <Inspiration />
      {/* Inspiration image */}
      <Setup />
      {/* Footer */}
      <Footer />
    </div>
  );
}
