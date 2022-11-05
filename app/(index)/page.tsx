import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Trailers from "./components/Trailers";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden pb-16 md:pb-24 mb-8">
        <Hero />
        <Trailers />
      </div>
      <Featured />
    </>
  );
}
