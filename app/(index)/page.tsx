import Hero from "./components/Hero";
import Trailers from "./components/Trailers";

export default function Home() {
  return (
    <div className="overflow-hidden pb-24">
      <Hero />
      <Trailers />
    </div>
  );
}
