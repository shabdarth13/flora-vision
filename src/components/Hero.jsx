import { Play } from 'lucide-react'
import heroPlant from '../assets/hero-card-plant.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="container-main grid items-start gap-12 pb-32 pt-14 lg:grid-cols-[1fr_430px] xl:gap-20 xl:pt-20"
    >
      <div>
        <h1 className="soft-title max-w-[920px] text-[58px] font-bold leading-[0.93] tracking-[-2.5px] text-white/86 sm:text-[82px] md:text-[104px] xl:text-[126px]">
          Earth’s Exhale
        </h1>
        <p className="mt-6 max-w-[660px] text-[15px] leading-7 text-white/72 md:text-[17px]">
          “Earth Exhale” symbolizes the purity and vitality of the Earth’s natural environment and its essential role in sustaining life.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-6">
          <button className="rounded-[10px] border border-white/85 px-11 py-3.5 text-base hover:bg-white hover:text-[#1b2316]">
            Buy Now
          </button>
          <button className="flex items-center gap-4 text-base text-white/86">
            <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-white/85 bg-white/5">
              <Play size={18} fill="white" />
            </span>
            Live Demo...
          </button>
        </div>
        <div className="glass mt-24 max-w-[420px] rounded-[30px] p-5 md:mt-32">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/80?img=12"
              alt="Ronnie Hamill"
              className="h-[58px] w-[58px] rounded-full object-cover"
            />
            <div>
              <h3 className="text-[17px] font-semibold">Ronnie Hamill</h3>
              <p className="text-sm tracking-[1px] text-yellow-300">★★★★★</p>
            </div>
          </div>
          <p className="mt-4 text-[13px] leading-5 text-white/72">
            I can’t express how thrilled I am with my new natural plants! They bring fresh and vibrant energy to my home.
          </p>
        </div>
      </div>
      <aside className="glass relative mx-auto mt-8 w-full max-w-[410px] rounded-[46px] px-8 pb-8 pt-4 lg:mx-0 lg:mt-4">
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-3xl" />
        <div className="flex min-h-[340px] items-center justify-center">
          <img
            src={heroPlant}
            alt="Aglaonema plant"
            className="max-h-[360px] w-full scale-110 object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
          />
        </div>
        <p className="mt-1 text-base text-white/56">Indoor Plant</p>
        <div className="mt-2 flex items-center justify-between gap-4">
          <h2 className="text-[33px] font-light leading-tight text-white/88">
            Aglaonema plant
          </h2>
          <span className="text-4xl leading-none text-white/80">›</span>
        </div>
        <button className="mt-6 rounded-[9px] border border-white/85 px-12 py-3 text-base hover:bg-white hover:text-[#1b2316]">
          Buy Now
        </button>
        <div className="mt-8 flex justify-center gap-2">
          <span className="h-[5px] w-6 rounded-full bg-white" />
          <span className="h-[5px] w-[5px] rounded-full bg-white/65" />
          <span className="h-[5px] w-[5px] rounded-full bg-white/65" />
        </div>
      </aside>
    </section>
  )
}