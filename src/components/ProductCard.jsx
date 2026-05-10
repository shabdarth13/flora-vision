import bag from '../assets/bag.png'

export default function ProductCard({ item }) {
  return (
    <article className="glass group flex min-h-[470px] flex-col rounded-[42px] p-7 transition duration-300 hover:-translate-y-3 hover:shadow-[0_35px_95px_rgba(0,0,0,0.46)]">
      <div className="flex h-[255px] items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="max-h-[285px] w-full object-contain drop-shadow-[0_24px_35px_rgba(0,0,0,0.34)] transition duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-6 text-[25px] font-light leading-tight text-white/90">
        {item.name}
      </h3>

      <p className="mt-4 flex-1 text-[13.5px] leading-5 text-white/62">
        {item.desc}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-[26px] font-light">{item.price}</p>

        <button className="rounded-[7px] border border-white/75 p-3 hover:bg-white/15">
          <img src={bag} alt="" className="h-[17px] w-[17px]" />
        </button>
      </div>
    </article>
  )
}