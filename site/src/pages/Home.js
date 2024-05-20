/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Nav } from 'react-bootstrap';

// Components
import Carousel from '../components/Carousels';
import TodayList from '../components/TodayList';
import {Routes, Route, useNavigate, Link, Outlet} from 'react-router-dom';
import RealTimeChart from '../components/RealTimeChart';
import deliver from '../images/deliver.jpg';


function Home() {
  return (
    <div className="App">
      <Carousel />
      {/* Container를 사용하여 레이아웃 감싸기 */}
      <Container fluid style={{padding : '30px', marginBottom : '30px'}}>
        <Row > {/* 한 줄에 두 개의 컬럼 */}
          
          <Col xs={12}> {/* 작은 화면에서는 전체 너비, 큰 화면에서는 반씩 */}
            <TodayList />
          </Col>

          <Col xs={12} md={4} lg={6}>
            <ProductPage />
            <Delivery />
          </Col>

          <Col xs={12} md={4} lg={6}>
            <RealTimeChart />
          </Col>

        </Row>
      </Container>
      
      
    </div>
    
  );
}

function ProductPage({tap,xs,md,lg}){

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
              <th scope="col">인기순위</th>
              <th scope="col">목록</th>
              <th scope="col">실시간 금액</th>
              <th scope="col">수확 가능 갯수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td onClick={()=>{ navigate('/product/detail/3') }} >겨자채</td>
              <td>600</td>
              <td>5</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td onClick={()=>{ navigate('/product/detail/2') }}>상추</td>
              <td>800</td>
              <td>6</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td onClick={()=>{ navigate('/product/detail/3') }}>케일</td>
              <td>700</td>
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
        <h1>배송조회</h1>
        <img className="DeliverImage"  src= {deliver}
        style={{width:"350px", height:"350px", marginTop:"30px"}}
        />
    </Nav.Link>
    </div>
  );
}




export default Home;