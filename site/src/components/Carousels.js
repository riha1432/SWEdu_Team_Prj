import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import { useNavigate } from 'react-router-dom'; 

function Carousels() {
  return (
    <div className="carousel-wrapper">
    <Carousel>
      <Carousel.Item>
        <a href='https://www.kamis.or.kr/customer/price/wholesale/item.do'>
        <CarouselImage src={image1} alt="First slide" width="100%" height="400px" />
        <Carousel.Caption>
          <h3 style={{marginBottom:"150px", fontSize:"50px"}}>실시간 가격정보 바로 보러가기</h3>
        </Carousel.Caption>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        
        <CarouselImage src={image2} alt="Second slide" width="100%" height="400px"/>
        <Carousel.Caption>
          <h3 style={{marginBottom:"160px", fontSize:"50px"}}>상품목록 바로 보러가기</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <CarouselImage src={image3} alt="Third slide" width="100%" height="400px" />
        <Carousel.Caption>
          <h3 style={{marginBottom:"160px", fontSize:"50px"}}>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carousels;