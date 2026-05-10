export default function ReviewCard({ item }) {
  return (
    <article className="glass rounded-[34px] p-8">
      <div className="flex items-center gap-4">
        <img
          src={item.avatar}
          alt={item.name}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <h3 className="text-[20px] font-bold">{item.name}</h3>
          <p className="text-sm tracking-[3px] text-yellow-300">★★★★★</p>
        </div>
      </div>

      <p className="mt-7 text-sm leading-6 text-white/70">
        {item.desc}
      </p>
    </article>
  )
}