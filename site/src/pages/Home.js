/*eslint-disable*/
import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

// Components
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousels';
import TodayList from '../components/TodayList';
import Footer from '../components/Footer';


function Home(props) {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      {/* Container를 사용하여 레이아웃 감싸기 */}
      <Container fluid>
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
          <div>
            <h1>dddd</h1>
          </div>
          </Col>
        </Row>
      </Container>

      <br/>
      <br/>
      <br/>
      <br/>
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




export default Home;
