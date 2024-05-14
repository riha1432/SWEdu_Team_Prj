/*eslint-disable*/
import React from 'react';
import '../../App.css';
import Image from 'react-bootstrap/Image';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';


let backgroundImageUrl = 'C:\Project\SWEdu_Team_Prj\site\public\trakingbg.jpg';


function traking(){
    return(
        <>
        <div className='box-subTop ani-on'>
            <div className="bg">
                <div class="hide-on-pc" style={{ backgrounImage: 'url(${backgroundImageUrl}()' }} />
                <div class="hide-on-mobile" style={{ backgrounImage: 'url(${backgroundImageUrl}()' }} />
            </div>
            <div className="txt-wrap">
                <div className="txt-inner">
                    <h2 className="hidden">조회/예약</h2>
                    <h3 className="title-1 ani-1 delay-1">배송조회</h3>
                    <p className="txt-1 ani-1 delay-2">Ai농가집성마켓은 고객님의 소중한 마음까지 전달합니다.</p>
                </div>
            </div>
        </div>
        <h1 className='font1'>전화번호로 조회하기</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <Stack direction="horizontal" gap={3}>
            <Form.Control  style={{ width: "400px", margin: "0 auto" }} placeholder="번호를 입력하세요..." />
            <div className="vr" />
            <Button variant="secondary">🔍</Button>
                
        </Stack>
        
            <br/>
            <br/>
            <br/>
        </div>
            <div class="section-title-line1">👇네이버에서도 만날 수 있는 스마트택배👇</div>
        <a href='https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%ED%83%9D%EB%B0%B0%EC%A1%B0%ED%9A%8C'
            style={{ display: "flex", justifyContent: "center" }}
        >
            <img src="deliverImage.png" style={{width:"400px", height:"400px"}}></img>
        </a>
        

          
        </>
   
    
    
                
    );
    
}

export default traking;