interface BlogProps {
  name: string
  data: string
  imageSrc: string
  blogUrl: string
}

export function Blogcard({ name, data, imageSrc, blogUrl }: BlogProps) {
  return (
    <>
      <div className="flex flex-row items-center gap-8">
        <figure className="w-[55%] shrink-0 overflow-hidden rounded-2xl">
          <img src={imageSrc} alt="Album" className="h-full w-full object-cover" />
        </figure>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-[#1d1d1f]">{name}</h2>
          <p className="text-sm text-gray-400">{data}</p>
        </div>
      </div>
      <p>In Evidenza</p>
      <div className="m-[10px] w-[380px] max-w-[340px] overflow-visible rounded-[24px] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.04),0_1px_8px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-[5px] hover:shadow-[0_4px_10px_rgba(147,81,228,0.719)]">
        <div className="relative h-[280px] w-full bg-[#f5f5f7]">
          <img
            src={imageSrc}
            alt={name}
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center top' }}
          />
        </div>
        <div className="flex flex-col items-start p-6">
          <h3 className="mt-0 mb-2 text-[1.5rem] font-bold tracking-[-0.5px] text-black">{name}</h3>
          <p className="mt-0 mb-8 text-[1.1rem] font-normal text-[#666666]">{data}</p>
          <a
            href={blogUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-[6px] text-[1.1rem] font-medium text-[#4f3cc9] no-underline transition-opacity hover:opacity-80"
          ></a>
        </div>
      </div>
    </>
  )
}
