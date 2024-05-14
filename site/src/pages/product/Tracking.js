/*eslint-disable*/
import React from 'react';
import '../../App.css';
import Image from 'react-bootstrap/Image';
import Footer from '../../components/Footer';

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
        
        
        </>
   
    
    
                
    );
    
}

export default traking;