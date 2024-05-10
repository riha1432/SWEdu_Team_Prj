/*eslint-disable*/
import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

// Components
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousels';
import TodayList from '../components/TodayList';
import Footer from '../components/Footer';

import deliver from '../images/deliver.jpg';


function Home() {
  return (
    <div className="App">
      <NavBar />
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
      <Footer />
      
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
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
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
