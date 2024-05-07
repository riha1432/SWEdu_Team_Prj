import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import kaleImage from '../images/kaleImage.jpg';
import lettuceImage from '../images/lettuceImage.jpg';
import chardImage from '../images/chardImage.jpg';
import mustardGreensImage from '../images/mustardGreensImage.jpg';

// 채소 데이터 배열
const vegetables = [
  { name: '케일', src: kaleImage, path: '/vegetable/kale' },
  { name: '상추', src: lettuceImage, path: '/vegetable/Lettuce' },
  { name: '근대', src: chardImage, path: '/vegetable/Chard' },
  { name: '겨자채', src: mustardGreensImage, path: '/vegetable/MustardGreens' },
  
];

// 컴포넌트 스타일
const imgStyle = {
  width: '150px',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '50%',
  display: 'block',
  margin: 'auto',
};

function VegetableGallery() {
  return (
    <Container>
      <h1>이달의 상품 목록</h1>
      <Row>
        {vegetables.map((veg, index) => (
          <Col key={index} xs={6} md={5} lg={3} className="text-center">
            <Card>
              <Card.Img variant="top" src={veg.src} style={imgStyle} alt={veg.name} />
              <Card.Body>
                <Card.Title>
                  <Link to={veg.path}>{veg.name}</Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default VegetableGallery;

