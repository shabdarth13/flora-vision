import { Play } from 'lucide-react'
import heroPlant from '../assets/hero-card-plant.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="container-main grid items-start gap-16 pb-28 pt-16 lg:grid-cols-[1fr_420px]"
    >
      <div>
        <h1 className="soft-title max-w-[900px] text-[56px] font-bold leading-[0.95] tracking-[-2px] text-white/85 sm:text-[78px] md:text-[100px] lg:text-[120px]">
          Earth’s Exhale
        </h1>

        <p className="mt-5 max-w-[660px] text-[15px] leading-7 text-white/72 md:text-base">
          “Earth Exhale” symbolizes the purity and vitality of the Earth’s
          natural environment and its essential role in sustaining life.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <button className="rounded-[10px] border border-white/85 px-10 py-3 text-base hover:bg-white hover:text-[#1b2316]">
            Buy Now
          </button>

          <button className="flex items-center gap-4 text-base text-white/85">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/85">
              <Play size={17} fill="white" />
            </span>
            Live Demo...
          </button>
        </div>

        <div className="glass mt-28 max-w-[410px] rounded-[28px] p-5">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/80?img=12"
              alt="Ronnie Hamill"
              className="h-14 w-14 rounded-full object-cover"
            />

            <div>
              <h3 className="text-base font-semibold">Ronnie Hamill</h3>
              <p className="text-sm text-yellow-300">★★★★★</p>
            </div>
          </div>

          <p className="mt-4 text-[13px] leading-5 text-white/70">
            I can’t express how thrilled I am with my new natural plants! They
            bring fresh and vibrant energy to my home.
          </p>
        </div>
      </div>

      <aside className="glass mx-auto w-full max-w-[390px] rounded-[42px] px-7 pb-8 pt-0 lg:mx-0">
        <div className="flex min-h-[310px] items-center justify-center">
          <img
            src={heroPlant}
            alt="Aglaonema plant"
            className="max-h-[330px] w-full object-contain"
          />
        </div>

        <p className="mt-2 text-base text-white/55">Indoor Plant</p>

        <div className="mt-1 flex items-center justify-between gap-2">
          <h2 className="text-[32px] font-light leading-tight text-white/85">
            Aglaonema plant
          </h2>
          <span className="text-3xl text-white/80">›</span>
        </div>

        <button className="mt-5 rounded-[9px] border border-white/85 px-12 py-3 text-base hover:bg-white hover:text-[#1b2316]">
          Buy Now
        </button>

        <div className="mt-7 flex justify-center gap-2">
          <span className="h-[5px] w-5 rounded-full bg-white" />
          <span className="h-[5px] w-[5px] rounded-full bg-white/70" />
          <span className="h-[5px] w-[5px] rounded-full bg-white/70" />
        </div>
      </aside>
    </section>
  )
}