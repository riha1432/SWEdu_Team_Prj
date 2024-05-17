/*eslint-disable*/
import React from 'react';
import '../../css/Introduction.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let backgroundImageUrl = 'C:\Project\SWEdu_Team_Prj\site\public\introduction.jpg';

function IntroductionPage() {
  return (
    <>
           <div className='box-subTop ani-on'>
            <div className="bg1" >
                <div class="hide-on-pc" style={{ backgroundImage: 'url(${backgroundImageUrl}()' }} />
                <div class="hide-on-mobile" style={{ backgroundImage: 'url(${backgroundImageUrl}()' }} />
            </div>
            <div className="txt-wrap">
                <div className="txt-inner">
                    <h2 className="hidden">조회/예약</h2>
                    <h3 className="title-1 ani-1 delay-1">회사소개</h3>
                    <p className="txt-1 ani-1 delay-2">Ai농가집성이 글로벌마켓 산업의 혁신을 선도합니다.</p>
                </div>
            </div>
        </div>

      <div className='sub-container ceo'>
        <div className="bg-gray">
        <div className="grid1080">
        <img src='Rlogo.png' className='img' />
          <div className="txt-box">
         
                <p>Ai농가집성마켓은 <br />지속적인 혁신과 도전으로
                 <br />국내 1위를 넘어<br /> 
                <span className="fc-point">글로벌 마켓으로 도약</span>
                하겠습니다.</p>
              <div className="sign">
                Ai농가집성마켓 <em>일동</em>
              </div>
            </div>
          </div>
          </div>
      </div>
      



    </>
    
  );
}


export default IntroductionPage;