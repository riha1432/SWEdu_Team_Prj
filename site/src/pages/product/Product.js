/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousels';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import kaleImage from '../../images/kale.jpg';
import lettuceImage from '../../images/lettuce.jpg';
import chardImage from '../../images/chard.jpg';
import mustardGreensImage from '../../images/mustardGreens.jpg';


function product(props) {

  const products = [
    { id: 1, product_title: '케일', image: kaleImage, description: '상품 설명 1' },
    { id: 2, product_title: '상추', image: lettuceImage, description: '상품 설명 2' },
    { id: 3, product_title: '근대', image: chardImage, description: '상품 설명 3' },
    { id: 4, product_title: '겨자채', image: mustardGreensImage, description: '상품 설명 4' },
    { id: 5, product_title: '케일', image: kaleImage, description: '상품 설명 1' },
    { id: 6, product_title: '상추', image: lettuceImage, description: '상품 설명 2' },
    
    // 나머지 상품 데이터도 추가해주세요
  ];

    let [fade2, setFade2] = useState('')
  
    useEffect(()=>{
      setFade2('end')
      return ()=>{
        setFade2('')
      }
    },[])


    return(
           <div>
            <Carousel />
            <div className={'start ' + fade2}>
              <h1 className='font'>Ai농가집성마켓에는<br/>
              다양한 엽채류들🥗과<br/>
              Ai성장 기반 농산물들🥬이 있어요!
              </h1>
           
             </div>

             <Row xs={2} md={2} lg={6} className="g-4">
                {products.map((product) => (
                    <Col key={product.id}>
                        <Card style={{ width: '18rem', margin: '0 auto' }}>
                            <Card.Img variant="top" style={{width:'auto', height:'300px'}} src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.product_title}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
                
            <br></br>

             <Row xs={2} md={2} lg={6} className="g-4">
                {products.map((product) => (
                    <Col key={product.id}>
                        <Card style={{ width: '18rem', margin: '0 auto' }}>
                            <Card.Img variant="top" style={{width:'auto', height:'300px'}} src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.product_title}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
        
);
}

export default product;
            
      