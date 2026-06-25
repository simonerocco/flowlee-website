import { Blogcard } from '@/components/Blogcard'
import img from '@/assets/3.png'
const BlogCard = [
  {
    name: 'Camilla Crucito',
    data: 'CEO and co-founder',
    blogUrl: 'https://linkedin.com',
    imageSrc: img,
  },
  {
    name: 'Camilla Crucito',
    data: 'CEO and co-founder',
    blogUrl: 'https://linkedin.com',
    imageSrc: img,
  },
  {
    name: 'Camilla Crucito',
    data: 'CEO and co-founder',
    blogUrl: 'https://linkedin.com',
    imageSrc: img,
  },
  {
    name: 'Camilla Crucito',
    data: 'CEO and co-founder',
    blogUrl: 'https://linkedin.com',
    imageSrc: img,
  },
]
export function Blog() {
  return (
    <section className="my-10 flex flex-col items-center px-4">
      <div className="grid grid-cols-1 gap-10 px-10 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {BlogCard.map((member, i) => (
          <Blogcard key={i} {...member} />
        ))}
      </div>
    </section>
  )
}
