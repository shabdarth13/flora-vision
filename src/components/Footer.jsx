import footerLogo from '../assets/footer-logo.png'
import socialIcons from '../assets/social-icons.png'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="container-main mt-28 grid gap-14 border-t border-white/10 pb-16 pt-16 lg:grid-cols-[1fr_240px_1fr]"
    >
      <div>
        <img src={footerLogo} alt="FloraVision" className="h-14 w-auto" />
        <p className="mt-6 max-w-[440px] text-base leading-7 text-white/78">
          “From lush indoor greens to vibrant outdoor blooms, our plants are
          crafted to thrive and elevate your living environment.”
        </p>
        <img src={socialIcons} alt="Social media icons" className="mt-12 h-6 w-auto" />
      </div>
      <div>
        <h3 className="text-lg font-bold">Quick Link’s</h3>
        <ul className="mt-6 space-y-4 text-sm text-white/80 underline underline-offset-4">
          <li><a href="#home">Home</a></li>
          <li><a href="#plants-type">Type’s Of plant’s</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#privacy">Privacy</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold">For Every Update.</h3>
        <form className="mt-6 flex max-w-[560px] overflow-hidden rounded border border-white/80">
          <input
            type="email"
            placeholder="Enter Email"
            className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm placeholder:text-white/75"
          />
          <button className="bg-white px-7 py-3 text-[11px] font-bold text-black hover:bg-white/80">
            SUBSCRIBE
          </button>
        </form>
        <p className="mt-12 text-sm text-white/70">
          FloraVision © all right reserve
        </p>
      </div>
    </footer>
  )
}