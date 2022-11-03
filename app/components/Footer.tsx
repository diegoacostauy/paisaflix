import React from 'react'

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
]

const Footer = () => {
  return (
    <footer className="py-20 bg-black mt-16 text-white">
      <div className="container">
        <div className="grid gap-4 grid-cols-12">
          <div className="col-span-5">
            <h3 className="text-6xl font-bold tracking-tighter">Paisaflix</h3>
          </div>
          <div className="grid gap-4 grid-cols-3 col-span-7">
            {
              FOOTER_LINKS.map((link, idx) => (
                <div key={idx}>
                  <h4>{ link.name }</h4>
                  <ol>
                    {link.items.map((item, idx) => (
                      <li key={idx}><a href={item.url}>{ item.name }</a></li>
                    ))}
                  </ol>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
