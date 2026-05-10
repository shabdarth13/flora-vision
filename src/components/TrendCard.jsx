import bag from '../assets/bag.png'

export default function TrendCard({ image, title, desc, price, reverse }) {
  return (
    <article
      className={`glass mb-28 grid min-h-[465px] items-center gap-12 overflow-visible rounded-[76px] px-8 py-12 md:px-16 lg:grid-cols-2 xl:px-20 ${
        reverse ? 'lg:[&>div:first-child]:order-2' : ''
      }`}
    >
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="max-h-[430px] w-full max-w-[600px] object-contain drop-shadow-[0_34px_45px_rgba(0,0,0,0.36)] lg:-mt-28"
        />
      </div>
      <div className="mx-auto max-w-[640px] lg:mx-0">
        <h3 className="text-[30px] font-bold leading-tight text-white/90 md:text-[42px]">
          {title}
        </h3>
        <p className="mt-6 max-w-[590px] text-[15px] font-medium leading-7 text-white/73 md:text-base">
          {desc}
        </p>
        <h4 className="mt-7 text-[36px] font-bold md:text-[42px]">
          {price}
        </h4>
        <div className="mt-7 flex items-center gap-5">
          <button className="rounded-[8px] border border-white/85 px-11 py-3 text-base hover:bg-white hover:text-[#1b2316]">
            Explore
          </button>
          <button
            className="rounded-[8px] border border-white/85 p-3.5 hover:bg-white/15"
            aria-label="Add to cart"
          >
            <img src={bag} alt="" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </article>
  )
}