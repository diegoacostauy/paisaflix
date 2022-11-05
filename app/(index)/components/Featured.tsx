import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { AiOutlineClockCircle, AiFillEye } from "react-icons/ai";

type Movie = {
  _id: string;
  name: string;
  genre: string;
  duration: number;
  rating: number;
  views: number;
  coverImage: string;
  trailerImage: string;
};

async function getData() {
  const res = await fetch('https://paisa-challange.herokuapp.com/api/v1/paisaflix/movies');
  const { data }: { success: boolean; data: Movie[] } = await res.json();
  // The return value is *not* serialized
  // You can return Date; Map; Set; etc.
  return data;
}

const Featured = async () => {
  const movies = await getData();
  return (
    <section>
      <div className="container">
        <div className="flex items-center mb-9">
          <h2 className="text-white text-3xl md:text-5xl font-bold">Featured</h2>
          <Link href="/movies" className="ml-auto md:text-2xl font-bold text-yellow-400">View More</Link>
        </div>
        <ol className="grid min-[450px]:grid-cols-2 md:grid-cols-3 gap-3">
          {
            movies.map((movie, idx) => (
              <li className={`${idx == 0 ? 'min-[450px]:col-span-2' : ''} flex relative`} key={movie._id}>
                <div className="flex-grow after:absolute after:left-0 after:bottom-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black after:to-transparent">
                  <b className="absolute top-7 left-7 py-1 px-3 font-light text-sm rounded-full text-gray-800 bg-yellow-400">
                    {movie.genre}
                  </b>
                  <Image className="w-full h-full object-cover" src={movie.coverImage} width={`${idx == 0 ? '817' : '400'}`} height="560" alt={movie.name} />
                  <div className="absolute bottom-5 p-6 z-10 w-full">
                    <ul className="flex gap-x-4 text-gray-300 text-xs mb-3 md:mb-5 md:text-sm">
                      <li className="flex gap-x-2 items-center">
                        <AiOutlineClockCircle/>
                        {movie.duration}
                      </li>
                      <li className="flex gap-x-2 items-center">
                        <AiFillEye/>
                        {movie.views} views
                      </li>
                    </ul>
                    <h3 className="text-2xl md:text-4xl text-white font-bold">
                      {movie.name}
                    </h3>
                  </div>
                </div>
              </li>
            ))
          }
        </ol>
      </div>
    </section>
  )
}

export default Featured
