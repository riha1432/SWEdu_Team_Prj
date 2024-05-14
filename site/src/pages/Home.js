/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Nav } from 'react-bootstrap';

// Components
import Carousel from '../components/Carousels';
import TodayList from '../components/TodayList';
import {Routes, Route, useNavigate, Link, Outlet} from 'react-router-dom';
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

function BulletinBoard(tap) {

  let [fade3, setFade3] = useState('')
  useEffect(()=>{
    setTimeout(()=> {setFade3('end1') }, 10)
    
    return ()=>{
      setFade3('')
    }
  },[tap] )

  return (
    <div className={'start ' + fade3}>
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

function ProductPage(tap){

  let [fade4, setFade4] = useState('')
  useEffect(()=>{
    setTimeout(()=> {setFade4('end2') }, 9)
    
    return ()=>{
      setFade4('')
    }
  },[tap] )

  let navigate = useNavigate();
  return(
    <div className={'start ' + fade4}>
      <Nav.Link onClick={()=>{ navigate('/product') }}>
        <h1>상품목록</h1>
      </Nav.Link>
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
              <td onClick={()=>{ navigate('/product/detail/1') }} >케일</td>
              <td>1200</td>
              <td>5</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td onClick={()=>{ navigate('/product/detail/2') }}>상추</td>
              <td>2000</td>
              <td>6</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td onClick={()=>{ navigate('/product/detail/3') }}>겨자채</td>
              <td>1000</td>
              <td>8</td>
            </tr>
          </tbody>
        </table>
        
    </div>
  );
}

function Delivery(tap){

  let [fade5, setFade5] = useState('')
  useEffect(()=>{
    setTimeout(()=> {setFade5('end1') }, 10)
    
    return ()=>{
      setFade5('')
    }
  },[tap] )
  let navigate = useNavigate();

  return(
    <div className={'start ' + fade5}>
    <Nav.Link onClick={()=>{ navigate('/tracking') }}>
        <h1>배송중</h1>
        <img className="DeliverImage"  src= {deliver} />        
           
  
    </Nav.Link>
    </div>
  );
}




export default Home;
