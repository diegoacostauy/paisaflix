"use client";
import { Popover, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import React, { Fragment } from 'react'
import { BsSearch } from "react-icons/bs";
import { TbMenu } from "react-icons/tb";

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
  const pathname = usePathname();
  return (
    <header className="py-7 absolute top-0 left-0 right-0 z-20 text-white">
      <Popover>
        {({ open }) => (
          <div className="flex items-center container">
            <Link href="/">
              <h1 className="font-bold text-[32px]">Paisaflix</h1>
            </Link>
            <nav className="ml-16 hidden lg:flex">
              {LINKS.map((link, idx) => (
                <a
                  className={`${
                    idx > 0 ? "ml-11 " : ""
                  }leading-8 block hover:text-white ${
                    pathname == link.url
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
              <Popover.Button className="text-white lg:hidden">
                <span className="sr-only">Open menu</span>
                <TbMenu size="24"/>
              </Popover.Button>
              <button className="p-4 text-white">
                <BsSearch size="20" />
              </button>
              <div className="items-center ml-10 hidden lg:flex">
                <Image
                  src="/avatar.png"
                  alt="Avatar Paisanxs"
                  width="48"
                  height="48"
                />
                <b className="font-bold ml-4">Soy Paisanxs</b>
              </div>
            </div>

            {
              open &&
              <div className="fixed bg-black opacity-40 inset-0 block lg:hidden"/>
            }

            <Transition
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95 translate-x-full"
              enterTo="opacity-100 scale-100 translate-x-0"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100 translate-x-0"
              leaveTo="opacity-0 scale-95 translate-x-full"
            >
              <Popover.Panel
                focus
                className="fixed z-20 top-0 right-0 min-h-full p-5 transition transform origin-top-right lg:hidden bg-white w-[min(20rem,calc(100vw-theme(spacing.10)))]"
              >
                <div className="flex items-center pb-5 mb-5 border-solid border-b-[1px] border-b-gray-100">
                  <Image
                    src="/avatar.png"
                    alt="Avatar Paisanxs"
                    width="48"
                    height="48"
                  />
                  <b className="font-bold ml-4 text-gray-600">Soy Paisanxs</b>
                </div>
                <nav className="">
                  {LINKS.map((link, idx) => (
                    <a
                      className={`leading-8 block hover:text-yellow-600 py-1 px-2 rounded-md text-gray-700 ${
                        pathname == link.url
                          ? "relative bg-gray-100 text-yellow-600"
                          : "text-gray-800"
                      }`}
                      href={link.url}
                      key={link.id}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </Popover.Panel>
            </Transition>
          </div>
        )}
      </Popover>
    </header>
  );
}

export default Header
