import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { BsSearch } from "react-icons/bs";

const LINKS = [
  {
    id: 1,
    name: 'Home',
    url: '/'
  },
  {
    id: 2,
    name: 'Contact Us',
    url: '/contact'
  },
  {
    id: 3,
    name: 'FAQ',
    url: '/faq'
  },
  {
    id: 4,
    name: 'Pricing',
    url: '/pricing'
  }
]

const Header = () => {
  return (
    <header className="py-7 absolute top-0 left-0 right-0 z-10 text-white">
      <div className="flex items-center container">
        <Link href="/">
          <h1 className="font-bold text-3xl tracking-tighter">Paisaflix</h1>
        </Link>
        <nav className="ml-14 flex">
          {LINKS.map((link, idx) => (
            <a
              className={`${idx > 0 ? "ml-11 " : ""}leading-8 block ${
                idx == 0
                  ? "relative after:h-[4px] after:w-full after:bg-yellow-400 after:absolute after:left-0 after:-bottom-2 text-white"
                  : "text-gray-300"
              }`}
              href={link.url}
              key={link.id}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center">
          <button className="p-4 text-white">
            <BsSearch size="20"/>
          </button>
          <div className="flex items-center ml-10">
            <Image src="/avatar.png" alt="Avatar Paisanxs" width="48" height="48"/>
            <b className="font-bold ml-4">Soy Paisanxs</b>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
