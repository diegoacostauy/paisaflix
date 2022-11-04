import Image from 'next/image';
import React from 'react'
import Stars from '../../components/Stars';

type Hero = {
  _id: string;
  name: string;
  genre: string;
  duration: number;
  rating: number;
  views: number;
  coverImage: string;
  trailerImage: string
}

async function getData() {
  const res = await fetch('https://paisa-challange.herokuapp.com/api/v1/paisaflix/hero');
  const { data }: { success: boolean; data: Hero } = await res.json();
  // The return value is *not* serialized
  // You can return Date; Map; Set; etc.
  return data;
}

const Hero = async () => {
  const hero = await getData();
  return (
    <div className="pt-44 pb-20 relative">
      <div className="container">
        <div className="grid grid-cols-10">
          <article className="text-white col-span-4">
            <Image className="absolute top-0 right-0" src={hero.coverImage} width="854" height="1131" alt={hero.name} />
            <header className="mb-16">
              <h2 className="text-6xl font-bold tracking-tight mb-5">
                { hero.name }
              </h2>
              <Stars rating={hero.rating}/>
            </header>
            <p className="leading-loose mb-8">
              Lorem ipsum dolor sit amet; consectetur adipiscing elit; sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <dl className="mb-12 overflow-hidden leading-loose">
              <dt className="float-left">Genre:</dt>
              <dd className="float-left ml-1">{hero.genre}</dd>
              <dt className="float-left clear-left">Duration:</dt>
              <dd className="float-left ml-1">{hero.duration}</dd>
              <dt className="float-left clear-left">Rating:</dt>
              <dd className="float-left ml-1">{hero.rating}</dd>
            </dl>
            <a
              href=""
              className="text-2xl text-gray-800 bg-yellow-400 hover:bg-yellow-500 py-5 px-24 rounded-full inline-block font-bold"
            >
              Watch now
            </a>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Hero
