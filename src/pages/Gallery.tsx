import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const GalleryPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20" />
      <Gallery />
      <Footer />
    </main>
  );
};

export default GalleryPage;
