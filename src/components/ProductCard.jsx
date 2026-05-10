import bag from '../assets/bag.png'

export default function ProductCard({ item }) {
  return (
    <article className="glass flex min-h-[430px] flex-col rounded-[38px] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
      <div className="flex h-[230px] items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="max-h-[250px] w-full object-contain"
        />
      </div>

      <h3 className="mt-5 text-[24px] font-light leading-tight text-white/88">
        {item.name}
      </h3>

      <p className="mt-3 flex-1 text-[13px] leading-5 text-white/60">
        {item.desc}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-[25px] font-light">{item.price}</p>

        <button className="rounded-[7px] border border-white/70 p-2.5 hover:bg-white/15">
          <img src={bag} alt="" className="h-4 w-4" />
        </button>
      </div>
    </article>
  )
}