import Featured from "./components/Featured";
import Trailers from "./components/Trailers";
import HeroIndex from "./components/HeroIndex";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden pb-16 md:pb-24 mb-8">
        <HeroIndex />
        <Trailers />
      </div>
      <Featured />
    </>
  );
}
