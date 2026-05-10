import bag from '../assets/bag.png'

export default function TrendCard({ image, title, desc, price, reverse }) {
  return (
    <article
      className={`glass mb-24 grid min-h-[430px] items-center gap-12 overflow-visible rounded-[70px] px-12 py-10 md:px-16 lg:grid-cols-2 ${
        reverse ? 'lg:[&>div:first-child]:order-2' : ''
      }`}
    >
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="max-h-[390px] w-full max-w-[560px] object-contain lg:-mt-20"
        />
      </div>

      <div className="mx-auto max-w-[620px] lg:mx-0">
        <h3 className="text-[30px] font-bold leading-tight md:text-[40px]">
          {title}
        </h3>

        <p className="mt-5 text-[15px] font-medium leading-6 text-white/75">
          {desc}
        </p>

        <h4 className="mt-6 text-[36px] font-bold">
          {price}
        </h4>

        <div className="mt-6 flex items-center gap-4">
          <button className="rounded-[8px] border border-white/85 px-10 py-3 text-base hover:bg-white hover:text-[#1b2316]">
            Explore
          </button>

          <button
            className="rounded-[8px] border border-white/85 p-3 hover:bg-white/15"
            aria-label="Add to cart"
          >
            <img src={bag} alt="" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </article>
  )
}