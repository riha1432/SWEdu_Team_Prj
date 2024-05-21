import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Link import 추가
import Carousel from '../../components/Carousels';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

import kaleImage from '../../images/kale.jpg';
import lettuceImage from '../../images/lettuce.jpg';
import chardImage from '../../images/chard.jpg';
import mustardGreensImage from '../../images/mustardGreens.jpg';
import cilantroImage from '../../images/cilantro.jpg';
import chicoryImage from '../../images/chicory.jpg';

function Product(props) {

  const products = [
    { id: 1, product_title: '케일', image: kaleImage, price: 2640, description: '배송비 2500원 | X월 이내 (주말, 공휴일 제외)' },
    { id: 2, product_title: '상추', image: lettuceImage, price: 2690, description: '배송비 2500원 | X월 이내 (주말, 공휴일 제외)' },
    { id: 3, product_title: '근대', image: chardImage, price: 3910, description: '배송비 2500원 | X월 이내 (주말, 공휴일 제외)' },
    { id: 4, product_title: '겨자채', image: mustardGreensImage, price: 9000, description: '배송비 2500원 | X월 이내 (주말, 공휴일 제외)' },
    { id: 5, product_title: '고수', image: cilantroImage, price: 8310, description: '배송비 2500원 | X월 이내 (주말, 공휴일 제외)' },
    { id: 6, product_title: '치커리', image: chicoryImage, price: 9900, description: '배송비 2500원 | X월 이내 (주말, 공휴일 제외)' },
    // 나머지 상품 데이터도 추가해주세요
  ];

  let [fade2, setFade2] = useState('');

  useEffect(() => {
    setFade2('end');
    return () => {
      setFade2('');
    };
  }, []);

  return (
    <div>
      <Carousel />
      <div className={'start ' + fade2}>
        <h1 className='font'>Ai농가집성마켓에는<br/>
        다양한 엽채류들🥗과<br/>
        Ai성장 기반 농산물들🥬이 있어요!
        </h1>
      </div>
      <Container className>
      <Row xs={1} md={2} lg={3} className="g-5 justify-content-center">
        {products.map((product) => (
          <Col key={product.id} className=" justify-content-center">
            <Link to={`/Product/detail/${product.id}`} style={{ textDecoration: 'none' }}>
              <Card style={{height: '100%', borderRadius:'5%'}}>
                <div style={{ width: '100%', height: '280px', overflow: 'hidden' }}>
                  <Card.Img variant="top" src={product.image} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius:"5%" }} />
                </div>
                <Card.Body>
                  <Card.Title>
                      <h6>{product.product_title}</h6>
                      <h4>{product.price.toLocaleString()}원~</h4>
                  </Card.Title>
                  <Card.Text className='pt-3 pb-1 border-top' style={{ fontSize: '14px', color: 'gray' }}>
                    {product.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      </Container>
      <br />

    </div>
  );
}

export default Product;



            
      