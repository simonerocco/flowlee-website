import img from '@/assets/carousel1.jpeg'
import img2 from '@/assets/carousel2.jpeg'
import img3 from '@/assets/carousel3.jpeg'
import img4 from '@/assets/carousel4.jpeg'
import img5 from '@/assets/carousel5.jpeg'
import img6 from '@/assets/carousel6.jpeg'
import img7 from '@/assets/carousel7.jpeg'
import img8 from '@/assets/carousel8.jpeg'
export function Carousel2() {
  return (
    <div className="carousel rounded-box">
      <div className="carousel-item">
        <img
          src={img}
          style={{ width: '300px', objectFit: 'cover', height: '400px' }}
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src={img2}
          style={{ width: '300px', objectFit: 'cover', height: '400px' }}
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src={img3}
          style={{ width: '300px', objectFit: 'cover', height: '400px' }}
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src={img4}
          style={{ width: '300px', objectFit: 'cover', height: '400px' }}
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src={img5}
          style={{ width: '300px', objectFit: 'cover', height: '400px' }}
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src={img6}
          style={{ width: '300px', objectFit: 'cover', height: '400px' }}
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src={img7}
          style={{ width: '300px', objectFit: 'cover', height: '400px' }}
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src={img8}
          style={{ width: '300px', objectFit: 'cover', height: '400px' }}
          alt="Burger"
        />
      </div>
    </div>
  )
}
