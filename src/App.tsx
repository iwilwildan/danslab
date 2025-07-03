import Header from './components/Header';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import FAQ from './components/FAQ';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProjectShowcase />
        <SocialProof />
        <Services />
        <FAQ />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;