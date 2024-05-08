import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';

function Carousels() {
  return (
    <div className="carousel-wrapper">
    <Carousel>
      <Carousel.Item>
        <CarouselImage src={image1} alt="First slide" width="100%" height="300px" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>첫번째.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={image2} alt="Second slide" width="100%" height="300px" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>두번째.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={image3} alt="Third slide" width="100%" height="300px" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>3번째.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carousels;