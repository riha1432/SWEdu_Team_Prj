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
        <img src='rprofile.jpg' className='img' />
        
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
      
      <div className='text1'>
      <p><strong>안녕하세요?<br/>
       Ai농가집성마켓입니다.
      </strong></p>
      </div>

      <div className='text2'>
        <p>저희는 Ai를 활용해 작물의 성장단계를 볼수있습니다.</p>
        <p>또한, Ai를 통해 수량할수 있는 갯수를 알려줍니다.</p>
        <p>실시간 월별 차트를 통해 인기품목을 볼수 있습니다.</p>
        <p>Ai농가집성마켓은 최고의 경쟁력을 갖추고 지속가능한 성장을 이뤄나감으로써 ‘Global Market’라는 비전을 달성하고<br />
            전 세계 고객과 사회로부터 존경받고 사랑받는 농장이 되기 위해 노력하겠습니다.<br />
            Ai농가집성마켓의 끊임없는 도전과 노력에 많은 관심과 성원을 부탁드립니다.
            <br /><br />
            감사합니다.</p>
      </div>


    </>
    
  );
}


export default IntroductionPage;