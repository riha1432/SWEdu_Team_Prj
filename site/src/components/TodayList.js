/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link, useSearchParams } from 'react-router-dom';
import '../App.css';

import kaleImage from '../images/kale.jpg';
import lettuceImage from '../images/lettuce.jpg';
import chardImage from '../images/chard.jpg';
import mustardGreensImage from '../images/mustardGreens.jpg';

// 채소 데이터 배열
const vegetables = [
  
  { name: '케일', src: kaleImage, path: '/vegetable/kale' },
  { name: '상추', src: lettuceImage, path: '/vegetable/Lettuce' },
  { name: '근대', src: chardImage, path: '/vegetable/Chard' },
  { name: '겨자채', src: mustardGreensImage, path: '/vegetable/MustardGreens' },
  
];

// 컴포넌트 스타일
const imgStyle = {
  width: '100%', // 카드의 너비에 맞추기
  height: '150px', // 높이를 고정하여 일관된 크기 확보
  objectFit: 'cover', // 이미지가 공간을 채우도록 조절
  borderRadius: '50%',
  display: 'block',
  margin: 'auto',
  textDecoration: 'none',
};


function VegetableGallery(tap) {

  let [fade, setFade] = useState('')
  useEffect(()=>{
    setTimeout(()=> {setFade('end') }, 10)
    
    return ()=>{
      setFade('')
    }
  },[tap] )

  return (
    <Container>
      <div className={'start ' + fade}>
      <h1>이달의 상품 목록</h1>
      <Row>
        {vegetables.map((veg, index) => (
          <Col key={index} xs={6} md={6} lg={3} className="text-center">
            <Card >
              <Card.Img variant="top" src={veg.src} style={imgStyle} alt={veg.name} />
              <Card.Body >
                <Card.Title >
                  <Link to={veg.path} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {veg.name}
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </Container>
  );
}



export default VegetableGallery;

