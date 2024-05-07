import React from 'react';

// 컴포넌트 임포트
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousels';
import TodayList from '../components/TodayList';
import Footer from '../components/Footer';

// Home 컴포넌트
function Home() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <div style={{ display: 'flex', justifyContent: 'left', width: '100%' }}>
        <div style={{ flexBasis: '50%' }}> {/* 가로 길이의 절반만 사용 */}
          <TodayList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
