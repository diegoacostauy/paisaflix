import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsEnvelope, BsTelephone } from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi";

const FOOTER_LINKS = [
  {
    name: "Product",
    items: [
      {
        name: "Movies",
        url: "/movies"
      },
      {
        name: "Tv Show",
        url: "/tv-show"
      },
      {
        name: "Videos",
        url: "/videos"
      }
    ]
  },
  {
    name: "Media Group",
    items: [
      {
        name: "Nice Studio",
        url: "/nice-studio"
      },
      {
        name: "Nice News",
        url: "/nice-news"
      },
      {
        name: "Nice Tv",
        url: "/nice-tv"
      }
    ]
  },
  {
    name: "Sitemap",
    items: [
      {
        name: "About",
        url: "/about"
      },
      {
        name: "Careers",
        url: "/careers"
      },
      {
        name: "Press",
        url: "/press"
      }
    ]
  }
];

const CONTACT_INFO = [
  {
    title: "8819 Enrique Martinez, Bs As., 90280",
    icon: <SlLocationPin/>
  },
  {
    title: "hola@paisanos.io",
    icon: <BsEnvelope/>
  },
  {
    title: "+271 386-647-3637",
    icon: <BsTelephone/>
  }
]

const Footer = () => {
  return (
    <footer className="py-14 md:py-20 mt-12 md:mt-16 text-white">
      <div className="container">
        <div className="grid gap-4 grid-cols-12">
          <div className="col-span-12 md:col-span-5 mb-5 md:mb-0">
            <h3 className="text-3xl md:text-6xl font-bold tracking-tighter mb-12">Paisaflix</h3>
            <form action="" className="md:max-w-[282px]">
              <label htmlFor="email" className="block font-bold mb-5">Join Newsletter</label>
              <div className="relative">
                <input placeholder="Your Email" className="bg-transparent border-gray-650 border-[1px] rounded-md px-2 py-4 placeholder:text-gray-600 w-full" type="email" id="email" />
                <button className="bg-yellow-400 text-black p-4 rounded-md absolute top-1/2 right-[5px] -translate-y-1/2 hover:bg-yellow-500"><HiOutlineArrowRight color="inherit"/></button>
              </div>
            </form>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="sm:grid gap-4 grid-cols-3 mb-20 md:mb-28">
              {
                FOOTER_LINKS.map((link, idx) => (
                  <div key={idx} className="mb-6 sm:md-0">
                    <h4 className="font-bold mb-5 text-base">{ link.name }</h4>
                    <ol>
                      {link.items.map((item, idx) => (
                        <li className={`${idx > 0 ? 'mt-5' : ''}`} key={idx}><a className="text-gray-300 hover:text-gray-100" href={item.url}>{ item.name }</a></li>
                      ))}
                    </ol>
                  </div>
                ))
              }
            </div>
            <ul className="mb-0 sm:flex gap-x-6">
              {
                CONTACT_INFO.map((info, idx) => (
                  <li className="mb-4 sm:mb-0 flex gap-x-2 text-sm items-center" key={idx}>
                    { info.icon }
                    <span>
                    { info.title }
                    </span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
