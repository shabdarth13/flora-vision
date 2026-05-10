import { useState } from 'react'
import { X } from 'lucide-react'
import logo from '../assets/logo.png'
import search from '../assets/search.png'
import bag from '../assets/bag.png'
import line1 from '../assets/menu-line-1.png'
import line2 from '../assets/menu-line-2.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = ['Home', 'Plants Type', 'More', 'Contact']

  return (
    <header className="relative z-50">
      <nav className="container-main flex items-center justify-between py-7">
        <a href="#home">
          <img src={logo} alt="FloraVision" className="h-10 w-auto" />
        </a>

        <div className="hidden items-center gap-16 text-sm text-white/85 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replaceAll(' ', '-')}`}
              className="hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-7">
          <button aria-label="Search">
            <img src={search} alt="" className="h-5 w-5 opacity-90" />
          </button>

          <button aria-label="Cart">
            <img src={bag} alt="" className="h-5 w-5 opacity-90" />
          </button>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex flex-col gap-[6px]"
          >
            <img src={line1} alt="" className="h-[3px] w-6" />
            <img src={line2} alt="" className="h-[3px] w-4 self-end" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[999] bg-black/60 md:hidden">
          <div className="ml-auto h-full w-[280px] bg-[#1b2316] p-6 shadow-2xl">
            <div className="mb-10 flex items-center justify-between">
              <img src={logo} alt="FloraVision" className="h-8" />
              <button onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6 text-base">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replaceAll(' ', '-')}`}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}