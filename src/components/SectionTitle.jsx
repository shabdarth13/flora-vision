export default function SectionTitle({ children }) {
  return (
    <h2 className="relative mx-auto mb-20 w-fit text-center text-[34px] font-bold md:text-[46px]">
      <span className="absolute -left-4 -top-3 h-8 w-4 border-l-2 border-t-2 border-[#d6d06a]" />
      {children}
      <span className="absolute -bottom-3 -right-4 h-8 w-4 border-b-2 border-r-2 border-[#d6d06a]" />
    </h2>
  )
}