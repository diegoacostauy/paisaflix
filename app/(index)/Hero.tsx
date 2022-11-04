import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="pt-44 pb-20">
      <div className="container">
        <div className="grid grid-cols-10">
          <article className="text-white col-span-4">
            <header className="mb-16">
              <h2 className="text-6xl font-bold tracking-tight mb-5">
                Blade Runner
              </h2>
              <ul className="flex gap-x-3">
                {new Array(5).fill(0).map((star, idx) => (
                  <li key={idx} className="text-yellow-400">
                    <AiFillStar size="24" />
                  </li>
                ))}
              </ul>
            </header>
            <p className="leading-loose mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <dl className="mb-12 overflow-hidden leading-loose">
              <dt className="float-left">Genre:</dt>
              <dd className="float-left ml-1">Action</dd>
              <dt className="float-left clear-left">Duration:</dt>
              <dd className="float-left ml-1">2h 30m</dd>
              <dt className="float-left clear-left">Rating:</dt>
              <dd className="float-left ml-1">4.5</dd>
            </dl>
            <a
              href=""
              className="text-2xl text-black bg-yellow-400 hover:bg-yellow-500 py-5 px-24 rounded-full inline-block"
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
