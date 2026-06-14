import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { SignatureCollection } from './components/SignatureCollection';
import { Occasions } from './components/Occasions';
import { GuestStories } from './components/GuestStories';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-ivory min-h-screen selection:bg-accent selection:text-white">
      <Navigation />
      <Hero />
      <Experience />
      <SignatureCollection />
      <Occasions />
      <GuestStories />
      <Reservation />
      <Footer />
    </div>
  );
}
