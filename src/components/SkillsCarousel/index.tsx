import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'
import { Container } from './styles'

type Props = {
  children: React.ReactNode
}

const SkillsCarousel = ({ children }: Props) => {
  const settings = {
    arrows: false,
    dots: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '40px',
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    rows: 2,
    slidesPerRow: 1
  }

  return (
    <Container className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </Container>
  )
}

export default SkillsCarousel
