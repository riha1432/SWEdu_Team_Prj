import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/weather.jpg';
import { useNavigate } from 'react-router-dom'; 
import { Nav } from 'react-bootstrap';

function Carousels() {

  let navigate = useNavigate();

  return (
    <div className="carousel-wrapper">
    <Carousel>
      <Carousel.Item>
        <a href='https://www.kamis.or.kr/customer/price/wholesale/item.do'>
        <CarouselImage src={image1} alt="First slide" width="100%" height="400px" />
        <Carousel.Caption>
          <h3 style={{marginBottom:"120px", fontSize:"50px"}}>실시간 가격정보 바로 보러가기</h3>
        </Carousel.Caption>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <Nav.Link onClick={()=>{ navigate('/product') }}>
        <CarouselImage src={image2} alt="Second slide" width="100%" height="400px"/>
        <Carousel.Caption>
          <h3 style={{marginBottom:"125px", fontSize:"50px"}}>상품목록 바로 보러가기</h3>
        </Carousel.Caption>
        </Nav.Link>
      </Carousel.Item>

      <Carousel.Item>
        <a href='https://weather.naver.com/today/04290250'>
        <CarouselImage src={image3} alt="Third slide" width="100%" height="400px" />
        <Carousel.Caption>
          <h3 style={{marginBottom:"125px", fontSize:"50px"}}>실시간 날씨 정보 보러가기</h3>
        </Carousel.Caption>
        </a>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carousels;