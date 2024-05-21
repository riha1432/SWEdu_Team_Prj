import React, { useState, useEffect, useRef } from 'react';
import '../../css/ProductDetail.css';
import { Container, Row, Col, Button, CardBody, FormControl, InputGroup, Card, Stack } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; // useParams를 사용하여 URL 파라미터를 가져옴
import Carousel from 'react-bootstrap/Carousel';



import kaleImage from '../../images/kale.jpg';
import lettuceImage from '../../images/lettuce.jpg';
import chardImage from '../../images/chard.jpg';
import mustardGreensImage from '../../images/mustardGreens.jpg';



function CarouselImages({ src, alt='Image', width = '100%', height = '400px' }) {
    return (
      <div>
        <img
          style={{
            width: width, // 너비
            height: height, // 원하는 세로 크기
            objectFit: 'cover', // 이미지 채우기
          }}
          src={src}
          // src={`https://via.placeholder.com/800x400?text=${text}`}
          alt={alt}
        />
      </div>
    );
  }


// 제품 데이터
const products = [
    {
        id: 1,
        product_title: '케일',
        product_price: 25000,
        product_seller: '판매자 이름',
        product_address: '경산하양시',
        product_description: '케일 설명들, 케일 설명들, 케일 설명들, 케일 설명들,\n 케일 설명들, 케일 설명들, 케일 설명들, 케일 설명들, 케일 설명들, 케일 설명들,\n 케일 설명들, 케일 설명들, 케일 설명들 \n\n 케일 팝니다 \n\n \n\n \n\n \n\n \n\n\n\nddddd\n\n\n\ndddddddddd\n\n\n\n ddddn \n\n\n\n\n dddddddn\n\n\n\n\n',
        product_image_path: kaleImage,
        created_at: '2023-05-10',
    },
    {
        id: 2,
        product_title: '상추',
        product_price: 3000,
        product_seller: '판매자 이름',
        product_address: '경산하양시',
        product_description: '상추 설명들, 상추 설명들, 상추 설명들, 상추 설명들,상추 설명들,상추 설명들,상추 설명들,상추 설명들,상추 설명들,상추 설명들,상추 설명들,상추 설명들,상추 설명들,상추 설명들,상추 설명들,상추 설명들,상추 설명들,상추 설명들,상추 설명들,상추 설명들,상추 설명들,상추 설명들,상추 설명들,상추 설명들,상추 설명들,\n \n \n \n\n \n \n \n\n \n \n \n\n \n \n \n\n \n \n \n\n \n \n \n\n \n \n \n\n \n \n \n\n \n \n \n\n \n \n \n\n \n \n \n\n \n \n \n\n \n \n \n 방금 상추라고 \n \n \n \n',
        product_image_path: lettuceImage,
        created_at: '2024-05-13',
    },
    {
        id: 3,
        product_title: '근대',
        product_price: 3000,
        product_seller: '판매자 이름',
        product_address: '경산하양시',
        product_description: '근대 설명들, 근대 설명들, 근대 설명들...',
        product_image_path: chardImage,
        created_at: '2024-05-13',
    },
    {
        id: 4,
        product_title: '겨자채',
        product_price: 3000,
        product_seller: '판매자 이름',
        product_address: '경산하양시',
        product_description: '겨자채 설명들, 겨자채 설명들, 겨자채 설명들...',
        product_image_path: mustardGreensImage,
        created_at: '2024-05-05',
    },
    // 다른 상품 추가 가능
];



function ProductDetailPage() {
    const [carouselHeight, setCarouselHeight] = useState('auto'); //캐러셀 높이 호환
    const carouselRef = useRef(null);
    const [quantity, setQuantity] = useState(1); // 수량을 관리할 상태
    const { id } = useParams(); // URL에서 id 파라미터를 가져옴
    

    useEffect(() => {
        function setEqualHeight() {
            if (carouselRef.current) {
                const carouselHeight = carouselRef.current.clientHeight;
                setCarouselHeight(carouselHeight + 'px');
            }
        }
        setEqualHeight();
        window.addEventListener('resize', setEqualHeight);
        return () => window.removeEventListener('resize', setEqualHeight);
    }, []);

    // 선택된 상품 찾기
    const selectedProduct = products.find(product => product.id === parseInt(id));

    //배송 수량 조절
    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const totalPrice = selectedProduct.product_price * quantity;

    return (
        <Container className='product-detail-container'>
            <Row>
                <Col md={5}>
                <div ref={carouselRef} style={{ height: carouselHeight }}>
                    <Carousel>
                    <Carousel.Item>
                        <CarouselImages src={selectedProduct.product_image_path} text="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImages src={selectedProduct.product_image_path} text="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImages src={selectedProduct.product_image_path} text="Third slide" />
                    </Carousel.Item>
                    </Carousel>
                </div>
                </Col>
                <Col md={7}>
                    <Card className='card-shadow-sm'>
                        <CardBody>
                            <Card.Title className='pt-3 pb-3'> <h4>{selectedProduct.product_title}</h4></Card.Title>
                            <Card.Title className='pt-3 pb-3 border-top'> <h4>{selectedProduct.product_price}원</h4></Card.Title>
                            <p className="card-text pt-3 pb-3 border-top">
                                <span className='badge bg-dark'>카드</span>
                                <span className='badge bg-dark'>계좌이체</span>
                                <span className='badge bg-dark'>통장입금</span>
                            </p>
                            <p className="card-text pb-3">
                                배송비 2500원 | 택배배송 | X월 이내 (주말, 공휴일 제외)
                            </p>
                            <p className="card-text  pt-3 pb-3 border-top">
                                <Row>
                                    <Col>
                                        <label className='col-form-label'><h4>배송 수량</h4></label>
                                    </Col>
                                    <Col xs="auto" >
                                        <InputGroup>
                                            <Button className='btn btn-sm btn-outline-secondary' style={{ minWidth: '30px' }} onClick={decrementQuantity}>-</Button>
                                            <FormControl
                                                className='text-center border border-secondary rounded'
                                                value={quantity}
                                                readOnly
                                                style={{ width: '60px', height: '40px' }}
                                            />
                                            <Button className='btn btn-sm btn-outline-secondary' style={{ minWidth: '30px' }} onClick={incrementQuantity}>+</Button>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </p>
                            <Row className='pt-4 pb-3 border-top'>
                                <Col>
                                  <h3>총 상품 금액</h3>
                                </Col>
                                <Col style={{textAlign:'right'}}>
                                  <h3>{totalPrice}원</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-grid gap-2">
                                    <Button className='btn btn-lg btn-warning btn-block' onClick={()=>{
                                        alert('장바구니에 담겼습니다')
                                    }} >장바구니 담기</Button>
                                </Col>
                                <Col className="d-grid gap-2">
                                    <Button className='btn btn-lg btn-success btn-block' onClick={()=>{
                                        alert('주문이 완료되었습니다')
                                    }} >주문하기</Button>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


export default ProductDetailPage;