import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs';
import { EndpointType, Movie } from '../../types';
import { formatTime } from '../../utils';
import Stars from './Stars';

type DataProps = {
  endpoint: EndpointType,
  id?: string
}

async function getData({ endpoint, id }: DataProps) {
  const url =
    id == null
      ? `https://paisa-challange.herokuapp.com/api/v1/paisaflix/${endpoint}`
      : `https://paisa-challange.herokuapp.com/api/v1/paisaflix/${endpoint}/${id}`;
  const res = await fetch(url);
  const { data }: { success: boolean; data: Movie } = await res.json();
  // The return value is *not* serialized
  // You can return Date; Map; Set; etc.
  return data;
}


const Hero = async ({ endpoint, id}: DataProps) => {
  const movie = await getData({ endpoint, id });

  return (
    <section className="pt-44 pb-20 relative overflow-hidden">
      <div className="container">
        {
          endpoint === "movies" && (<Link href="/" className="text-white mb-12 inline-block">
            <BsArrowLeftShort size="30" />
          </Link>)
        }
        <div className="grid grid-cols-10">
          <article className="text-white col-span-8 md:col-span-6 lg:col-span-4">
            <div className="absolute top-0 right-0 after:absolute after:top-0 after:left-0 after:w-3/5 after:h-full after:bg-gradient-to-r after:from-black after:to-transparent">
              <Image
                className=""
                src={movie.coverImage}
                width="854"
                height="1131"
                alt={movie.name}
              />
            </div>
            <div className="relative z-10">
              <header className="mb-16">
                <h2 className="text-5xl md:text-7xl font-bold mb-5 tracking-normal">
                  {movie.name}
                </h2>
                <Stars rating={movie.rating} />
              </header>
              <p className="leading-loose mb-8">
                Lorem ipsum dolor sit amet; consectetur adipiscing elit; sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <dl className="mb-12 overflow-hidden leading-loose">
                <dt className="float-left">Genre:</dt>
                <dd className="float-left ml-1">{movie.genre}</dd>
                <dt className="float-left clear-left">Duration:</dt>
                <dd className="float-left ml-1">{formatTime(movie.duration)}</dd>
                <dt className="float-left clear-left">Rating:</dt>
                <dd className="float-left ml-1">{movie.rating}</dd>
              </dl>
              <Link
                href={`/movie/${movie._id}`}
                className="text-2xl text-gray-800 bg-yellow-400 hover:bg-yellow-500 py-3 px-12 w-full md:w-auto text-center md:py-5 md:px-24 rounded-full inline-block font-bold"
              >
                Watch now
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Hero;
