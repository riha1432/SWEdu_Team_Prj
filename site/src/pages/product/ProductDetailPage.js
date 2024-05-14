import React, { useState } from 'react';
import '../../css/ProductDetail.css';
import { Container, Row, Col, Button, CardBody } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; // useParams를 사용하여 URL 파라미터를 가져옴
import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';



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

// 날짜를 포맷하는 함수
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // 'YYYY-MM-DD' 형식의 날짜 문자열을 읽기 쉬운 형식으로 변환
};

function ProductDetailPage() {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [showModal, setShowModal] = useState(false); // 모달 상태 관리
    const { id } = useParams(); // URL에서 id 파라미터를 가져옴

    // 선택된 상품 찾기
    const selectedProduct = products.find(product => product.id === parseInt(id));

    

    // 설명이 짧은지 여부 확인
    const isShortDescription = selectedProduct.product_description.length <= 100;

    // 설명을 축약하여 일부만 보여주는 함수
    const getShortDescription = (description) => {
        const maxCharacters = 100; // 최대 표시 문자 수
        if (description.length <= maxCharacters) {
            return description; //설명이 짧은 경우 전체를 보여줌
        }
        return description.slice(0, maxCharacters) + '... \n <더보기>'; // 설명이 긴 경우 축약
    };

    if (!selectedProduct) return <div>상품을 찾을 수 없습니다.</div>;

    return (
        <Container className='product-detail-container'>
            <Row>
                <Col md={5}>
                    <Carousel>
                    <Carousel.Item>
                        <CarouselImages src={kaleImage} text="First slide" />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImages src={kaleImage} text="Second slide" />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImages src={kaleImage} text="Third slide" />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={7}>
                    <Card className='card-shadow-sm'>
                        <CardBody>
                            <Card.Title> <h4>케일일님 한판해요</h4></Card.Title>
                            <Card.Title className='pt-3 pb-3 border-top'> <h4>219,000원</h4></Card.Title>
                            <p className="card-text pt-3 pb-3 border-top">
                                <span className='badge bg-dark'>식물</span>
                                <span className='badge bg-dark'>식물</span>
                                <span className='badge bg-dark'>식물</span>
                            </p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='btn-group' role='group'>
                                    <Button className='btn btn-sm btn-outline-secondary'>장바구니 담기</Button>
                                    <Button className='btn btn-sm btn-outline-secondary'>주문하기</Button>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


export default ProductDetailPage;