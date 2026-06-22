interface CardProps {
  name: string
  role: string
  category: string
  linkedInUrl: string
  imageSrc: string
}

export function Card({ name, role, category, linkedInUrl, imageSrc }: CardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">
      <div className="relative">
        <span className="absolute top-3 left-3 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white">
          {category}
        </span>
        <img src={imageSrc} alt={name} className="h-64 w-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900">{name}</h3>
        <p className="mt-1 text-sm text-gray-500">{role}</p>
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-violet-600 transition-colors hover:text-violet-800"
        >
          LinkedIn <span>🚀</span>
        </a>
      </div>
    </div>
  )
}
