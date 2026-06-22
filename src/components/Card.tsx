interface CardProps {
  name: string
  role: string
  category: string
  linkedInUrl: string
  imageSrc: string
}

export function Card({ name, role, category, linkedInUrl, imageSrc }: CardProps) {
  return (
    <div className="m-[10px] w-full max-w-[340px] overflow-hidden rounded-[24px] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.04),0_1px_8px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-[5px] hover:shadow-[0_4px_10px_rgba(147,81,228,0.719)]">
      <div className="relative h-[280px] w-full bg-[#f5f5f7]">
        <span className="absolute top-4 left-4 z-[2] rounded-[8px] bg-[#3a3a3c] px-[14px] py-[6px] text-[0.85rem] font-medium text-white">
          {category}
        </span>
        <img
          src={imageSrc}
          alt={name}
          className="h-full w-full object-cover"
          style={{ objectPosition: 'center top' }}
        />
      </div>
      <div className="flex flex-col items-start p-6">
        <h3 className="mt-0 mb-2 text-[1.5rem] font-bold tracking-[-0.5px] text-black">{name}</h3>
        <p className="mt-0 mb-8 text-[1.1rem] font-normal text-[#666666]">{role}</p>
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-[6px] text-[1.1rem] font-medium text-[#4f3cc9] no-underline transition-opacity hover:opacity-80"
        >
          LinkedIn <span>🚀</span>
        </a>
      </div>
    </div>
  )
}
