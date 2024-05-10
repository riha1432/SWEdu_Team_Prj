/*eslint-disable*/
import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

// Components
import Carousel from '../components/Carousels';
import TodayList from '../components/TodayList';


import deliver from '../images/deliver.jpg';


function Home() {
  return (
    <div className="App">
      <Carousel />
      {/* Container를 사용하여 레이아웃 감싸기 */}
      <Container fluid style={{padding : '30px', marginBottom : '30px'}}>
        <Row > {/* 한 줄에 두 개의 컬럼 */}
          <Col xs={12} md={6}> {/* 작은 화면에서는 전체 너비, 큰 화면에서는 반씩 */}
            <TodayList />
          </Col>
          <Col xs={12} md={6}>  
            <BulletinBoard />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <ProductPage />
          </Col>
          <Col xs={12} md={6}>  
            <Delivery />
          </Col>
        </Row>
      </Container>

      <br/>
      <br/>
      <br/>
      <br/>
      
    </div>
    
  );
}

function BulletinBoard() {
  return (
    <div>
            <h1>게시판 제목</h1>
      <Card >
      <Card.Header>문의 게시판</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>게시글 1</ListGroup.Item>
        <ListGroup.Item>게시글 2</ListGroup.Item>
        <ListGroup.Item>게시글 3</ListGroup.Item>
      </ListGroup>
      </Card>      
    </div>
    
  );
}

function ProductPage(){
  return(
    <div>
        <h1>상품목록</h1>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">순위</th>
              <th scope="col">목록</th>
              <th scope="col">금액</th>
              <th scope="col">갯수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>케일</td>
              <td>1200</td>
              <td>5</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>상추</td>
              <td>2000</td>
              <td>6</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>겨자채</td>
              <td>1000</td>
              <td>8</td>
            </tr>
          </tbody>
        </table>
        
    </div>
  );
}

function Delivery(){
  return(
    <div>
        <h1>배송중</h1>
        <img className="DeliverImage"  src= {deliver}
         onClick={()=>
            <a href="/" />
         
         }  />
               
    </div>
  );
}




export default Home;
