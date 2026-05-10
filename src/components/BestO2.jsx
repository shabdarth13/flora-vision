import bestPlant from '../assets/best-o2.png'
import arrowLeft from '../assets/arrow-left.png'
import arrowRight from '../assets/arrow-right.png'

export default function BestO2() {
  return (
    <section className="mt-36">
      <h2 className="relative mx-auto mb-20 w-fit text-center text-[34px] font-bold md:text-[46px]">
        <span className="absolute -left-4 -top-3 h-8 w-4 border-l-2 border-t-2 border-[#98d66f]" />
        Our Best o2
      </h2>

      <article className="glass grid items-center gap-10 rounded-[48px] p-10 lg:grid-cols-[520px_1fr]">
        <div className="flex justify-center">
          <img
            src={bestPlant}
            alt="Best oxygen plant"
            className="max-h-[500px] w-full max-w-[520px] object-contain"
          />
        </div>

        <div>
          <h3 className="max-w-[650px] text-[30px] font-bold leading-tight md:text-[38px]">
            We Have Small And Best O2 Plants Collection’s
          </h3>

          <p className="mt-6 max-w-[700px] text-base leading-7 text-white/72">
            Oxygen-producing plants, often referred to as “O2 plants,” are those
            that release oxygen into the atmosphere through photosynthesis.
          </p>

          <p className="mt-5 max-w-[700px] text-base leading-7 text-white/72">
            Many plants can help filter out pollutants and toxins from the air,
            making the air cleaner and healthier to breathe.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <button className="rounded-[8px] border border-white/85 px-10 py-3 text-base hover:bg-white hover:text-[#1b2316]">
              Explore
            </button>

            <div className="flex items-center gap-5">
              <button>
                <img src={arrowLeft} alt="" className="h-5 w-5" />
              </button>

              <span className="text-sm text-white/75">01/04</span>

              <button>
                <img src={arrowRight} alt="" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </article>

      <div className="mt-16 flex justify-center gap-3">
        <span className="h-[6px] w-[22px] rounded-full bg-white/80" />
        <span className="h-[6px] w-[6px] rounded-full bg-white/70" />
        <span className="h-[6px] w-[6px] rounded-full bg-white/70" />
      </div>
    </section>
  )
}